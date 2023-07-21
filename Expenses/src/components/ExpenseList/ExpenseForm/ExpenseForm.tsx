import { useState } from 'react';

import { ExpenseData } from '../../../interfaces/ExpenseData';
import './ExpenseForm.css';

const ExpenseForm = ({
  onSaveExpenseData,
}: {
  onSaveExpenseData: (newExpenseData: ExpenseData) => void;
}) => {
  const defaultValue: ExpenseData = {
    title: '',
    amount: 0.01,
    date: new Date(),
  };

  const [newExpense, setNewExpense] = useState<ExpenseData>(defaultValue);

  const updateNewExpense = (property: any) => {
    setNewExpense((expense: ExpenseData) => ({
      ...expense,
      ...property,
    }));
  };

  const submit = () => {
    onSaveExpenseData(newExpense);

    setNewExpense(defaultValue);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        submit();
      }}
    >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            required
            onChange={(event) =>
              updateNewExpense({ title: event.target.value })
            }
            value={newExpense.title}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            required
            min='0.01'
            step='0.1'
            onChange={(event) =>
              updateNewExpense({ amount: +event.target.value })
            }
            value={newExpense.amount}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            required
            onChange={(event) =>
              updateNewExpense({ date: new Date(event.target.value) })
            }
            value={newExpense.date
              .toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })
              .split('/')
              .reverse()
              .join('-')}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
