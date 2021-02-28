import React from 'react';
import { shallow } from 'enzyme';
import ItemList from '../components/items/item-list';
import ItemPageImg from '../components/items/item-page-image';
import ItemPageLocation from '../components/items/item-page-location';
import ItemPage from '../components/items/item-page';
import Item from '../components/items/item';

describe('Item Components', () => {
  it('Renders without crashing', () => {
    shallow(<ItemList />);
  });
  it('Renders without crashing', () => {
    shallow(<ItemPageImg />);
  });
  it('Renders without crashing', () => {
    shallow(<ItemPageLocation />);
  });
  it('Renders without crashing', () => {
    shallow(<ItemPage />);
  });
  it('Renders without crashing', () => {
    shallow(<Item />);
  });
});
