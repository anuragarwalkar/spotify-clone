import React from "react";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useStateValue } from "../../store/stateProvider";
import "./player.scss";

function Player() {
  const [{ user }] = useStateValue();
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body user={user} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
