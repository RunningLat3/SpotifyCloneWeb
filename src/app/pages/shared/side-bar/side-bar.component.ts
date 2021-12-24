import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faBook, faPlusCircle, faHeart, faRss } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faHome = faHome;
  faSearch = faSearch;
  faBook = faBook;
  faPlusCircle = faPlusCircle;
  faHeart = faHeart;
  faRss = faRss
  constructor() { }

  ngOnInit(): void {
  }

}
