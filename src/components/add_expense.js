import React from 'react';
import ExpenseForm from './expense_form';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <h1> Add Expense </h1>
    <ExpenseForm
      onSubmit= {(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/') //switch to different path
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
