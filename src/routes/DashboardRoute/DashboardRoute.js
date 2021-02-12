import React, { Component } from 'react';
import CategoryList from '../../components/categories-list';
import { Link } from 'react-router-dom';

class DashboardRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  state = {
    error: null,
  };

  render() {
    let categories = ['Artifacts', 'Fossils', 'Foraging'];
    return (
      <div>
        <section>
          <h2>Dashboard</h2>
          <CategoryList categories={categories} />
        </section>
        <Link to={`/locations`}>
          <button>Add Location</button>
        </Link>
      </div>
    );
  }
}

export default DashboardRoute;
