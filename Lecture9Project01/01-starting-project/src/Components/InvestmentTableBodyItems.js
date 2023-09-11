export default function InvestmentTableItem(props) {
  // Assuming these properties are numbers
  const year = props.redirctedobjs.year.toFixed(2);
  const yeartotalInterest = props.redirctedobjs.yeartotalInterest.toFixed(2);
  const savingsEndOfYear = props.redirctedobjs.savingsEndOfYear.toFixed(2);
  const yearlyInterest = props.redirctedobjs.yearlyInterest.toFixed(2);
  const yearlyContribution = props.redirctedobjs.yearlyContribution.toFixed(2);

  return (
    <tbody>
      <tr>
        <td>{year}</td>
        <td>{yeartotalInterest}</td>
        <td>{savingsEndOfYear}</td>
        <td>{yearlyInterest}</td>
        <td>{yearlyContribution}</td>
      </tr>
    </tbody>
  );
}
