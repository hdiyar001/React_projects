import "./Dashboard.css";
import TaskItem from "./TaskItem";
import TopBar from "./topBar";

const Dashboard = (props) => {
  return (
    <div>
      <TopBar userName={props.userName} className="top-bar" />
      <TaskItem />
    </div>
  );
};

export default Dashboard;
