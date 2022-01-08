import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDropdownModule } from './../user-dropdown/user-dropdown.module';
import { TopBarComponent } from './top-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, FontAwesomeModule, UserDropdownModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
