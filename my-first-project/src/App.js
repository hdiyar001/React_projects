import Dashboard from "./Components/DashboardComponents/Dashboard";
import Login from "./Components/LoginComponents/Login";

let username = "";
function App() {
  const saveDataHandler = (value) => {
    console.log("app");
    username = value;
    console.log(username);
    console.log(value);
  };
  return (
    <div>
      <Login OnDataHandler={saveDataHandler} />
      {/* <Dashboard userName={username} /> */}
    </div>
  );
}

export default App;
