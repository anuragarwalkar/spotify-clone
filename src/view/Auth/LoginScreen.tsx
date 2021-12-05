import { ReactComponent as SpotifyLogo } from "../../assets/sp_logo.svg";
import { loginUrl } from "../../config/spotify";
import "./login.scss";

function LoginScreen() {
  return (
    <div className="login">
      <SpotifyLogo className="login__logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default LoginScreen;
