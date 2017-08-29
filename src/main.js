import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import EthSpace from './containers/EthSpace';

$(function() {
  ReactDOM.render(
    <EthSpace />,
    document.getElementById('app')
  );
});
