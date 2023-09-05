import { useState } from "react";

const CalculatorForm = (props) => {
  // const [formData,setFormData]=useState([]);
  const objData = {
    currentSavings: "",
    yearlySavings: "",
    expectedInterest: "",
    investmentDuration: "",
  };
  const onInputsHandler = (id, evt) => {
    switch (id) {
      case "currentSavings":
        objData.currentSavings = evt.target.value;
      case "yearlySavings":
        objData.yearlySavings = evt.target.value;
      case "expectedInterest":
        objData.expectedInterest = evt.target.value;
      default:
        objData.investmentDuration = evt.target.value;
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.onRedirectData(objData);
  };
  return (
    <form onSubmit={onSubmitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(evt) => onInputsHandler("currentSavings", evt)}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>

          <input
            onChange={(evt) => onInputsHandler("yearlySavings", evt)}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(evt) => onInputsHandler("expectedInterest", evt)}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(evt) => onInputsHandler("investmentDuration", evt)}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default CalculatorForm;
