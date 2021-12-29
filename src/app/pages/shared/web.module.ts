import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from './layout/layout.module';
import { webRoutes } from './web.routes';

import { AuthService } from 'src/app/services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forRoot(webRoutes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  providers: [AuthService],
  exports: [RouterModule],
})
export class WebModule {}
