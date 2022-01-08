import { AuthGuard } from '../../helpers/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { Route } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CallbackComponent } from '../callback/callback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const webRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('../home/feature/home.module')).HomeModule,
      },
      {
        path: 'search',
        loadChildren: async () =>
          (await import('../search/feature/search.module')).SearchModule,
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
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
