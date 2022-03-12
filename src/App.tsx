import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.scss";
import {
  setDiscoverWeekly,
  setPlayLists,
  setToken,
  setUser,
} from "./store/reducer";
import { getTokenFromUrlAndReset } from "./utils/utilFunctions";
import LoginScreen from "./view/Auth/LoginScreen";
import Player from "./view/Player/Player";

// Def values
const spotify = new SpotifyWebApi();

function App() {
  const token = useSelector((state: any) => state.token);
  const dispatch = useDispatch();

  const initializeSpotifyAccess = useCallback(async () => {
    const { access_token: accessToken = null } = getTokenFromUrlAndReset();

    if (accessToken) {
      dispatch(setToken(accessToken));

      spotify.setAccessToken(accessToken);

      // Getting all user details from spotify API
      const user = await spotify.getMe();
      if (user) {
        dispatch(setUser(user));
      }

      // Getting all user playlist from spotify API
      const playlist = await spotify.getUserPlaylists();

      if (playlist?.items) {
        dispatch(setPlayLists(playlist.items));
      }
      const {
        playlists: {
          items: [{ id }],
        },
      } = await spotify.searchPlaylists("discover weekly");
      const discoverWeekly = await spotify.getPlaylist(id);

      if (discoverWeekly) {
        dispatch(setDiscoverWeekly(discoverWeekly));
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
