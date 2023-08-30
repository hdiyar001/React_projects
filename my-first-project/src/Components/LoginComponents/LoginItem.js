import React, { useState } from "react";
import "./LoginItem.css";

const Login = (props) => {


  const loginInfo = [
    ["Diyar", "1234"],
    ["Jano", "4325"],
  ];

  let check = false;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (id, ChangeHandler) => {
    if (id === "username") {
      setUsername(ChangeHandler.target.value);
    } else {
      setPassword(ChangeHandler.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();


    const userData = {
      Username : '',
      Password : ''
    };
   
    loginInfo.forEach(element => {
      if(element.includes(username) && element.includes(password)) {
        check = true;
        userData.Username = element[0];
        userData.Password = element[1];
      }
      
      
    });

    if(check == true ){
      console.log(userData);
      props.OnSubmitHandler(userData);
    }


  };
  return (
    <form onSubmit={submitHandler} className="form-container">
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
      <br />
      <button className="login-btn" type="submit">
        Login
      </button>
    </form>
  );
};
export default Login;
