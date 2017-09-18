import React, { Component } from 'react';

class LiveTicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      ticker: null
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.ticker ? this.state.ticker : 'loading'}</h1>
      </div>
    )
  }

}

export default LiveTicker;
