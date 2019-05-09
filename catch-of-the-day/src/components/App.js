import React from 'react';
import Header from './Header.js';
import Inventory from './Inventory.js';
import Order from './Order.js';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import PropTypes from 'prop-types';
import base from '../base';
class App extends React.Component {
  static propTypes = {
    match: PropTypes.object
  };
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const params = this.props.match.params;

    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // 1. Take a copy of the exisiting state (do not mutate)
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable.
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fished object to state
    this.setState({ fishes: fishes });
  };

  LoadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = key => {
    // 1 take a copy of state
    const order = { ...this.state.order };
    // 2 add to the order or update the number of our order
    order[key] = order[key] + 1 || 1;
    // 3. call setState to upddate our state object
    this.setState({ order });
  };

  updateFish = (key, updatedFish) => {
    // take a copy of state
    const fishes = { ...this.state.fishes };

    // update changed fish
    fishes[key] = updatedFish;

    // set new state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // Copy State
    const fishes = { ...this.state.fishes };

    // update the state
    fishes[key] = null;

    // set the state
    this.setState({ fishes });
  };
  deleteOderItem = key => {
    // Copy State
    const order = { ...this.state.order };

    // update the state

    order[key] = null;

    // set the state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                detail={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeOrderItem={this.deleteOderItem}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.LoadSampleFishes}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          removeFish={this.deleteFish}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
