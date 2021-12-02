import React from "react";
import { loginUrl } from "../../config/spotify";
import { ReactComponent as SpotifyLogo } from "../../sp_logo.svg";
import "./login.scss";

function LoginScreen() {
  return (
    <div className="login">
      <SpotifyLogo className="login__logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      {/* Spotify logo */}
      {/* Login with spotify button */}
    </div>
  );
}

export default LoginScreen;
