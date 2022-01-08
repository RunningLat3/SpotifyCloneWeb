import { NavItem } from './models/nav-items';
import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faSearch,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'sc-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  navItems: NavItem[] = [
    {
      label: 'Home',
      path: '',
      icon: faHome,
      exact: true,
    },
    {
      label: 'Search',
      path: '/search',
      icon: faSearch,
    },
    {
      label: 'Your Library',
      path: '/collection/playlists',
      icon: faBook,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
