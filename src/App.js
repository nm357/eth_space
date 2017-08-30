import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import EthSpace from './EthSpace'
import PriceInfo from './PriceInfo'

const App = props => {

  return(
    <Router>
      <div>
        <Route exact path='/' component={EthSpace} />
        <Route path='/price' component={PriceInfo} />
      </div>
    </Router>
  )
}

export default App;
