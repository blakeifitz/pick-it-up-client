import React from 'react';
import { shallow } from 'enzyme';
import AddForm from '../components/add/add-item-form';
import AddLocation from '../components/add/add-location';
import AddCategory from '../components/add/add-category';
('../components/app/app');

describe('Add components', () => {
  it('Renders Add Item w/o crashing', () => {
    shallow(<AddForm />);
  });
  it('Renders Add Location w/o crashing', () => {
    shallow(<AddLocation />);
  });
  it('Renders Add Category w/o crashing', () => {
    const locations = ['test1', 'test2', 'test3'];
    shallow(<AddCategory locations={locations} />);
  });
});
