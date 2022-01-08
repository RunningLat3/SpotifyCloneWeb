// MAGIC LINE - WITHOUT THIS WOULD CAUSE THE BUILD TO FAIL
/// <reference types="spotify-api" />

export interface CurrentUserProfile extends SpotifyApi.CurrentUsersProfileResponse {
  accessToken: string | undefined;
  tokenType: string | undefined;
  expiresIn: number;
}
