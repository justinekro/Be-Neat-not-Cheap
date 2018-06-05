import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux'; // connects to the store
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses_total';


const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  return (
    <h2>
      {expenseCount} {expenseWord} - {numeral(expensesTotal/100).format('$0,0.00')}
    </h2>
  );
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
