import React, { Component } from 'react';
import decimalFormat from './decimalFormat';
import './LiveTicker.css'

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
          price: decimalFormat(response.price),
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
          open: decimalFormat(response.open),
          high: decimalFormat(response.high),
          low: decimalFormat(response.low),
          last: decimalFormat(response.last),
          volume: response.volume,
          volume_30day: response.volume_30day
        }
      })
    })
    .catch(err => {
      let error = new Error(errorMessage);
      throw(error);
    });
  };

  componentWillMount() {
    this.getEthPrice()
  }
  render() {

    return(
      <div><br />
        <div>
          <input className="link" type="button" value="Re-fetch" onClick={this.getEthPrice} />
        </div>
        <div className='socketBox fetchBox'>
          <h3>Last Trade</h3>
          <div className='gdax-data'><span className="label">ask</span> ${this.state.ticker.ask}</div>
          <div className='gdax-data'><span className="label">bid</span> ${this.state.ticker.bid}</div>
          <div className='gdax-data'><span className="label">price</span> ${this.state.ticker.price}</div>
          <div className='gdax-data'><span className="label">size</span> {this.state.ticker.size}</div>
          <div className='gdax-data'><span className="label">time</span> {this.state.ticker.time}</div>
          <div className='gdax-data'><span className="label">trade id</span> {this.state.ticker.trade_id}</div>
        </div>

        <div className='socketBox fetchBox'>
          <h3>Last 24 Hours</h3>
          <div className='gdax-data'><span className="label">open</span> ${this.state.stats.open}</div>
          <div className='gdax-data'><span className="label">high</span> ${this.state.stats.high}</div>
          <div className='gdax-data'><span className="label">low</span> ${this.state.stats.low}</div>
          <div className='gdax-data'><span className="label">last</span> ${this.state.stats.last}</div>
          <div className='gdax-data'><span className="label">volume</span> {this.state.stats.volume}</div>
          <div className='gdax-data'><span className="label">30 day volume</span> {this.state.stats.volume_30day}</div>
        </div>
      </div>
    )
  }

}

export default PriceInfo;
