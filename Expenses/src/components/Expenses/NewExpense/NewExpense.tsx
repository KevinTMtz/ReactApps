import { ExpenseData } from '../../../interfaces/ExpenseData';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import Card from '../../UI/Card/Card';
import './NewExpense.css';

const NewExpense = ({
  onAddExpense,
}: {
  onAddExpense: (expense: ExpenseData) => void;
}) => {
  const saveExpenseDataHandler = (newExpenseData: ExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
