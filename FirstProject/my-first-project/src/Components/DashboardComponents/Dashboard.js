import "./Dashboard.css";
import TaskItem from "./TaskItem";
import TopBar from "./topBar";

const Dashboard = (props) => {
  const logoutHandler = (value) => {
    console.log("dashboard");
    props.onLogoutApp(value);
  };

  return (
    <div>
      <TopBar
        onLogout={logoutHandler}
        userName={props.userName}
        className="top-bar"
      />
      <TaskItem />
    </div>
  );
};

export default Dashboard;
