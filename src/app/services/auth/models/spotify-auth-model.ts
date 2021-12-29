import { TokenRequestType } from "./token-request-type.enum";

export interface SpotifyAuthorizeResponse {
  code: string | null;
  state?: string | null;
  error?: string | null;
  tokenRequestType: TokenRequestType;
}
