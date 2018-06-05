import uuid from 'uuid'
import database from '../firebase/firebase'
// the component calls the action generator
// the action generator returns object (now: function !)
// the component dispatches objects (now: function !)
// redux stores changes (now: has the ability to dispatch other actions)

// Add expense

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData ;
    const expense = { description, note, amount, createdAt}

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
}

// Remove expense

export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// edit expense

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
