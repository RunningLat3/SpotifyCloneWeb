// MAGIC LINE - WITHOUT THIS WOULD CAUSE THE BUILD TO FAIL
/// <reference types="spotify-api" />

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavItem } from './../side-bar/models/nav-items';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-side-bar-playlist',
  templateUrl: './side-bar-playlist.component.html',
  styleUrls: ['./side-bar-playlist.component.scss'],
})
export class SideBarPlaylistComponent implements OnInit {
  navItems: NavItem[] = [
    {
      label: 'Liked Songs',
      path: '/collection/tracks',
      icon: faHeart,
    },
  ];
  playlists: SpotifyApi.ListOfUsersPlaylistsResponse = <
    SpotifyApi.ListOfUsersPlaylistsResponse
  >{
    items: [
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: '1231231231',
        name: 'asdasdasd',
        collaborative: false,
        snapshot_id: 'asdasdasdasda',
        external_urls: {
          spotify: 'asdasda',
        },
        href: 'asdasdasd',
        images: [
          {
            url: 'asdasdasd',
          },
        ],
        tracks: {
          href: 'asdasda',
          total: 123,
        },
        uri: 'asdasdasd',
        owner: {
          external_urls: {
            spotify: 'asdasda',
          },
          href: 'asdasd',
          id: 'asdasdasd',
          uri: 'asdasdasd',
          type: 'user',
        },
        type: 'playlist',
      },
    ],
    href: '',
    limit: 50,
    offset: 0,
    total: 10,
  };
  constructor() {}

  ngOnInit(): void {}
}
