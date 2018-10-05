import React, { Fragment } from "react";
import { getFunName } from "../helpers.js";
import { format } from "util";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = e => {
    // stop the form from submitting
    e.preventDefault();
    // get the text from the input
    let storeName = this.myInput.current.value;
    console.log(storeName);
    // change the page to /store/whatever-they-entered
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
