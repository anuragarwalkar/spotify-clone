import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./header.scss";

function Header({ user }) {
  const [userImg, setUserImg] = useState("");

  useEffect(() => {
    const [{ url }] = user.images;
    if (url) {
      setUserImg(url);
    }
  }, [user]);

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs" />
      </div>
      <div className="header__right">
        <Avatar src={userImg} />
        <h4>{user.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
