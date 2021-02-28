import React from 'react';
import { shallow } from 'enzyme';
import CategoryList from '../components/categories/categories-list';

describe('Categories List', () => {
  it('Renders without crashing', () => {
    shallow(<CategoryList />);
  });
});
