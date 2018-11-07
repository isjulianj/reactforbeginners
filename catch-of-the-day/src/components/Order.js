import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  render() {
    const orderedIds = Object.keys(this.props.order);
    const total = orderedIds.reduce((prevTotal, key) => {}, 0);
    return (
      <div className="order">
        {orderedIds} {formatPrice(total)}
      </div>
    );
  }
}

export default Order;
