import { useState } from "react";

import UserOutput from "./Components/UserOutput";
import ExceptionHandlingWindow from "./Components/ExceptionHandlingWindow";
import UserInput from "./Components/UserInput";

function CheckValidation(data) {
  return !(data.userNameVar < 1 || !data);
}
function App() {
  const [tryAddUser, setTryAddUser] = useState(true);
  const [redirectUserInupts, setRedirectUserInupts] = useState([]);

  const redirectData = (value) => {
    console.log(value);
    // if (CheckValidation(value)) {
    //   setTryAddUser(true);
    //   setRedirectUserInupts(value);
    // } else {
    //   setTryAddUser(false);
    // }
  };
  return (
    <div>
      <UserInput userInfo={redirectData} />
      {/* {tryAddUser && <UserOutput />}
      {!tryAddUser && <ExceptionHandlingWindow />} */}
    </div>
  );
}

export default App;
