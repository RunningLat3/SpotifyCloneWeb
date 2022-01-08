import { RouteUtil } from './../../../../helpers/route-util';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sc-nav-playlist',
  templateUrl: './nav-playlist.component.html',
  styleUrls: ['./nav-playlist.component.scss'],
})
export class NavPlaylistComponent implements OnInit {
  @Input() set playlist(value: SpotifyApi.PlaylistObjectSimplified) {
    this.playlistWithRoute = {
      ...value,
      routeUrl: RouteUtil.getPlaylistRouteUrl(value.id),
    };
  }
  playlistWithRoute!: SpotifyApi.PlaylistObjectSimplified & { routeUrl: string };
  constructor() {

  }

  ngOnInit(): void {
  }
}
