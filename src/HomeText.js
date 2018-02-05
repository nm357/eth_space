import React, { Component } from 'react';

class HomeText extends Component {
  constructor(props){
    super(props);
    this.state = {
      headerText: [
        `Welcome to eth_space! Built as a React app, eth_space is a project
          designed to explore and present ETH-related data in accessible
          and appealing ways.`,
        <div><a href='https://www.reddit.com/r/ethtrader'>r/ethtrader</a> next =></div>,
        <div><a href='https://www.reddit.com/r/ethereum'>r/ethereum</a> next =></div>,
        <div><a href='https://www.ethnews.com'>ethnews</a> next =></div>
      ],
      headerIndex: 0
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(event) {
    event.preventDefault();
    console.log('click ', this.state.headerIndex, this.state.headerText[this.state.headerIndex])
    this.state.headerIndex === 3
      ? this.setState({headerIndex: 0})
      : this.setState({headerIndex: this.state.headerIndex + 1})
  }

  render() {
    return(
      <div className='home-text link' onClick={this.clickHandler}>
        {this.state.headerText[this.state.headerIndex]}
      </div>
    )
  }
}

export default HomeText;
