import React, { useState } from 'react';
import "./TaskItem.css";
import TaskSearch from "./TaskSearch";
import TaskItemComponent from "./TaskItemComponent";
import Task from "./Task";

const TaskItem = (props) => {

  const [tasks, setTasks] = useState([]);

  const onSaveDataHandler = (value) => {
    console.log("TaskItem " + value.priority);
    console.log("TaskItem " + value.taskName);
    
    if (value.taskAdded) {
      setTasks(prevTasks => [
        ...prevTasks,
        {
          priority: value.priority,
          taskName: value.taskName
        }
      ]);
    }
  };

  const onDeleteTaskHandler = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter((task, index) => index !== taskId)
    );
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
        <div>
          {tasks.map((data, id) => (
            <Task
              key={id}
              Id={id}
              priority={data.priority}
              taskName={data.taskName}
              deleteTaskbyId={onDeleteTaskHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
