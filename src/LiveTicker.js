import React, { Component } from 'react';

class LiveTicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      liveTicker: null
    }
    this.getTickerPrice = this.getTickerPrice.bind(this);
  }
  getTickerPrice = () => {
    this.setState({liveTicker: this.props.ticker})
  };

  render() {
    return(
      <div>
        <h1>{this.state.liveTicker ? this.state.liveTicker : 'loading'}</h1>
      </div>
    )
  }

}

export default LiveTicker;
