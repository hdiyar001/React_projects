import InvestmentTableItem from "./InvestmentTableBodyItems";

export default function InvestmentTable(props) {
  console.log(props.data);
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
      <InvestmentTableItem />
    </table>
  );
}
