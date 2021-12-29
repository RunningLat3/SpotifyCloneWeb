export interface CurrentUserProfileReponse {
  id: string | null,
  displayName: string | null,
  product: string | null ,
  country: string | null,
  accessToken: string | null;
  tokenType: string | null;
  expiresIn: number;
  images: Array<Image>
}


export interface Image {
  height: number;
  width: number;
  url: string | null
}
