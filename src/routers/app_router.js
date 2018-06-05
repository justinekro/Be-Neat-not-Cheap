import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/expense_dashboard'
import startAddExpensePage from '../components/add_expense'
import EditExpensePage from '../components/edit_expense'
import HelpPage from '../components/help'
import Header from '../components/header'
import NotFoundPage from '../components/not_found'


const AppRouter = () => (
  // {/* BrowserRouter expects only one children component */}
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={startAddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>


);

export default AppRouter;
