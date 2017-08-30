import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PriceInfo from './PriceInfo'
import HomeText from './HomeText'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true,
      price: false
    }
    this.buttonPriceInfo = this.buttonPriceInfo.bind(this)
  }
  buttonPriceInfo(event) {
    event.preventDefault()
    if (event.target.name === 'price') {
      this.setState({price: true, home: false})
    } else if (event.target.name === 'home') {
      this.setState({price: false, home: true})
    }
  }
  render() {
    const NavButton = props => {
      if (this.state.home && !this.state.priceInfo) {
        return(
          <div>
            <a href='#' id='link' name='price' onClick={this.buttonPriceInfo}>Price Info</a>
          </div>
        )
      } else if (this.state.price && !this.state.home) {
        return(
          <div>
            <a href='#' id='link' name='home' onClick={this.buttonPriceInfo}>Home</a>
          </div>
        )
      }
    }
    return (
      <div className="App">
        <div className="App-header">
          <h1>eth_space</h1>
          <h4 id='author-link'>
            by <a href='https://www.github.com/nm357' id='link'>nm357</a>
          </h4>
        </div><br />
        <div className="App-intro">
          <NavButton />
        </div><hr />
        {this.state.home ? <HomeText /> : (this.state.price ? <PriceInfo /> : 'Else')}
      </div>
    );
  }
}

export default App;
