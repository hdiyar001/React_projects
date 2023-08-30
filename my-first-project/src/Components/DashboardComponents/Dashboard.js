import "./Dashboard.css";
import TaskItem from "./TaskItem";
import TopBar from "./topBar";

const Dashboard = () => {
  return (
    <div>
      <TopBar className="top-bar" />
      <TaskItem />
    </div>
  );
};

export default Dashboard;
