import React, { Component } from 'react';
import config from '../../config';
import TokenService from '../../services/token-service';

export class AddCategory extends Component {
  static default = {
    history: {
      push: () => {},
    },
  };
  state = { error: null };

  handleSubmit = (e) => {
    e.preventDefault();
    const category = {
      title: e.target['category-title-input'].value,
    };
    fetch(`${config.API_ENDPOINT}/category`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(category),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((category) => {
        console.log('CATEGORY', category);
        this.props.history.goBack();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section className="add-category">
        <h2>Create a category</h2>
        <form className="registration-content" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p>{error}</p>}</div>
          <div className="field">
            <label htmlFor="category-title-input">Category Title:</label>
            <input type="text" id="category-title-input" />
          </div>
          <div className="buttons">
            <button id="submit-form" type="submit">
              Add category
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddCategory;
