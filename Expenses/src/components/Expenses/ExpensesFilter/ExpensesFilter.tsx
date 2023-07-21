import { Dispatch, SetStateAction } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({
  getYears,
  yearFilter,
  setYearFilter,
}: {
  getYears: () => string[];
  yearFilter: string;
  setYearFilter: Dispatch<SetStateAction<string>>;
}) => (
  <div className='expenses-filter'>
    <div className='expenses-filter__control'>
      <label>Show by year</label>
      <select
        onChange={(event) => setYearFilter(event.target.value)}
        value={yearFilter}
      >
        {getYears().map((year) => (
          <option value={year} key={`year-filter-${year}`}>
            {year}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default ExpensesFilter;
