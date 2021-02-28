import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { titleCase } from '../../misc-functions';
import './categories-list.css';
export default class CategoryList extends Component {
  render() {
    return (
      <div className="category-nav">
        <h3>Your Categories</h3>
        <ul className="category-list">
          {this.props.categories.map((cat, i) => (
            <li key={i}>
              <NavLink className="category-link" to={`/finds/${cat.title}`}>
                {titleCase(cat.title)}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/finds/category/new">
          <button id="category-add-button" className="add-button">
            +Add
          </button>
        </Link>
      </div>
    );
  }
}
