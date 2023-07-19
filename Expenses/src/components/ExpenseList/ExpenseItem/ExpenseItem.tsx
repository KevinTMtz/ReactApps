import Card from '../../UI/Card/Card';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

interface ExpenseData {
  id: string;
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem = ({ expense }: { expense: ExpenseData }) => (
  <Card className='expense-item'>
    <ExpenseDate date={expense.date} />

    <div className='expense-item__description'>
      <h2>{expense.title}</h2>
      <div className='expense-item__price'>${expense.amount}</div>
    </div>
  </Card>
);

export default ExpenseItem;
