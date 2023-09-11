import { useState } from "react";
import UserOutput from "./Components/UserOutput";
import ExceptionHandlingWindow from "./Components/ExceptionHandlingWindow";
import UserInput from "./Components/UserInput";

function CheckValidation(data) {
  return data && data.userNameVar >= 1;
}

function App() {
  const [tryAddUser, setTryAddUser] = useState(true); // Initialize as false
  const [redirectUserInputs, setRedirectUserInputs] = useState({});

  const redirectData = (value) => {
    console.log(value);
    if (CheckValidation(value)) {
      setTryAddUser(true);
      setRedirectUserInputs(value);
    } else {
      setTryAddUser(false);
    }
  };

  return (
    <div>
      <UserInput userInfo={redirectData} />
      {tryAddUser && <UserOutput />}
      {!tryAddUser && <ExceptionHandlingWindow />}
    </div>
  );
}

export default App;
