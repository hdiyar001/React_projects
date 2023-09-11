const ExceptionHandlingWindow = (props) => {

  const okButtonHandler = () => {
    props.errorexp();
  }

  return (
    <div>
      <header>Invalid Input</header>
      <body>
        <p>Please inter valid name and age ({props.message})</p>
        <button onClick={okButtonHandler} >Okey</button>
      </body>
    </div>
  );
};
export default ExceptionHandlingWindow;
