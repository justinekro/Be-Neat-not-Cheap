import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision_app';
import 'normalize.css/normalize.css'; // cross browser setting
import './styles/styles.scss'

ReactDOM.render((
  <IndecisionApp />
), document.getElementById('app'))
