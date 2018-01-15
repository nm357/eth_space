import React, { Component } from 'react';
import Gdax from 'gdax';
import './LiveTicker.css'

const publicClient = new Gdax.PublicClient();
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
      ticker: {
        price: '',
        best_ask: '',
        best_bid: '',
        high_24h: '',
        low_24h: '',
        volume_24h: '',
        volume_30d: ''
      },
      heartbeat: {
        last_trade_id: '',
        time: ''
      },
      message: '',
      error: null
    }
    this.openSocket = this.openSocket.bind(this)

  }

  openSocket = () => {
    let gdaxSocket = new WebSocket("wss://ws-feed.gdax.com")
    gdaxSocket.onopen = () => {
      gdaxSocket.send(heartbeatRequest)
    };
    gdaxSocket.onmessage = (event) => {
      let data = JSON.parse(event.data)
      if (data.type === "ticker") {
        this.setState({ticker: data})
      } else if (data.type === "heartbeat"){
        this.setState({heartbeat: data})
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
        <div id="heartbeat" className="socketBox">
          <h3>ETH-USD Heartbeat</h3>
          <span className="label">last trade id</span> <span>{this.state.heartbeat.last_trade_id}</span><br />
          <span className="label">time</span> <span>{this.state.heartbeat.time}</span>
        </div>
        <div id="ticker" className="socketBox">
          <h3>ETH-USD Ticker</h3>
          <span className="label">price</span> <span>{this.state.ticker.price}</span><br />
          <span className="label">ask</span> <span>{this.state.ticker.best_ask}</span><br />
          <span className="label">bid</span> <span>{this.state.ticker.best_bid}</span><br />
          <span className="label">24h high</span> <span>{this.state.ticker.high_24h}</span><br />
          <span className="label">24h low</span> <span>{this.state.ticker.low_24h}</span><br />
          <span className="label">24h volume</span> <span>{this.state.ticker.volume_24h}</span><br />
          <span className="label">30d volume</span> <span>{this.state.ticker.volume_30d}</span><br />
        </div>
        <div>{this.state.liveTicker}</div>
        <h2>{this.state.message}</h2>
        <input className='fetch-button' type='button' value='Open GDAX Websocket' onClick={this.openSocket} />
      </div>
    )
  }

}
export default LiveTicker;
