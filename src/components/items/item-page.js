import React, { Component } from 'react';
import { titleCase } from '../../misc-functions';

export class ItemPage extends Component {
  static defaultProps = {
    item: {
      name: 'loading...',
      description: '',
    },
  };
  render() {
    return (
      <section className="item-page-section">
        <h2>{titleCase(this.props.item.name)}</h2>
        <p>{this.props.item.description}</p>
        <button
          className="item-page-back"
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button>
      </section>
    );
  }
}

export default ItemPage;
