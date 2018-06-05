import React from 'react';
import ExpenseForm from './expense_form';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
  return (
    <div>
      <h1> Edit expense {props.match.params.id} </h1>
      <ExpenseForm
        editExpense
        expense = {props.expense}
        onSubmit = {(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense))
          props.history.push('/') //switch to different path
          console.log(expense)
        }}
      />

      <button onClick={() => {
        props.dispatch(startRemoveExpense({id: props.match.params.id}))
        props.history.push('/') //switch to different path
      }}> Remove </button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage);
