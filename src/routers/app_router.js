import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/expense_dashboard';
import AddExpensePage from '../components/add_expense';
import EditExpensePage from '../components/edit_expense';
import LoginPage from '../components/login_page';
import NotFoundPage from '../components/not_found';
import PrivateRoute from './private_route';
import PublicRoute from './public_route';

export const history = createHistory();

const AppRouter = () => (
  // {/* BrowserRouter expects only one children component */}
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
        <PrivateRoute path="/create" component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>

);

export default AppRouter;
