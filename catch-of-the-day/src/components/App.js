import React from 'react';
import Header from './Header.js';
import Inventory from './Inventory.js';
import Order from './Order.js';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <p>{key}</p>
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.LoadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
