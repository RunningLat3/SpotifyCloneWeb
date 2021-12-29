import { MainViewComponent } from './../../shared/main-view/main-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainViewComponent],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [MainViewComponent]
})
export class MainViewModule {}
