import React, { Component } from 'react';
import { getItemsForCategory } from '../../misc-functions';
import Item from './item';
import { Link } from 'react-router-dom';

export default class ItemList extends Component {
  static default = {
    match: {
      params: {},
    },
  };
  render() {
    let { category } = this.props.match.params;
    return (
      <div className="main-list">
        <h2>List of things</h2>
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>
              <Item item={item} />
            </li>
          ))}
        </ul>
        {category && (
          <Link to={`${category}/new`}>
            <button className="add-button">+Add</button>
          </Link>
        )}
      </div>
    );
  }
}
