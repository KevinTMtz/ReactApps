import Card from '../UI/Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: '65" TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <Card className='expenses'>
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </Card>
  );
};

export default ExpenseList;
