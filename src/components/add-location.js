import React, { Component } from 'react';
import MapBox from './map-components/map-box';

export class AddLocation extends Component {
  state = {
    addNew: false,
    addLocationOnly: false,
  };
  getLocation() {
    this.props.handleLocation('location');
  }
  handleChange() {
    this.setState({ addLocationOnly: !this.state.addLocationOnly });
  }
  render() {
    return (
      <div>
        <h2> Location</h2>
        {this.state.addNew === false ? (
          <div>
            <label htmlFor="category">What is the location?</label>
            <select>
              <option>My Place #1</option>
              <option>My Place #2</option>
              <option>My Place #3</option>
            </select>

            <p>or</p>
            <button onClick={(e) => this.setState({ addNew: true })}>
              Add New Location
            </button>
          </div>
        ) : (
          <div>
            <MapBox handleLocation={this.props.handleLocation} />
            <button onClick={(e) => this.setState({ addNew: false })}>
              Cancel
            </button>
          </div>
        )}
        <label>
          <input
            type="checkbox"
            defaultChecked={this.state.i_agree}
            onChange={(e) => this.handleChange(e)}
          />{' '}
          Save location only
        </label>
        <br />
        {this.state.addLocationOnly === false ? (
          <button onClick={(e) => this.getLocation(e)}>Add Items</button>
        ) : (
          <button onClick={(e) => this.getLocation(e)}>Save Location</button>
        )}
      </div>
    );
  }
}

export default AddLocation;
