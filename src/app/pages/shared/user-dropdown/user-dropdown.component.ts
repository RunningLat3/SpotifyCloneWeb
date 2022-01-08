import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { CurrentUserProfile } from 'src/app/services/auth/models/current-user-profile';

@Component({
  selector: 'sc-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss'],
})
export class UserDropdownComponent implements OnInit {
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  avatarBaseUrl: string = 'https://ui-avatars.com/api/';
  currentUserProfile?: CurrentUserProfile;
  avatar?: string;
  name: string = '';
  product: string = 'free'
  isDropDownVisible: boolean = false

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(
      (value) => (this.currentUserProfile = value)
    );

    this.name = this.currentUserProfile?.display_name ?? 'John Deo';
    this.generateAvatarUrl();
    this.product = this.currentUserProfile?.product ?? 'free'
  }

  private generateAvatarUrl(): void {
    let nameParam = this.name.replace(' ', '+');
    this.avatar =
      (this.currentUserProfile?.images &&
        this.currentUserProfile?.images[0]?.url) ??
      `${this.avatarBaseUrl}?name=${nameParam}`;
  }

  openLocation() {
    const url = 'https://www.spotify.com/us/premium/';
    window.open(url, '_blank');
  }

  logout() {
    this.authService.logout();
  }
}
