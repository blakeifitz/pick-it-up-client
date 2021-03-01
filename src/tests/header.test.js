import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Header';

describe('Header', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });
});
