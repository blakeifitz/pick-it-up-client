import React from 'react';
import { shallow } from 'enzyme';
import BackButton from '../components/back-button';

describe('Back Button Component', () => {
  it('Renders without crashing', () => {
    shallow(<BackButton />);
  });
});
