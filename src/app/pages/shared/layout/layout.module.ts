import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarModule } from '../side-bar/side-bar.module';
import { MainViewModule } from '../main-view/main-view.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [RouterModule, MainViewModule, SideBarModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
