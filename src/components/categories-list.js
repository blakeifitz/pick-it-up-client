import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class CategoryList extends Component {
  render() {
    let categories = ['Fossils', 'Artifacts', 'Foraging'];

    return (
      <section>
        <h2>Categories</h2>
        <ul>
          {this.props.categories.map((cat, i) => (
            <li key={i}>
              <Link to={`/finds/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default CategoryList;
