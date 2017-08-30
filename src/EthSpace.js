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
        </p>
      </div>
    );
  }
}

export default App;
