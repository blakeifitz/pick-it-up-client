import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './item.css';
import { titleCase } from '../../misc-functions';
import config from '../../config';
import { BsTrashFill } from 'react-icons/bs';

//creates a item that acts a link

export default class Item extends React.Component {
  static default = {
    handleDeleteItem: () => {},
  };

  handleClickDelete = (e) => {
    e.preventDefault();
    const itemId = this.props.item.id;
    fetch(`${config.API_ENDPOINT}/item/${itemId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
      })
      .then(() => {
        this.props.handleDeleteItem(itemId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  render() {
    return (
      <div className="item">
        <Link to={`/finds/details/${this.props.item.id}`}>
          <h2 className="item-title">{titleCase(this.props.item.name)}</h2>

          <img
            className="item-img"
            alt="user item"
            src={this.props.item.img_src}
          />
        </Link>
        <button
          className="item-delete"
          type="button"
          onClick={this.handleClickDelete}
        >
          Remove <BsTrashFill />
        </button>{' '}
        <button
          className="mobile-remove-button"
          onClick={this.handleClickDelete}
        >
          <BsTrashFill />
        </button>
      </div>
    );
  }
}
Item.defaultProps = {
  item: {
    id: '',
    name: 'Loading...',
  },
};
