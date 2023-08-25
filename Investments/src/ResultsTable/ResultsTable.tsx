import { InvestmentCalculation } from '../Interfaces/InvestmentCalculation';
import classes from './ResultsTable.module.css';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = ({
  investmentYearly,
  initialInvestment,
}: {
  investmentYearly: InvestmentCalculation[];
  initialInvestment: number;
}) => (
  <table className={classes.result}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
        <th>Total Savings</th>
      </tr>
    </thead>
    <tbody>
      {investmentYearly.map(
        (yearData: InvestmentCalculation, index: number) => (
          <tr key={`investment-${yearData.year}-${index}`}>
            <td>{yearData.realYear}</td>

            <td>{currencyFormatter.format(yearData.yearlyInterest)}</td>
            <td>
              {currencyFormatter.format(
                yearData.savingsEndOfYear -
                  initialInvestment -
                  yearData.yearlyContribution * yearData.year,
              )}
            </td>
            <td>
              {currencyFormatter.format(
                initialInvestment + yearData.yearlyContribution * yearData.year,
              )}
            </td>
            <td>{currencyFormatter.format(yearData.savingsEndOfYear)}</td>
          </tr>
        ),
      )}
    </tbody>
  </table>
);

export default ResultsTable;
