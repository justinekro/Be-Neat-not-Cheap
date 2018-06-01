import React from 'react';
import ExpenseList from './expense_list'
import ExpenseListFilters from './expense_list_filters'

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage
