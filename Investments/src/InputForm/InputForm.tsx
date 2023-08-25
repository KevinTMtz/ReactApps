import { useState } from 'react';

import { InvestmentData } from '../Interfaces/InvestmentData';
import classes from './InputForm.module.css';

const InputForm = ({
  onCalculate,
  deleteInvestment,
}: {
  onCalculate: (investmentData: InvestmentData) => void;
  deleteInvestment: () => void;
}) => {
  const defaultInvestmentValue = {
    'current-savings': '',
    'yearly-contribution': '',
    'expected-return': '',
    duration: '',
  };

  const [investmentData, setInvestmentData] = useState<InvestmentData>(
    defaultInvestmentValue,
  );

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onCalculate(investmentData);
  };

  const resetHandler = () => {
    setInvestmentData(defaultInvestmentValue);
    deleteInvestment();
  };

  const inputChangeHandler = (input: string, value: string) => {
    setInvestmentData(
      (prevInvestment) =>
        ({
          ...prevInvestment,
          [input]: value,
        } as InvestmentData),
    );
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            onChange={(event) =>
              inputChangeHandler('current-savings', event.target.value)
            }
            value={investmentData['current-savings']}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            onChange={(event) =>
              inputChangeHandler('yearly-contribution', event.target.value)
            }
            value={investmentData['yearly-contribution']}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            onChange={(event) =>
              inputChangeHandler('expected-return', event.target.value)
            }
            value={investmentData['expected-return']}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            onChange={(event) =>
              inputChangeHandler('duration', event.target.value)
            }
            value={investmentData['duration']}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type='reset'
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type='submit' className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
