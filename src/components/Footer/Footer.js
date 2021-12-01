import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Slider } from "@mui/material";
import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02f3582107f127c2765fafb431"
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__sonfInfo">
          <h4>Taare Ginn</h4>
          <p>...</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__app-icon" />
        <PlayCircleOutlineIcon className="footer__app-icon" fontSize="large" />
        <SkipNextIcon className="footer__app-icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <PlaylistPlayIcon className="footer__playlist-icon" />
        <div className="footer__volume-control">
          <VolumeDownIcon className="footer__volume-down" />
          <Slider size="small" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
