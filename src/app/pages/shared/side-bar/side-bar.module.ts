import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from './side-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [SideBarComponent]
})
export class SideBarModule { }
