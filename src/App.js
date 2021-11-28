import { useEffect } from "react";
import "./App.scss";
import LoginScreen from "./view/Auth/LoginScreen";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <LoginScreen />
    </div>
  );
}

export default App;
