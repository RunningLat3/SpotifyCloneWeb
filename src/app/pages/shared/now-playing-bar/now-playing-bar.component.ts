import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-now-playing-bar',
  templateUrl: './now-playing-bar.component.html',
  styleUrls: ['./now-playing-bar.component.scss'],
})
export class NowPlayingBarComponent implements OnInit {
  value1: number = 30;
  constructor() {}

  ngOnInit(): void {}
}
