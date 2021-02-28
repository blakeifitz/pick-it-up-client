import React from 'react';
import { shallow } from 'enzyme';
import RegistrationRoute from '../routes/RegistrationRoute/RegistrationRoute';

describe('Registration Route', () => {
  it('Renders without crashing', () => {
    shallow(<RegistrationRoute />);
  });
});
