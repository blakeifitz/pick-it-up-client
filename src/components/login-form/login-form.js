import React, { Component } from 'react';
import { Input, Label } from '../form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../button/button';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>
        <div>
          <Label htmlFor="login-username-input">Username</Label>
          <Input
            ref={this.firstInput}
            id="login-username-input"
            name="user_name"
            required
          />
        </div>
        <div>
          <Label htmlFor="login-password-input">Password</Label>
          <Input
            id="login-password-input"
            name="password"
            type="password"
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}

export default LoginForm;
