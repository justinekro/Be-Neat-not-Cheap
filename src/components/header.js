import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
  <header>
    <h1> Be neat, not cheap! </h1>
    <NavLink to="/dashboard" activeClassName="is-active">Go to your expense dashboard !</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create New Expense</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
