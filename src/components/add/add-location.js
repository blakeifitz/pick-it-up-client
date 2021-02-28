import React, { Component } from 'react';
import MapBox from '../map-components/map-box';
import TokenService from '../../services/token-service';
import config from '../../config';

export class AddLocation extends Component {
  static default = {
    history: {
      push: () => {},
    },
    locations: [],
  };
  state = {
    addNew: false,
    addLocationOnly: false,
    locationId: null,
    locations: [],
    location: { lat: 39.4622310885898, lng: -84.08650964498521 },
    error: null,
  };
  handleSubmit(e) {
    e.preventDefault(e);
    let coordinates = `(${this.state.location.lat.toFixed(
      5
    )}, ${this.state.location.lng.toFixed(5)})`;

    const newLocation = {
      name: e.target['location-name-input'].value,
      coordinates: coordinates,
      description: e.target['location-description-input'].value,
    };
    fetch(`${config.API_ENDPOINT}/location`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newLocation),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((location) => {
        this.props.setLocationId(location.id);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  }
  setLocation(location) {
    this.setState({ location });
  }
  handleSave(e) {
    e.preventDefault(e);
    let locationId = e.target['location-select'].value;
    this.props.setLocationId(locationId);
  }
  render() {
    let { locations } = this.props;
    const { error } = this.state;
    return (
      <div className="registration-content">
        <h2> Location</h2>
        {this.state.addNew === false ? (
          <div>
            <label htmlFor="category">What is the location?</label>
            <form
              className="location-form"
              onSubmit={(e) => this.handleSave(e)}
            >
              <div role="alert">{error && <p>{error}</p>}</div>
              <select id="location-select">
                {locations.map((location, i) => {
                  return (
                    <option key={i} value={location.id}>
                      {location.name}
                    </option>
                  );
                })}
              </select>
              <button type="submit">Choose</button>
            </form>
            <p>or</p>
            <button onClick={(e) => this.setState({ addNew: true })}>
              Add New Location
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div role="alert">{error && <p>{error}</p>}</div>
            <label htmlFor="location-name-input">Name: </label>
            <input type="text" id="location-name-input" required />
            <div className="field">
              <label htmlFor="location-description-input">Description: </label>
              <textarea id="location-description-input" />
            </div>
            <MapBox
              setLocation={(location) => {
                this.setLocation(location);
              }}
            />
            <button id="submit-form" type="submit">
              Submit
            </button>
          </form>
        )}
        <br />
      </div>
    );
  }
}
AddLocation.defaultProps = {
  locations: ['loading...'],
};
export default AddLocation;
