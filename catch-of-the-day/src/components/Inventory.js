import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import base, { firebaseApp } from '../base';
import AddFishForm from './AddFishForm.js';
import EditFishForm from './EditFishForm.js';
import Login from './Login.js';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    removeFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    storeId: PropTypes.string
  };

  state = {
    uid: null,
    owner: null
  };
  // AT 23mins in video

  authHandler = async authData => {
    //1. Look up the current store in the FB db
    const store = await base.fetch(this.props.storeId, { context: this });
    //2. Claim it if there is no owner
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    // 3. Set the state of the inventroy component to reflect the current user

    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    // Check if they are logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    // check if owner of the store.
    if (this.state.uid !== this.state.owner) {
      return <div>Sorry you are not the owner!</div>;
    }
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
