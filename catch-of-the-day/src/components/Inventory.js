import React from 'react';
import AddFishForm from './AddFishForm.js';
import EditFishForm from './EditFishForm.js';
import PropTypes from 'prop-types';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    removeFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory!!</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            updateFish={this.props.updateFish}
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            removeFish={this.props.removeFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample</button>
      </div>
    );
  }
}

export default Inventory;
