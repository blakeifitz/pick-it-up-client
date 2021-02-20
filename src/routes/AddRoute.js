import React, { Component } from 'react';
import MapBox from '../components/map-components/map-box';
import AddForm from '../components/add-items-form';

export class AddRoute extends Component {
  render() {
    return (
      <div>
        <div>
          <AddForm />
        </div>
      </div>
    );
  }
}

export default AddRoute;
