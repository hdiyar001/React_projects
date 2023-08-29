// import React, { useState } from "react";
import "./Login.css";
import LoginItem from "./LoginItem";

const Login = () => {
  const loginInfo = [
    ["Diyar", "1234"],
    ["Jano", "4325"],
  ];
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>username</p>
      <input type="text"></input>
      <p>password</p>
      <input type="text"></input>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
