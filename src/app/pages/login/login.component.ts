import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'sc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginURL: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    let returnUrl: string = this.route.snapshot.queryParams['returnUrl'] || '/';
    sessionStorage.setItem("returnUrl", returnUrl);
  }

  onClick() {
    this.authService.login().subscribe((result: any) => {
      window.location.href = result;
    });
  }
}
