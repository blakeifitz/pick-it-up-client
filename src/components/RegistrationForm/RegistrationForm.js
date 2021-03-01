import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  firstInput = React.createRef();

  handleClickCancel = () => {
    this.props.history.push('/login');
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, username, password, confirmPassword } = ev.target;
    if (password.value !== confirmPassword.value) {
      return this.setState({ error: 'Passwords do not match' });
    }
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        name.value = '';
        username.value = '';
        password.value = '';
        this.props.onRegistrationSuccess();
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
      <section id="registration" className="registration">
        <div className="registration-content">
          <form
            onSubmit={this.handleSubmit}
            className="singup-form"
            aria-label="signup-form"
          >
            {' '}
            <span onClick={this.handleClickCancel} className="close">
              &times;
            </span>
            <h2>Create an Account</h2>
            <div role="alert">{error && <p>{error}</p>}</div>
            <div>
              <label htmlFor="registration-name-input">Enter your name:</label>
              <input
                ref={this.firstInput}
                id="registration-name-input"
                name="name"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="registration-username-input">
                Choose a username:
              </label>
              <input
                id="registration-username-input"
                name="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="flex-wrap">
              <label htmlFor="new-password">Password:</label>
              <input
                id="new-password"
                type="password"
                placeholder="New Password"
                name="password"
              />

              <label htmlFor="confirm-password" id="confirm">
                Confirm Password:
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </div>
            <footer>
              <button type="submit">Sign up</button>{' '}
              <Link className="small-message" to="/login">
                Already have an account?
              </Link>
            </footer>
          </form>
        </div>
      </section>
    );
  }
}

export default RegistrationForm;
