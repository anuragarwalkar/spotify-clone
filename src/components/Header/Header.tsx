import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./header.scss";

function Header() {
  const user = useSelector((state: any) => state.user);
  const [userImg, setUserImg] = useState("");

  const setUseImageCallback = () => {
    if (user) {
      const [{ url }] = user.images;
      if (url) {
        setUserImg(url);
      }
    }
  };

  useEffect(setUseImageCallback, [user]);

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs" />
      </div>
      <div className="header__right">
        <Avatar src={userImg} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
