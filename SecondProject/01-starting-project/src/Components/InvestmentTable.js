import React, { useState } from "react";
import InvestmentTableItem from "./InvestmentTableBodyItems";

export default function InvestmentTable(props) {
  // const [calcYearlyData, SetCalcYearlyData] = useState([]);

  const yearlyData = []; // per-year results
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedInterest / 100;
    const duration = +userInput.investmentDuration;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yeartotalInterest: duration * yearlyContribution,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };
  // SetCalcYearlyData(yearlyData);
  calculateHandler(props.data);

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      {yearlyData.map((obj, io) => {
        return <InvestmentTableItem key={io} redirctedobjs={obj} />;
      })}
    </table>
  );
}
