import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers.js';
import { format } from 'util';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  myInput = React.createRef();
  goToStore = e => {
    e.preventDefault();

    let storeName = this.myInput.current.value;

    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="store Name"
          defaultValue={getFunName()}
        />
        <button type="submit"> Visit Store > </button>
      </form>
    );
  }
}

export default StorePicker;
