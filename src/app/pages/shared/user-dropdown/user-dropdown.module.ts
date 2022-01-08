import { UserDropdownComponent } from './user-dropdown.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'


@NgModule({
  declarations: [UserDropdownComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NzDropDownModule
  ],
  exports: [UserDropdownComponent]
})
export class UserDropdownModule { }
