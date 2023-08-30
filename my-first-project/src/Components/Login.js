// import React, { useState } from "react";
import "./Login.css";
import LoginItem from "./LoginItem";

const Login = (props) => {
  console.log("value");
  const saveDataHandler = (value) => {
    props.OnDataHandler(value);
  };
  return (
    <div>
      <h2>Login</h2>
      <LoginItem OnSubmitHandler={saveDataHandler} />
    </div>
  );
};
export default Login;
