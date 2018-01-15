import React, { Component } from 'react';
import Gdax from 'gdax';

const publicClient = new Gdax.PublicClient();
const subscribeRequest = JSON.stringify({
  "type": "subscribe",
  "product_ids": ["ETH-USD"],
  "channels": [
    "ticker",
    "heartbeat"
  ]
});

const heartbeatRequest = JSON.stringify({
    "type": "subscribe",
    "header":"Access-Control-Allow-Origin",
    "product_ids": ["ETH-USD"],
    "channels": [
      { "name": ["ticker"], product_ids: ["ETH-USD"]},
      { "name": ["heartbeat"], product_ids: ["ETH-USD"]}
    ]
})

class LiveTicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      ticker: null,
      heartbeat: null,
      message: null,
      error: null
    }
    this.openSocket = this.openSocket.bind(this)

  }

  openSocket = () => {
    // let gdaxSocket = new WebSocket("wss://ws-feed.gdax.com");
    let gdaxSocket = new WebSocket("wss://ws-feed.gdax.com")
    gdaxSocket.onopen = () => {
      gdaxSocket.send(heartbeatRequest)
    };
    gdaxSocket.onmessage = (event) => {
      let data = JSON.parse(event.data)
      if (data.type === "ticker") {
        this.setState({ticker: event.data})
      } else if (data.type === "heartbeat"){
        this.setState({heartbeat: event.data})
      }
    };
    gdaxSocket.onerror = (error) => {
      console.log('WebSocket Error ' + error);
    };
    gdaxSocket.onclose = () => {
      gdaxSocket.close()
    };
  }

  render() {
    return(
      <div>
        <div id="heartbeat">Heartbeat: {this.state.heartbeat}</div>
        <div id="ticker">ETH-USD Ticker: {this.state.ticker}</div>
        <div>{this.state.liveTicker}</div>
        <h2>{this.state.message}</h2>
        <input id='fetch-button' type='button' value='Do WebSocket Thing' onClick={this.openSocket} />
        <input id='fetch-button' type='button' value='Stop WebSocket Thing'/>
      </div>
    )
  }

}
export default LiveTicker;
