import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './item.css';

//creates a note item that acts a link

export default class ItemPage extends React.Component {
  static default = {
    onDeleteItem: () => {},
  };

  //   handleClickDelete = (e) => {
  //     e.preventDefault();
  //     const noteId = this.props.id;
  //     this.props.history.push(`/`);
  //     fetch(`https://noteful-bfitz.herokuapp.com/api/notes/${noteId}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     })
  //       .then((res) => {
  //         if (!res.ok) return res.json().then((e) => Promise.reject(e));
  //       })
  //       .then(() => {
  //         console.log('noteID', noteId);
  //         this.context.deleteNote(noteId);
  //       })
  //       .catch((error) => {
  //         console.error({ error });
  //       });
  //   };
  render() {
    return (
      <div className="item">
        <h2 className="item-title">
          <Link to={`/finds/details/${this.props.item.name}`}>
            {this.props.item.name}
          </Link>
        </h2>
        <img
          className="item-img"
          alt="user image"
          src={this.props.item.img_src}
        />
        <button
          className="item-delete"
          type="button"
          onClick={this.handleClickDelete}
        >
          Remove
        </button>
      </div>
    );
  }
}
// Note.propTypes = {
//   id: PropTypes.number,
//   name: PropTypes.string,
//   modified: PropTypes.string,
// };
