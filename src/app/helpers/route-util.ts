import { RouterUtil } from './router-util';
export class RouteUtil {
  static getPlaylistRouteUrl(playlistId: string) {
    return `/${RouterUtil.Configuration.Playlist}/${playlistId}`;
  }
}
