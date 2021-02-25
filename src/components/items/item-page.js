import React, { Component } from 'react';

export class ItemPage extends Component {
  static defaultProps = {
    item: {
      name: '',
      description: '',
    },
  };
  render() {
    return (
      <section>
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.description}</p>
      </section>
    );
  }
}

export default ItemPage;
