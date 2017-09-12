import React, { Component } from 'react';

class LiveTicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      price: null
    }
  }

  render() {
    return(
      <div>
        <h1>Live Ticker</h1>
      </div>
    )
  }

}

export default LiveTicker;
