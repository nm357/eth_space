import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
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
