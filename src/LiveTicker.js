import React, { Component } from 'react';

class LiveTicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      liveTicker: null,
      message: null,
      error: null
    }
    this.openSocket = this.openSocket.bind(this);
  }
  openSocket = () => {
    let gdaxSocket = new WebSocket("wss://ws-feed-public.sandbox.gdax.com");
    let sendJson = {
      "type": "subscribe",
      "channels": [{ "name": "ticker", "product_ids": ["ETH-USD"] }]
    }
    gdaxSocket.onopen = () => {
      gdaxSocket.send(sendJson)
    }
    gdaxSocket.onmessage = (event) => {
      console.log(event.data);
      this.setState({message: JSON.parse(event.data)})
      debugger
    };
    gdaxSocket.onerror = (error) => {
      console.log('WebSocket Error ' + error);
      this.setState({error: error})
    };
    gdaxSocket.onclose = () => {
      gdaxSocket.close()
    };
  }

  render() {
    return(
      <div>
        <h1>{this.state.liveTicker ? this.state.liveTicker : 'loading'}</h1>
        <input id='fetch-button' type='button' value='Do WebSocket Thing' onClick={this.openSocket} />

      </div>
    )
  }

}

export default LiveTicker;
