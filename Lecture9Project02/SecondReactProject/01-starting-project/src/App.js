import React, { useState } from "react";
import UserOutput from "./Components/UserOutput";
import ExceptionHandlingWindow from "./Components/ExceptionHandlingWindow";
import UserInput from "./Components/UserInput";
import { Alert } from "@mui/material";

function CheckValidation(data) {
  let age = data.userAgeVar;
  return data && data.userNameVar.length >= 1 && age > 0;
}

function App() {
  const [tryAddUser, setTryAddUser] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  let [userInfo, setUserInfo] = useState([]);

  const redirectData = (value) => {
    if (CheckValidation(value)) {
      setTryAddUser(true);
      setUserInfo((prevData) => [...prevData, value]);
      setShowSuccessAlert(true);

      // Hide the success alert after 3 seconds
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    } else {
      setTryAddUser(false);
    }
  };

  return (
    <div>
      <UserInput userInfo={redirectData} />

      {showSuccessAlert && (
        <Alert variant="outlined" severity="success">
          New User Successfully added
        </Alert>
      )}

      {tryAddUser &&
        userInfo.map((value, id) => (
          <UserOutput
            key={id}
            userName={value.userNameVar}
            userAge={value.userAgeVar}
          />
        ))}

      {!tryAddUser && (
        <ExceptionHandlingWindow
          errorexp={() => {
            setTryAddUser(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
