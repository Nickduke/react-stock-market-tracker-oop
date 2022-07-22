import React, { Component } from 'react';
import { stock } from '../resources/stock.js';

class StockRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  applyData(data) {
    this.setState({
      data: data[data.length - 2],
    });
  }

  componentDidMount() {
    stock.latestPrice(this.props.ticker, this.applyData.bind(this));
  }

  render() {
    return (
      <li className='list-group-item'>
        <strong>{this.props.ticker}</strong>${this.state.data.price}
        <span>+12.34 (5.3%)</span>
      </li>
    );
  }
}

export default StockRow;
