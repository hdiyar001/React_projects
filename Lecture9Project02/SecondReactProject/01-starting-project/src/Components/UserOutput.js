import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import UserOutputCss from "./UserOutput.module.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const UserOutput = ({ userName, userAge }) => {
  return (
    <div className={UserOutputCss.main}>
      <Stack direction="row" spacing={2}>
        <Item>
          {userName}({userAge} years old)
        </Item>
      </Stack>
    </div>
  );
};
export default UserOutput;
