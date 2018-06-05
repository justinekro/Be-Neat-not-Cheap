import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">

    <div className="box-layout__box">
      <h1 className="box-layout__title">Be neat, not cheap</h1>
      <button onClick={startLogin} className="button" >Login to this amazing app </button>
      <p> And never be broke again ❤️ </p>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
