import React, { useState } from "react";
import UserOutput from "./Components/UserOutput";
import UserInput from "./Components/UserInput";
import ChildModal from "./Components/ChildModal";

function CheckValidation(data) {
  let age = data.userAgeVar;
  return data && data.userNameVar.trim().length >= 1 && age > 0;
}

function App() {
  const [tryAddUserExcp, setTryAddUserExcp] = useState();
  let [userInfo, setUserInfo] = useState([]);

  const redirectData = (value) => {
    if (CheckValidation(value)) {
      setTryAddUserExcp(false);
      setUserInfo((prevData) => [...prevData, value]);

      // // Hide the success alert after 3 seconds
      // setTimeout(() => {}, 3000);
    } else {
      setTryAddUserExcp(true);
    }
  };

  return (
    <div>
      <UserInput userInfo={redirectData} />
      {/* {showSuccessAlert && (
        <Alert variant="outlined" severity="success">
          New User Successfully added
        </Alert>
      )} */}
      {userInfo.map((value, id) => (
        <UserOutput
          key={id}
          userName={value.userNameVar}
          userAge={value.userAgeVar}
        />
      ))}
      {tryAddUserExcp && (
        <ChildModal
          openState={tryAddUserExcp}
          closeOpenState={(value) => setTryAddUserExcp(value)}
        ></ChildModal>
      )}
      {/* <ExceptionHandlingWindow
        errorexp={() => {
          setTryAddUser(true);
       /> }} */}
    </div>
  );
}

export default App;
