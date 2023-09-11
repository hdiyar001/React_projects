const ExceptionHandlingWindow = (props) => {
  return (
    <div>
      <header>Invalid Input</header>
      <body>
        <p>Please inter valid name and age ({props.message})</p>
        <button>Okey</button>
      </body>
    </div>
  );
};
export default ExceptionHandlingWindow;
