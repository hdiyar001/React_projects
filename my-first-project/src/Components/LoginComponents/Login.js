// import React, { useState } from "react";
import "./Login.css";
import LoginItem from "./LoginItem";



const Login = () => {


  const SaveSubmitInput = (value) => {
    console.log(value);
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginItem OnSubmitHandler={SaveSubmitInput} />
    </div>
  );
};
export default Login;
