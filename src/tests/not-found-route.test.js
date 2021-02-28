import React from 'react';
import { shallow } from 'enzyme';
import NotFoundRoute from '../routes/NotFoundRoute/NotFoundRoute';

describe('Not Found Route', () => {
  it('Renders without crashing', () => {
    shallow(<NotFoundRoute />);
  });
});
