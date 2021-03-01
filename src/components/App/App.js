import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}
          <Switch>
            {[
              '/finds',
              '/finds/:category/new',
              '/finds/category/new',
              '/finds/:category',
              '/finds/details/:itemId',
            ].map((path) => (
              <PrivateRoute
                exact
                key={path}
                path={path}
                component={DashboardRoute}
              />
            ))}
            <PrivateRoute
              exact
              path={'/finds/:category/'}
              component={DashboardRoute}
            />
            <PublicOnlyRoute path={'/register'} component={RegistrationRoute} />
            {['/', 'login'].map((path) => (
              <PublicOnlyRoute path={path} key={path} component={LoginRoute} />
            ))}

            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}
