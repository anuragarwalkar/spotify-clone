import React from "react";
import { useStateValue } from "../../store/stateProvider";

function Player() {
  const [{ user }] = useStateValue();
  return <div className="player">Welcome to spotify {user.display_name}</div>;
}

export default Player;
