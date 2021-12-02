import React from "react";
import Header from "../Header/Header";
import "./body.scss";

function Body({ user }) {
  return (
    <div className="body">
      <Header user={user} />
    </div>
  );
}

export default Body;
