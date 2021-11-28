import { useCallback, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.scss";
import { getTokenFromUrlAndReset } from "./config/spotify";
import { actionTypes } from "./store/reducer";
import { useStateValue } from "./store/stateProvider";
import LoginScreen from "./view/Auth/LoginScreen";
import Player from "./view/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  const initializeSpotifyAccess = useCallback(async () => {
    const { access_token: accessToken = null } = getTokenFromUrlAndReset();

    if (accessToken) {
      dispatch({ type: actionTypes.SET_TOKEN, token: accessToken });
      spotify.setAccessToken(accessToken);
      const user = await spotify.getMe();
      dispatch({ type: actionTypes.SET_USER, user });
      const playlist = await spotify.getUserPlaylists();
      console.log("playlist:", playlist);
      if (playlist?.items) {
        dispatch({
          type: actionTypes.SET_PLAYLISTS,
          playlists: playlist.items,
        });
      }
    }
  }, [dispatch]);

  console.log("user:", user);
  console.log("token:", token);

  useEffect(() => {
    initializeSpotifyAccess();
  }, [initializeSpotifyAccess]);

  return <div className="app">{token ? <Player /> : <LoginScreen />}</div>;
}

export default App;
