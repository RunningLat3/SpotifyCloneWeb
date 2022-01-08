import { SideBarPlaylistModule } from './../side-bar-playlist/side-bar-playlist.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from './side-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule, FontAwesomeModule, RouterModule, SideBarPlaylistModule
  ],
  exports: [SideBarComponent]
})
export class SideBarModule { }
