import "./Task.css";

const Task = (props) => {

    const deleteTaskHandler = () => {
        props.deleteTaskbyId(props.Id); // Use props.Id instead of props.id
    }

  return (
    <div className="task-content">
      <div className="task-item">
        <p className="task-prio">
          Priority: {props.priority}
        </p>
        <p className="task-name">
          {props.taskName}
        </p>
        <p>ID: {props.Id}</p>
      </div>
      <div className="task-delete">
        <button className="edit-delete" onClick={deleteTaskHandler}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
