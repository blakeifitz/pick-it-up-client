import React from 'react';
import { shallow } from 'enzyme';
import LoginRoute from '../routes/LoginRoute/LoginRoute';

describe('Login Route', () => {
  it('Renders without crashing', () => {
    shallow(<LoginRoute />);
  });
});
