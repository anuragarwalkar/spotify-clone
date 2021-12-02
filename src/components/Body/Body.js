import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import React from "react";
import { useStateValue } from "../../store/stateProvider";
import Header from "../Header/Header";
import "./body.scss";

function Body() {
  const [{ discoverWeekly }] = useStateValue();
  const [{ url } = {}] = discoverWeekly?.images || [];

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={url} alt="Discover Weekly" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default Body;
