import React, { Component } from 'react';
import CategoryList from '../../components/categories/categories-list';
import TokenService from '../../services/token-service';
import config from '../../config';
import ItemPage from '../../components/items/item-page';
import ItemList from '../../components/items/item-list';
import AddCategory from '../../components/add/add-category';
import ImageCarousel from '../../components/carousel/carousel';
import './dashboard.css';
import { Switch, Route } from 'react-router-dom';
import {
  getItemsForCategory,
  getItem,
  getSliderData,
} from '../../misc-functions';
import AddForm from '../../components/add/add-item-form';
import ItemPageImg from '../../components/items/item-page-image';
import ItemPageLocation from '../../components/items/item-page-location';
import BackButton from '../../components/back-button';

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
    categories: [],
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
          fetch(`${config.API_ENDPOINT}/category`, {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${TokenService.getAuthToken()}`,
            },
          }),
        ])
          .then(([locationRes, itemRes, categoryRes]) => {
            if (!locationRes.ok) {
              return locationRes.json().then((e) => Promise.reject(e));
            }
            if (!itemRes.ok) {
              return itemRes.json().then((e) => Promise.reject(e));
            }
            if (!categoryRes.ok) {
              return categoryRes.json().then((e) => Promise.reject(e));
            }
            return Promise.all([
              locationRes.json(),
              itemRes.json(),
              categoryRes.json(),
            ]);
          })
          .then(([locations, items, categories]) => {
            this.setState({ locations, items, categories });
          })
          .catch((error) => {
            console.error({ error });
          })
      : this.setState({
          items: [],
          location: [],
          categories: [],
        });
  }
  handleDeleteItem = (itemId) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== itemId),
    });
  };
  renderTop(categories, item, category) {
    return (
      <>
        {['/finds', '/finds/:category'].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => {
              return <CategoryList {...routeProps} categories={categories} />;
            }}
          />
        ))}
        <Route
          path="/finds/details/:itemId"
          render={(routeProps) => {
            return <ItemPageImg item={item} {...routeProps} />;
          }}
        />

        <Route
          path="/finds/:category/new"
          render={(routeProps) => {
            return <BackButton category={category} {...routeProps} />;
          }}
        />
      </>
    );
  }

  renderMain(item, items, category, locations) {
    return (
      <>
        <Switch>
          <Route path="/finds/category/new" component={AddCategory} />
          <Route
            path="/finds/:category/new"
            render={(routeProps) => {
              return (
                <AddForm
                  {...routeProps}
                  category={category}
                  locations={locations}
                />
              );
            }}
          />
          <Route
            path="/finds/details/:itemId"
            render={(routeProps) => {
              return (
                <ItemPage
                  handleDeleteItem={(itemId) => {
                    this.handleDeleteItem(itemId);
                  }}
                  item={item}
                  locations={locations}
                  category={category}
                  {...routeProps}
                />
              );
            }}
          />
          {['/finds', '/finds/:category'].map((path) => (
            <Route
              exact
              key={path}
              path={path}
              render={(routeProps) => {
                const itemsForCategory = getItemsForCategory(items, category);
                return (
                  <ItemList
                    handleDeleteItem={(itemId) => {
                      this.handleDeleteItem(itemId);
                    }}
                    {...routeProps}
                    items={itemsForCategory}
                  />
                );
              }}
            />
          ))}
        </Switch>
      </>
    );
  }

  renderBottom(item, locations, sliderData) {
    return (
      <>
        {['/finds', '/finds/:category'].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => {
              return <ImageCarousel {...routeProps} sliderData={sliderData} />;
            }}
          />
        ))}
        <Route
          path="/finds/details/:itemId"
          render={(routeProps) => {
            return (
              <ItemPageLocation
                item={item}
                locations={locations}
                {...routeProps}
              />
            );
          }}
        />
      </>
    );
  }

  render() {
    const { locations, categories, items } = this.state;
    const { category } = this.props.match.params;
    const { itemId } = this.props.match.params;
    const item = getItem(items, itemId);
    const sliderData = getSliderData(items);

    return (
      <div className="dashboard">
        <div className="categories">
          {this.renderTop(categories, item, category)}
        </div>
        <div className="main-list">
          {this.renderMain(item, items, category, locations)}
        </div>
        <div className="info">
          {this.renderBottom(item, locations, sliderData)}
        </div>
      </div>
    );
  }
}
DashboardRoute.defaultProps = {
  match: {
    params: {},
  },
};

export default DashboardRoute;
