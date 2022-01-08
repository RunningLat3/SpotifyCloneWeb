import { TopBarModule } from './../top-bar/top-bar.module';
import { MainViewComponent } from './../../shared/main-view/main-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainViewComponent],
  imports: [
    RouterModule,
    CommonModule,
    TopBarModule
  ],
  exports: [MainViewComponent]
})
export class MainViewModule {}
