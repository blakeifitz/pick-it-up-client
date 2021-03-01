import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    if (this.firstInput.current) {
      this.firstInput.current.focus();
    }
  }

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <h3>Get Started</h3>
        <p>
          I like to metal detect, arrowhead hunt, mushroom hunt, and fossil
          hunt. Over the years I have collected lots of items. Over time I
          forget exactly where I found things or what stratigraphic age they
          are. With this app a user can save details about items, the location
          they were found, the category of item they are, and an image. To get
          started, register by pressing <i>Sign Up</i>. To just check it out use
          my demo account.
        </p>
        <div role="alert">{error && <p>{error}</p>}</div>
        <div className="login-inputs">
          <div>
            <label htmlFor="login-username-input">Username:</label>
            <input
              ref={this.firstInput}
              id="login-username-input"
              name="username"
              type="text"
              required
            />
          </div>
          <div>
            <label htmlFor="login-password-input">Password:</label>
            <input
              id="login-password-input"
              name="password"
              type="password"
              required
            />
          </div>
        </div>
        <button id="login-submit" type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
