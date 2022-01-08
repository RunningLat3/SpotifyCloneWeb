import { AuthService } from './../services/auth/auth.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, switchMap, take, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.currentUser.pipe(
      take(1),
      switchMap(({ accessToken }) => {
        if (!accessToken) {
          return next.handle(req);
        }

        const headers = req.headers.set(
          'Authorization',
          `Bearer ${accessToken}`
        );
        const authReq = req.clone({
          headers,
        });

        return next.handle(authReq);
      })
    );
  }
}

export const authInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
