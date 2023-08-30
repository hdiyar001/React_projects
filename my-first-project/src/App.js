import React, { useState } from "react";
import Dashboard from "./Components/DashboardComponents/Dashboard";
import Login from "./Components/LoginComponents/Login";

function App() {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const saveDataHandler = (value) => {
    setUserName(value);
    setShow(true);
  };
  return (
    <>
      {!show && (
        <div>
          <Login OnDataHandler={saveDataHandler} />
        </div>
      )}
      {show && (
        <div>
          <Dashboard userName={userName} />
        </div>
      )}
    </>
  );
}

export default App;
