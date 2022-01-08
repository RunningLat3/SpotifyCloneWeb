import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  faBack = faChevronLeft;
  faForward = faChevronRight;
  constructor(private location: Location) {}

  ngOnInit(): void {}

  back() {
    this.location.back();
  }

  forward() {
    this.location.forward();
  }
}
