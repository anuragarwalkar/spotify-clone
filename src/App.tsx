import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import {
  getDiscoverWeekly,
  getPlaylists,
  getUser,
  setToken,
} from "./store/reducer";
import { getTokenFromUrlAndReset } from "./utils/utilFunctions";
import LoginScreen from "./view/Auth/LoginScreen";
import Player from "./view/Player/Player";

function App() {
  const token = useSelector((state: any) => state.token);
  const dispatch = useDispatch();

  const initializeSpotifyAccess = useCallback(async () => {
    const { access_token: accessToken = null } = getTokenFromUrlAndReset();

    if (accessToken) {
      dispatch(setToken(accessToken));
      dispatch(getUser());
      dispatch(getPlaylists());
      dispatch(getDiscoverWeekly());
    }
  }, [dispatch]);

  const onInit = () => {
    initializeSpotifyAccess();
  };

  useEffect(onInit, [initializeSpotifyAccess]);

  return <div className="app">{token ? <Player /> : <LoginScreen />}</div>;
}

export default App;
