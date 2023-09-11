import { useState } from "react";
import UserOutput from "./Components/UserOutput";
import ExceptionHandlingWindow from "./Components/ExceptionHandlingWindow";
import UserInput from "./Components/UserInput";

function CheckValidation(data) {
  
  return data && data.userNameVar.length >= 1;
  
}



function App() {
  const [tryAddUser, setTryAddUser] = useState(true); // Initialize as false
  let userName = "";
  let userAge = "";


  const redirectData = (value) => {
    console.log(value);

      setTryAddUser(CheckValidation(value));
      setRedirectUserInputs(value);
   
  };

  return (
    <div>
      <UserInput userInfo={redirectData} />
      {tryAddUser && <UserOutput OutputData = {redirectUserInputs}  />}
      {!tryAddUser && <ExceptionHandlingWindow errorexp = {()=>{setTryAddUser(true)}} />}
    </div>
  );
}

export default App;
