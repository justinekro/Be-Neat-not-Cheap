import React from 'react';
import ExpenseForm from './expense_form';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses'

const startAddExpensePage = (props) => (
  <div>
    <h1> Add Expense </h1>
    <ExpenseForm
      onSubmit= {(expense) => {
        props.dispatch(startAddExpense(expense))
        props.history.push('/') //switch to different path
      }}
    />
  </div>
);

export default connect()(startAddExpensePage);
