import React, { Component } from 'react';
import { publicClient } from './Gdax';

class GdaxOrders extends Component {
  constructor(props){
    super(props);
    this.state = {
      asks: null,
      bids: null
    }
    this.getOrders = this.getOrders.bind(this)
  }
  getOrders() {
    publicClient.getProductOrderBook({'level': 3}, (error, response, data) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({ asks: data.asks, bids: data.bids })
      }
    })
  }

  render() {
    return(
      <div></div>
    )
  }
}

export default GdaxOrders;
