import React from 'react';
import { connect } from 'react-redux'; // connects to the store
import ExpenseListItem from './expense_list_item';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1> Expense List </h1>

    {props.expenses.map((expense) => (
      <ExpenseListItem key={expense.id} {...expense}/> // with {... we pass as props all the expense object} > we spread it
    ))}
  </div>

);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters) // access to info from the store !
  }; // as the store changes, it re renders and the data changes
}

export default connect(mapStateToProps)(ExpenseList);
