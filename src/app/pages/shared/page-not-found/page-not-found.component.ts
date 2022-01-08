import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sc-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  baseUrl: string = '';
  constructor() { }

  ngOnInit(): void {
    this.baseUrl = environment.baseUrl
  }

}
