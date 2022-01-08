export enum TokenRequestType {
  Refresh = 'Refresh',
  Access = 'Access',
}

export interface SpotifyAuthorizeResponse {
  code: string | null;
  state?: string | null;
  error?: string | null;
  tokenRequestType: TokenRequestType;
}
