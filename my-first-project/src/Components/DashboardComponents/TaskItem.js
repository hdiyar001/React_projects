import "./TaskItem.css";
import TaskSearch from "./TaskSearch";
import TaskItemComponent from "./TaskItemComponent";
const TaskItem = (props) => {
  const onSaveDataHandler = (value) => {
    console.log("TaskItem " + value.priority);
    console.log("TaskItem " + value.taskName);
    if (value.taskAdded) {
    }
  };
  return (
    <div className="task-container">
      <TaskSearch className="search-bar" />
      <div className="task-header">
        <select className="sort-select">
          <option>Sort by Name</option>
          <option>Sort by Priority</option>
        </select>
        <TaskItemComponent onTaskData={onSaveDataHandler} />
      </div>
    </div>
  );
};

export default TaskItem;
