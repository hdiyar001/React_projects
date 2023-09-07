import { useState } from "react";
import CalculatorForm from "./Components/CalculatorForm";
import Header from "./Components/Header";
import InvestmentTable from "./Components/InvestmentTable";

function App() {
  const [redirectData, setRedirectData] = useState([]);

  const redirectHandler = (data) => {
    setRedirectData(data);
  };
  return (
    <div>
      <Header />
      <CalculatorForm onRedirectData={redirectHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentTable data={redirectData} />
    </div>
  );
}

export default App;
