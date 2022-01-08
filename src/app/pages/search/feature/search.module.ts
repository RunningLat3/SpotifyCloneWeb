import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchComponent,
      },
    ]),
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
