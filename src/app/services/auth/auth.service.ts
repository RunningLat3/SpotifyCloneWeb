import { SpotifyAuthorizeResponse } from './models/spotify-auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentUserProfile } from './models/current-user-profile';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<CurrentUserProfile>;
  public currentUser: Observable<CurrentUserProfile>;

  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<CurrentUserProfile>(
      <CurrentUserProfile>{}
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get userValue(): CurrentUserProfile {
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
      .post<CurrentUserProfile>(
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
        map((user: CurrentUserProfile) => {
          if (user) {
            this.currentUserSubject.next(user);
            this.startRefreshTokenTimer();
          }
          return user;
        })
      );
  }

  logout() {
    this.http
      .post<CurrentUserProfile>(
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
        this.currentUserSubject.next(<CurrentUserProfile>{});
        this.router.navigate(['/login']);
      });
  }

  refreshToken() {
    return this.http
      .post<CurrentUserProfile>(
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
        map((user: CurrentUserProfile) => {
          if (user) {
            this.currentUserSubject.next(user);
            this.startRefreshTokenTimer();
          }
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
