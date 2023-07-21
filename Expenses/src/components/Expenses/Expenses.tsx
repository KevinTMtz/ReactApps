import { useState } from 'react';

import { ExpenseData } from '../../interfaces/ExpenseData';
import Card from '../UI/Card/Card';
import NewExpense from './NewExpense/NewExpense';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList/ExpensesList';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState<ExpenseData[]>([
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 11, 12),
    },
    { id: 'e3', title: '65" TV', amount: 799.49, date: new Date(2021, 5, 12) },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ]);

  const filterNoneStr: string = 'All';
  const [yearFilter, setYearFilter] = useState<string>(filterNoneStr);

  const getExpensesfilterByYear: () => ExpenseData[] = () =>
    expenses.filter(
      (expense) =>
        yearFilter === filterNoneStr ||
        expense.date.getFullYear().toString() === yearFilter,
    );

  const addExpense = (newExpense: ExpenseData) => {
    setExpenses((currentExpenses) =>
      [...currentExpenses, newExpense].sort((expense1, expense2) =>
        expense1.date.getFullYear() > expense2.date.getFullYear() ? -1 : 1,
      ),
    );

    setYearFilter(filterNoneStr);
  };

  const getYears: () => string[] = () => {
    const allYears = expenses.map((expense) =>
      expense.date.getFullYear().toString(),
    );
    allYears.push(filterNoneStr);

    return allYears
      .filter((year, index) => allYears.indexOf(year) === index)
      .sort((one, two) => (one > two ? -1 : 1));
  };

  return (
    <>
      <NewExpense onAddExpense={addExpense} />

      {expenses.length > 0 ? (
        <Card className='expenses'>
          <ExpensesFilter
            getYears={getYears}
            yearFilter={yearFilter}
            setYearFilter={setYearFilter}
          />

          <ExpensesList expenses={getExpensesfilterByYear()} />
        </Card>
      ) : (
        <h3 style={{ textAlign: 'center' }}>Expenses list is empty</h3>
      )}
    </>
  );
};

export default ExpenseList;
