import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>
      Info
    </h1>
    <p> the info is : {props.info} </p>
  </div>
)

const requireAuthentification = (WrappedComponent) => {
  return (props) => (
    <div>
      {!props.isAuthenticated
        ?
        <p>Please log in to see this info</p>
        :

      <WrappedComponent {...props}/>
    }
    </div>
  )
}

const AuthInfo = requireAuthentification(Info)

ReactDOM.render((
  <AuthInfo info="this is the details" isAuthenticated={true}/>
), document.getElementById('app'))
