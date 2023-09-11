import { useState } from "react";

const UserOutput = (props) => {
  const [userOutputData, setUserOutputData] = useState([props.userOutputData]);

  setUserOutputData((prevState) => {
    return { ...prevState, userOutputData };
  });

  console.log(props.OutputData);

  return (
    <>
      {userOutputData.map((value) => {
        <div>
          {value.userNameVar} ({value.userAgeVar} years )
        </div>;
      })}
    </>
  );
};
export default UserOutput;
