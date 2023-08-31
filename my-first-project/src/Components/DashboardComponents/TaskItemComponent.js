import "./TaskItemComponent.css";
const TaskItemComponent = (props) => {
  const taskData = {
    taskName: "",
    priority: "",
    taskAdded: false,
  };
  const submitData = (event) => {
    event.preventDefault();
    taskData.taskAdded = true;
    props.onTaskData(taskData);
    taskData.taskAdded = false;
  };
  return (
    <form onSubmit={submitData}>
      <div className="task-content">
        <div className="task-item">
          <p className="task-prio">
            Priority:
            {/* <input id="Task-prio__input"></input> */}
            <select
              id="Task-prio__input"
              onChange={(event) => {
                taskData.priority = event.target.value;
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </p>
          <p className="task-name">
            Task name:
            <input
              id="Task-name__input"
              onChange={(event) => {
                taskData.taskName = event.target.value;
              }}
            ></input>
          </p>
          <button type="submit" className="edit-btn">
            Add
          </button>
        </div>
        <div className="task-delete">
          <button className="edit-delete">Delete</button>
        </div>
      </div>
    </form>
  );
};
export default TaskItemComponent;
