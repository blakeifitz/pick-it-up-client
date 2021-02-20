import React, { Component } from 'react';
import CategoryList from '../../components/categories-list';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import config from '../../config';

class DashboardRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };
  state = {
    error: null,
    locations: [],
    items: [],
  };

  componentDidMount() {
    TokenService.hasAuthToken()
      ? Promise.all([
          fetch(`${config.API_ENDPOINT}/location`, {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${TokenService.getAuthToken()}`,
            },
          }),
          fetch(`${config.API_ENDPOINT}/item`, {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${TokenService.getAuthToken()}`,
            },
          }),
        ])
          .then(([locationRes, itemRes]) => {
            if (!locationRes.ok) {
              return locationRes.json().then((e) => Promise.reject(e));
            }
            if (!itemRes.ok) {
              return itemRes.json().then((e) => Promise.reject(e));
            }
            return Promise.all([locationRes.json(), itemRes.json()]);
          })
          .then(([locations, items]) => {
            this.setState({ locations, items });
          })
          .catch((error) => {
            console.error({ error });
          })
      : this.setState({
          items: [],
          location: [],
        });
  }

  render() {
    let categories = ['Artifacts', 'Fossils', 'Foraging'];
    return (
      <div>
        <section>
          <h2>Dashboard</h2>
          <CategoryList categories={categories} />
        </section>
        <Link to={`/locations`}>
          <button>Add Items</button>
        </Link>
      </div>
    );
  }
}

export default DashboardRoute;
