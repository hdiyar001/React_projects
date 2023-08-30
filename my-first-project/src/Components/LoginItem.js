import React, { useState } from "react";
import "./Login.css";

import LoginItem from "./LoginItem";

const Login = () => {
  const loginInfo = [
    ["Diyar", "1234"],
    ["Jano", "4325"],
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (id, ChangeHandler) => {
    if (id == "username") {
      setUsername(ChangeHandler.target.value);
    } else {
      setPassword(ChangeHandler.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(username);
    console.log(password);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>username</p>
      <input
        type="text"
        onChange={(event) => userNameHandler("username", event)}
      ></input>
      <p>password</p>
      <input
        type="text"
        onChange={(event) => userNameHandler("password", event)}
      ></input>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
