import { Alert, AlertTitle, Button } from "@mui/material";
import React from "react";

const ExceptionHandlingWindow = (props) => {
  const okButtonHandler = () => {
    props.errorexp();
  };

  return (
    <div>
      <body>
        <Alert severity="warning">
          <AlertTitle>Invalid Input</AlertTitle>
          Please enter valid name and age!!
        </Alert>

        {/* <button>Okay</button> */}
        <Button onClick={okButtonHandler} variant="outlined" color="error">
          Okay
        </Button>
      </body>
    </div>
  );
};

export default ExceptionHandlingWindow;
