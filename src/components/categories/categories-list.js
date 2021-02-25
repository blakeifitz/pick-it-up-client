import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './categories-list.css';
export default class CategoryList extends Component {
  render() {
    return (
      <section>
        <ul className="category-list">
          {this.props.categories.map((cat, i) => (
            <li key={i}>
              <NavLink className="category-link" to={`/finds/${cat.title}`}>
                {cat.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/finds/category/new">
          <button className="add-button">+Add</button>
        </Link>
      </section>
    );
  }
}
