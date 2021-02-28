import React, { Component } from 'react';
import { getLocation } from '../../misc-functions';
import Macrostrat from '../../services/macrostrat-service';

export class ItemPageLocation extends Component {
  static defaultProps = {
    locations: [],
    item: [],
  };
  state = {
    age: '',
    stratAge: '',
    rocktypes: [],
  };
  componentDidMount() {
    Macrostrat.getAge().then((res) => {
      this.setState({
        age: res.age,
        stratAge: res.stratAge,
        rocktypes: res.rocktypes,
      });
    });
  }

  render() {
    let location = getLocation(this.props.item, this.props.locations);
    return (
      <section className="location-info">
        {location === undefined ? (
          <p>loading...</p>
        ) : (
          <div>
            <h3>Location: {location.name}</h3>
            <p>Notes: {location.description}</p>
            <p>
              Stratigraphic Age: {this.state.age}Ma, {this.state.stratAge}
            </p>
            <p>Type of Minerals: {this.state.rocktypes}</p>
          </div>
        )}
      </section>
    );
  }
}

export default ItemPageLocation;
