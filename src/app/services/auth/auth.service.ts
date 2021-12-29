import { SpotifyAuthorizeResponse } from './models/spotify-auth-model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentUserProfileReponse } from './models/current-user-profile-response-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<CurrentUserProfileReponse>;
  public currentUser: Observable<CurrentUserProfileReponse>;

  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<CurrentUserProfileReponse>(
      <CurrentUserProfileReponse>{}
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get userValue(): CurrentUserProfileReponse {
    return this.currentUserSubject.value || null;
  }

  public isAuthenticated(): boolean {
    const user = this.userValue;
    return user && Object.keys(user).length > 0;
  }

  login() {
    return this.http.get(`${environment.apiBaseUrl}/auth/login-url`, {
      responseType: 'text',
    });
  }

  authenticate(data: SpotifyAuthorizeResponse) {
    return this.http
      .post<CurrentUserProfileReponse>(
        `${environment.apiBaseUrl}/auth/authenticate`,
        { ...data },
        {
          withCredentials: true,
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            accepts: '*/*',
          }),
        }
      )
      .pipe(
        map((user: CurrentUserProfileReponse) => {
          this.currentUserSubject.next(user);
          this.startRefreshTokenTimer();
          return user;
        })
      );
  }

  logout() {
    this.http
      .post<CurrentUserProfileReponse>(
        `${environment.apiBaseUrl}/auth/revoke-token`,
        {},
        {
          withCredentials: true,
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            accepts: '*/*',
          }),
        }
      )
      .subscribe(() => {
        this.stopRefreshTokenTimer();
        this.currentUserSubject.next(<CurrentUserProfileReponse>{});
        this.router.navigate(['/login']);
      });
  }

  refreshToken() {
    return this.http
      .post<CurrentUserProfileReponse>(
        `${environment.apiBaseUrl}/auth/refresh-token`,
        {},
        {
          withCredentials: true,
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            accepts: '*/*',
          }),
        }
      )
      .pipe(
        map((user: CurrentUserProfileReponse) => {
          this.currentUserSubject.next(user);
          this.startRefreshTokenTimer();
          return user;
        })
      );
  }

  private refreshTokenTimeout: any;

  private startRefreshTokenTimer() {
    // set a timeout to refresh the token a minute before it expires
    const expires = this.userValue.expiresIn * 1000;
    const timeout = expires + Date.now() - 60;
    this.refreshTokenTimeout = setTimeout(
      () => this.refreshToken().subscribe(),
      timeout
    );
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
