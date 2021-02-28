import React from 'react';
import { shallow } from 'enzyme';
import ImageCarousel from '../components/carousel/carousel';

describe('Image carousel / slider', () => {
  it('Renders without crashing', () => {
    shallow(<ImageCarousel />);
  });
});
