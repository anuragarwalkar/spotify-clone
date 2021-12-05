// https://developer.spotify.com For More info on API
import { environment } from "../environment";
import { getBaseUrl } from "../utils/utilFunctions";

const redirectUri = getBaseUrl();

// Spotify scopes to get access of user resources
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${environment.auth}?client_id=${
  environment.clientId
}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`;
