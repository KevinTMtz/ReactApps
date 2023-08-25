import { useState } from 'react';

import Header from './Header/Header';
import InputForm from './InputForm/InputForm';
import ResultsTable from './ResultsTable/ResultsTable';
import { InvestmentCalculation } from './Interfaces/InvestmentCalculation';
import { InvestmentData } from './Interfaces/InvestmentData';
import classes from './App.module.css';

const App = () => {
  const [investmentData, setInvestmentData] = useState<
    InvestmentData | undefined
  >();

  const onCalculate = (newInvestmentData: InvestmentData) => {
    setInvestmentData(newInvestmentData);
  };

  const investmentYearly: InvestmentCalculation[] = [];
  if (investmentData) {
    let currentSavings = +investmentData['current-savings'];
    const yearlyContribution = +investmentData['yearly-contribution'];
    const expectedReturn = +investmentData['expected-return'] / 100;
    const duration = +investmentData['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      investmentYearly.push({
        realYear: i + 1 + new Date().getFullYear(),
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  const deleteInvestment = () => {
    setInvestmentData(undefined);
  };

  return (
    <div>
      <Header />

      <InputForm
        onCalculate={onCalculate}
        deleteInvestment={deleteInvestment}
      />

      {!investmentData && (
        <p className={classes.noYearlyData}>Input investment data.</p>
      )}

      {investmentData && (
        <ResultsTable
          investmentYearly={investmentYearly}
          initialInvestment={+investmentData['current-savings']}
        />
      )}
    </div>
  );
};

export default App;
