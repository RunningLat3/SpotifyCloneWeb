import { authInterceptorProvider } from './helpers/auth.interceptor';
import { WebModule } from './pages/shared/web.module';
import { RouterModule } from '@angular/router';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components and Modules
import { AppComponent } from './app.component';
import { httpErrorInterceptorProvider } from './helpers/http-error.interceptor';
import { appInitializer } from './helpers/app.initializer';
import { AuthService } from './services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    WebModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
    authInterceptorProvider,
    httpErrorInterceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
