import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import Item from './item';
import { Link } from 'react-router-dom';
import config from '../../config';
import { titleCase } from '../../misc-functions';

export default class ItemList extends Component {
  handleClickDelete = (e) => {
    console.log('ITEMLIST PROPS', this.props);
    e.preventDefault();
    const { category } = this.props.match.params;
    console.log('CATEGORY TITLE', category);
    fetch(`${config.API_ENDPOINT}/category/${category}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
      })
      .then(() => {
        this.props.history.push(`/finds`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  render() {
    let { category } = this.props.match.params;
    return (
      <div className="main-list">
        {!category ? <h2>All Items</h2> : <h2>{titleCase(category)}</h2>}
        <ul>
          {this.props.items.map((item) => (
            <div key={item.id}>
              <Item
                handleDeleteItem={this.props.handleDeleteItem}
                item={item}
              />
            </div>
          ))}
        </ul>
        {category && (
          <div className="list-button-group">
            <Link to={`${category}/new`}>
              <button className="add-button">+Add</button>
            </Link>
            <button onClick={(e) => this.handleClickDelete(e)}>
              Delete Category
            </button>
          </div>
        )}
      </div>
    );
  }
}
