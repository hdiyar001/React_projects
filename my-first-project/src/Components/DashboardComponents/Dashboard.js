import "./Dashboard.css";
import TaskItem from "./TaskItem";
import TaskSearch from "./TaskSearch";
import TopBar from "./topBar";

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <TaskSearch />
      <TaskItem />
    </div>
  );
};

export default Dashboard;
