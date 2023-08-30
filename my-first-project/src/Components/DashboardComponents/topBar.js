import "./topBar.css";

const topBar = (props) => {
  return (
    <div>
      <p>Hello : {props.userName}</p>
      <button>Logout</button>
    </div>
  );
};

export default topBar;
