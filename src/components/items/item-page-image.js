import React, { Component } from 'react';

export class ItemPageImg extends Component {
  static defaultProps = {
    item: {
      img_src: '',
    },
  };
  render() {
    return (
      <img
        className="item-page-img"
        src={this.props.item.img_src}
        alt="item-image"
      />
    );
  }
}

export default ItemPageImg;
