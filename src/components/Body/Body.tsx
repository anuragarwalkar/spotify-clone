import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";
import "./body.scss";

function Body() {
  const discoverWeekly = useSelector((state: any) => state.discoverWeekly);

  const [{ url }]: any = discoverWeekly?.images || [{}];

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        {discoverWeekly && <img src={url} alt="Discover Weekly" />}

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

        {discoverWeekly?.tracks.items.map((item: any) => (
          <SongRow key={item.track.name} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
