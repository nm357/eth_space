import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LiveTicker from './LiveTicker';

it('full renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LiveTicker />, div);
});

it('shallow renders without crashing', () => {
  shallow(<LiveTicker />);
});
