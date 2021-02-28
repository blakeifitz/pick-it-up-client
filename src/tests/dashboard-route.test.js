import React from 'react';
import { shallow } from 'enzyme';
import DashboardRoute from '../routes/DashboardRoute/DashboardRoute';

describe('Dashboard Route', () => {
  it('Renders without crashing', () => {
    shallow(<DashboardRoute />);
  });
});
