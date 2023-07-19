import './ExpenseDate.css';

const ExpenseDate = ({ date }: { date: Date }) => {
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>
        {date.toLocaleString('en-GB', {
          month: 'long',
        })}
      </div>
      <div className='expense-date__day'>
        {date.toLocaleString('en-GB', {
          weekday: 'short',
          day: 'numeric',
        })}
      </div>
      <div className='expense-date__year'>{date.getFullYear()}</div>
    </div>
  );
};

export default ExpenseDate;
