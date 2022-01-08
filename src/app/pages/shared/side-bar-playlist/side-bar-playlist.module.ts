import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarPlaylistComponent } from './side-bar-playlist.component';
import { NavPlaylistComponent } from './nav-playlist/nav-playlist.component';

@NgModule({
  declarations: [SideBarPlaylistComponent, NavPlaylistComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [SideBarPlaylistComponent],
})
export class SideBarPlaylistModule {}
