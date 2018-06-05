import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/app_router';
import configureStore from './store/configure_store';
import 'normalize.css/normalize.css'; // cross browser setting
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';
import './playground/promises'

const store = configureStore();

// store.dispatch(addExpense({description:'water bill',amount: 3000, createdAt: 1000}))
// store.dispatch(addExpense({description:'gas bill',amount:2000, createdAt: 200}))
// store.dispatch(addExpense({description:'rent',amount:1000, createdAt: 3000}))
//
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render((
  jsx
), document.getElementById('app'))
