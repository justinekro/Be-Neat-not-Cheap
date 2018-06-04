import React from 'react';
import {Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <h3> {description} </h3>
    <p>
      Amount: {numeral(amount/100).format('$0,0.00')} - Created Date: {moment(createdAt).format('MMMM Do, YYYY')}
    </p>

    <Link to={`/edit/${id}`}> Edit Expense </Link>
  </div>
)

export default ExpenseListItem
