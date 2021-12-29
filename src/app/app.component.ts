import { Component } from '@angular/core';

@Component({
  selector: 'spotify-clone-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Spotify Clone";
}
