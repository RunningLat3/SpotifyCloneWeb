import { AuthGuard } from '../../helpers/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from '../login/login-component/login.component';
import { CallbackComponent } from '../login/callback-component/callback.component';

export const webRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('../home/home.module')).HomeModule,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'callback',
    component: CallbackComponent,
  }
];
