import { useEffect, useState } from "react";
import "./App.scss";
import { getTokenFromUrlAndReset } from "./config/spotify";
import LoginScreen from "./view/Auth/LoginScreen";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const { access_token: token = null } = getTokenFromUrlAndReset();

    if (token) {
      console.log("token:", token);
      setToken(token);
    }
  }, []);

  return (
    <div className="app">
      {token ? <h1>I'm Logged In 😎</h1> : <LoginScreen />}
    </div>
  );
}

export default App;
