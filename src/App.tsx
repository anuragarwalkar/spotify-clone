import { useCallback, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.scss";
import { actionTypes } from "./store/reducer";
import { useStateValue } from "./store/stateProvider";
import { getTokenFromUrlAndReset } from "./utils/utilFunctions";
import LoginScreen from "./view/Auth/LoginScreen";
import Player from "./view/Player/Player";

// Def values
const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch]: any = useStateValue();

  const initializeSpotifyAccess = useCallback(async () => {
    const { access_token: accessToken = null } = getTokenFromUrlAndReset();

    if (accessToken) {
      dispatch({ type: actionTypes.SET_TOKEN, token: accessToken });
      spotify.setAccessToken(accessToken);

      // Getting all user details from spotify API
      const user = await spotify.getMe();
      if (user) {
        dispatch({ type: actionTypes.SET_USER, user });
      }

      // Getting all user playlist from spotify API
      const playlist = await spotify.getUserPlaylists();

      if (playlist?.items) {
        dispatch({
          type: actionTypes.SET_PLAYLISTS,
          playlists: playlist.items,
        });
      }
      const {
        playlists: {
          items: [{ id }],
        },
      } = await spotify.searchPlaylists("discover weekly");
      const discoverWeekly = await spotify.getPlaylist(id);

      if (discoverWeekly) {
        dispatch({
          type: actionTypes.SET_DISCOVER_WEEKLY,
          discoverWeekly: discoverWeekly,
        });
      }
    }
  }, [dispatch]);

  const onInit = () => {
    initializeSpotifyAccess();
  };

  useEffect(onInit, [initializeSpotifyAccess]);

  return <div className="app">{token ? <Player /> : <LoginScreen />}</div>;
}

export default App;
