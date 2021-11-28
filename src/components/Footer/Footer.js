import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>Album and song details</p>
      </div>
      <div className="footer__center">
        <p>Player Control</p>
      </div>
      <div className="footer__right">
        <p>Volumne controls</p>
      </div>
    </div>
  );
}

export default Footer;
