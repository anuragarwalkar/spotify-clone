import React from "react";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useStateValue } from "../../store/stateProvider";

function Player() {
  const [{ user }] = useStateValue();
  return (
    <div className="player">
      <div className="player__body">
        <h1>Welcome to spotify {user?.display_name}</h1>
        <Sidebar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Player;
