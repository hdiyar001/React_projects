import React from "react";
import "./TaskItem.css";
import TaskSearch from "./TaskSearch";

const TaskItem = () => {
  return (
    <div className="task-container">
      <TaskSearch className="search-bar" />
      <div className="task-header">
        <select className="sort-select">
          <option>Sort by Name</option>
          <option>Sort by Priority</option>
        </select>
      </div>

      <div className="task-content">
        <div className="task-item">
          <p className="task-prio">Priority</p>
          <p className="task-name">TaskName</p>
          <button className="edit-btn">Edit</button>
        </div>
        <div className="task-delete">
          <button className="edit-delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
