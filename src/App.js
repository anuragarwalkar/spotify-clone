import { useCallback, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.scss";
import { getTokenFromUrlAndReset } from "./config/spotify";
import { actionTypes } from "./store/reducer";
import { useStateValue } from "./store/stateProvider";
import LoginScreen from "./view/Auth/LoginScreen";
import Player from "./view/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  const initializeSpotifyAccess = useCallback(async () => {
    const { access_token: accessToken = null } = getTokenFromUrlAndReset();

    if (accessToken) {
      setToken(accessToken);
      spotify.setAccessToken(accessToken);
      const user = await spotify.getMe();
      dispatch({ type: actionTypes.SET_USER, user });
    }
  }, [dispatch]);

  console.log("user:", user);

  useEffect(() => {
    initializeSpotifyAccess();
  }, [initializeSpotifyAccess]);

  return <div className="app">{token ? <Player /> : <LoginScreen />}</div>;
}

export default App;
