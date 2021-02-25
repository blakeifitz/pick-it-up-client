import React, { Component } from 'react';

export class ItemPageImg extends Component {
  static defaultProps = {
    item: {
      img_src: '',
    },
  };
  render() {
    return <img src={this.props.item.img_src} alt="item-image"></img>;
  }
}

export default ItemPageImg;
