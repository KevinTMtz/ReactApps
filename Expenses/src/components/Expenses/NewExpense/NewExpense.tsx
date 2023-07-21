import { ExpenseData } from '../../../interfaces/ExpenseData';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import Card from '../../UI/Card/Card';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = ({
  onAddExpense,
}: {
  onAddExpense: (expense: ExpenseData) => void;
}) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (newExpenseData: ExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    showFormHandler();
  };

  const showFormHandler = () => setShowForm((currentValue) => !currentValue);

  return (
    <Card className='new-expense'>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showFormHandler={showFormHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add new expense</button>
      )}
    </Card>
  );
};

export default NewExpense;
