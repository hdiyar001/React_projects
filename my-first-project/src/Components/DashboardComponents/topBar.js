import React, { useState } from "react";
import "./topBar.css";

const topBar = (props) => {
  const logoutHandler = () => {
    props.onLogout(false);
    console.log("logbar");
  };
  return (
    <div>
      <p>Hello : {props.userName}</p>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default topBar;
