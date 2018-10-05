import React, { Fragment } from 'react';
import { getFunName } from '../helpers.js';
import { format } from 'util';

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        {/* This is a store picker */}
        <h2>Please enter a store</h2>
        <input
          type="text"
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
