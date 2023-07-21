import { ExpenseData } from '../../../interfaces/ExpenseData';
import ExpenseItem from './ExpenseItem/ExpenseItem';

const ExpensesList = ({ expenses }: { expenses: ExpenseData[] }) => {
  return (
    <>
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </>
  );
};

export default ExpensesList;
