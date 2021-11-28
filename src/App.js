import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.scss";
import { getTokenFromUrlAndReset } from "./config/spotify";
import LoginScreen from "./view/Auth/LoginScreen";
import Player from "./view/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  const initializeSpotifyAccess = async () => {
    const { access_token: accessToken = null } = getTokenFromUrlAndReset();

    if (accessToken) {
      setToken(accessToken);
      spotify.setAccessToken(accessToken);
      const userProf = await spotify.getMe();
      console.log("userProf:", userProf);
    }
  };

  useEffect(() => {
    initializeSpotifyAccess();
  }, []);

  return <div className="app">{token ? <Player /> : <LoginScreen />}</div>;
}

export default App;
