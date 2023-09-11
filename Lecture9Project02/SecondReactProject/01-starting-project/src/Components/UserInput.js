import { useState } from "react";
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
      userNameVar:  userName ,
      userAgeVar:  userAge ,
    };
    
    props.userInfo(userInfoObj);
  };

  return (
    <form onSubmit={OnSubmitHandler}>
      <p>Username</p>
      <input
        type="text"
        value={userName}
        onChange={(evt) => inputsHandler("userName", evt)}
      />
      <p>Age(YEARS)</p>
      <input
        type="text"
        value={userAge}
        onChange={(evt) => inputsHandler("userAge", evt)}
      />
      <br />
      <br />
      <button type="submit">ADD USER</button>
    </form>
  );
};
export default UserInput;
