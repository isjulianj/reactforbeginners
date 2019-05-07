import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);

    //update that fish
    //1. take a copy of the current fish
    const upadtedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // console.log(this.props.index, upadtedFish);
    this.props.updateFish(this.props.index, upadtedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
        />
        <select
          type="text"
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available"> Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.removeFish(this.props.index);
          }}
        >
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
