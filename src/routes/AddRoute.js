import React, { Component } from 'react';
import MapBox from '../components/map-components/map-box';
import AddForm from '../components/add-location-form';

export class AddRoute extends Component {
  state = {
    location: [],
    addNew: false,
  };

  handleLocation = (location) => {
    console.log(location, 'LOCATION');
    this.setState({ location: [location] });
  };

  render() {
    return (
      <div>
        <h2>Add Location</h2>
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
            <MapBox
              handleLocation={(location) => {
                this.handleLocation(location);
              }}
            />
            <button onClick={(e) => this.setState({ addNew: false })}>
              Cancel
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AddRoute;
