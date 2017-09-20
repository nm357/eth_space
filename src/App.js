import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import EthSpace from './EthSpace';
import PriceInfo from './PriceInfo';
import LiveTicker from './LiveTicker';

const App = props => {

  return(
    <Router>
      <div>
        <Route exact path='/' component={EthSpace} />
        <Route path='/price' component={PriceInfo} />
        <Route path='/ticker' component={LiveTicker} />
      </div>
    </Router>
  )
}

export default App;
