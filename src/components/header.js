import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1> Be neat, not cheap! </h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Go to your expense dashboard !</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create New Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Get helped!</NavLink>
  </header>
);

export default Header
