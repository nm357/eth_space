import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>eth_space</h2>
        </div>
        <p className="App-intro">
          <Link to='/price' id='link'>ETH price info</Link>
        </p><hr />
        <div className='div-text'>
          <p>Welcome to eth_space! Built as a React app, eth_space is a project
            designed to explore and present ETH-related data in accessible
            and appealing ways.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
