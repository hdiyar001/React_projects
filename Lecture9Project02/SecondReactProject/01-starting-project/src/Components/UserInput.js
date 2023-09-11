import { Button, TextField } from "@mui/material";
import { useState } from "react";
import userStyle from "./UserInput.css";
const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const inputsHandler = (id, event) => {
    if (id === "userName") {
      setUserName(event.target.value);
    } else {
      setUserAge(event.target.value);
    }
  };
  const OnSubmitHandler = (event) => {
    event.preventDefault();
    const userInfoObj = {
      userNameVar: userName,
      userAgeVar: userAge,
    };

    props.userInfo(userInfoObj);
  };

  return (
    <form onSubmit={OnSubmitHandler}>
      <TextField
        id="standard-basic"
        label="Username"
        variant="standard"
        value={userName}
        onChange={(evt) => inputsHandler("userName", evt)}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Age"
        variant="standard"
        value={userAge}
        onChange={(evt) => inputsHandler("userAge", evt)}
      />
      <br />
      <Button type="submit" variant="contained">
        Add User
      </Button>

      {/* <button>ADD USER</button> */}
    </form>
  );
};
export default UserInput;
