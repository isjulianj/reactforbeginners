import React from 'react';
import { formatPrice } from '../helpers.js';
class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.detail;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p className="desc">{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => {
            this.props.addToOrder(this.props.index);
          }}
        >
          {isAvailable ? 'Add to Order' : 'Sold Out'}
        </button>
      </li>
    );
  }
}

export default Fish;
