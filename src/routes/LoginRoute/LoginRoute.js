import React, { Component } from 'react';
import LoginForm from '../../components/login-form/login-form';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/finds';
    history.push(destination);
  };

  render() {
    return (
      <section className="login-content">
        <h2>Login</h2>
        <span>
          <i>Demo Account:</i> Username: admin | Password: pass
        </span>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginRoute;
