import React from 'react';
import { shallow } from 'enzyme';
import DisplayPosition from '../components/map-components/display-position';
import LocationMarker from '../components/map-components/location-marker';
import MapBox from '../components/map-components/map-box';

describe('Map Components', () => {
  it('Renders without crashing', () => {
    shallow(<MapBox />);
  });
});
