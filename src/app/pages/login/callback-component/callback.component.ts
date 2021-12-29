import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SpotifyAuthorizeResponse } from 'src/app/services/auth/models/spotify-auth-model';
import { TokenRequestType } from 'src/app/services/auth/models/token-request-type.enum';

@Component({
  template: '',
})
export class CallbackComponent implements OnInit {
  authorizationCodeResponse: SpotifyAuthorizeResponse = {
    code: '',
    tokenRequestType: TokenRequestType.Access,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((queryParams) => !!queryParams))
      .subscribe((params: any) => {
        this.authorizationCodeResponse = {
          code: params.code || '',
          error: params.error || '',
          state: params.state || '',
          tokenRequestType: TokenRequestType.Access,
        };
      });

    this.authService
      .authenticate(this.authorizationCodeResponse)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
