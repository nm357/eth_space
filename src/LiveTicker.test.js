import React from 'react';
import ReactDOM from 'react-dom';
import LiveTicker from './LiveTicker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LiveTicker />, div);
});
