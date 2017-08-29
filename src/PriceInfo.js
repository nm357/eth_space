import React, { Component } from 'react';

class PriceInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      ticker: {
        ask: '',
        bid: '',
        price: '',
        size: '',
        time: '',
        trade_id: null,
        volume: ''
      },
      stats: {
        open: '',
        high: '',
        low: '',
        last: '',
        volume: '',
        volume_30day: ''
      }
    }
    this.getEthPrice = this.getEthPrice.bind(this)
  }

  getEthPrice = () => {
    let errorMessage
    fetch('https://api.gdax.com/products/ETH-USD/ticker')
    .then(response => {
      if (response.ok) {
        console.log(response.status);
        return response.json()
      } else {
        errorMessage = `${response.status} ${response.statusText}`;
      }
    })
    .then(response => {
      this.setState({
        ticker: {
          ask: response.ask,
          bid: response.bid,
          price: response.price,
          size: response.size,
          time: response.time,
          trade_id: response.trade_id
        }
      });

    })
    .catch(err => {
      let error = new Error(errorMessage);
      throw(error);
    });

    fetch('https://api.gdax.com/products/ETH-USD/stats')
    .then(response => {
      if (response.ok) {
        console.log(response.status)
        return response.json()
      } else {
        errorMessage = `${response.status} ${response.statusText}`;
      }
    })
    .then(response => {
      this.setState({
        stats: {
          open: response.open,
          high: response.high,
          low: response.low,
          last: response.last,
          volume: response.volume,
          volume_30day: response.volume_30day
        }
      })
    })
    .catch(err => {
      let error = new Error(errorMessage);
      throw(error);
    });
  }

  componentDidMount() {
    this.getEthPrice()
  }

  render() {

    return(
      <div>
        <h1>
          Price Info via Coinbase/GDAX<br />
          <input id="fetch-button" type="button" value="Re-fetch" onClick={this.getEthPrice} />
        </h1>
        <div>
          <h3>Last Trade</h3>
          <div>ask: ${this.state.ticker.ask}</div>
          <div>bid: ${this.state.ticker.bid}</div>
          <div>price: ${this.state.ticker.price}</div>
          <div>size: {this.state.ticker.size}</div>
          <div>time: {this.state.ticker.time}</div>
          <div>trade id: {this.state.ticker.trade_id}</div>
        </div>

        <div>
          <h3>Last 24 Hours</h3>
          <div>open: {this.state.stats.open}</div>
          <div>high: {this.state.stats.high}</div>
          <div>low: {this.state.stats.low}</div>
          <div>last: {this.state.stats.last}</div>
          <div>volume: {this.state.stats.volume}</div>
          <div>volume 30days: {this.state.stats.volume_30day}</div>
        </div>
      </div>
    )
  }

}

export default PriceInfo;
