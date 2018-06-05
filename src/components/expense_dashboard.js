import React from 'react';
import ExpenseList from './expense_list';
import { Link } from 'react-router-dom';
import ExpenseListFilters from './expense_list_filters';
import ExpensesSummary from './expenses_summary';


const ExpenseDashboardPage = () => (
  <div>
    <div className="subheader">
      <div className="content-container">
        <div className="subheader__content">

          <ExpensesSummary/>
          <Link to="/create" className="button button__subheader">New Expense</Link>
        </div>
      </div>
    </div>
    <ExpenseListFilters />
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage
