import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import EthSpace from './EthSpace';

const App = props => {

  return(
    <Router>
      <div>
        <Route exact path='/' component={EthSpace} />
      </div>
    </Router>
  )
}

export default App;
