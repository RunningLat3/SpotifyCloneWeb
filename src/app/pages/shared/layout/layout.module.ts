import { NowPlayingBarModule } from './../now-playing-bar/now-playing-bar.module';
import { TopBarModule } from './../top-bar/top-bar.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarModule } from '../side-bar/side-bar.module';
import { MainViewModule } from '../main-view/main-view.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule,
    MainViewModule,
    SideBarModule,
    TopBarModule,
    NowPlayingBarModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
