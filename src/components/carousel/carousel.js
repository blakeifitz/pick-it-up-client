import React from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import './carousel.css';

export class ImageCarousel extends React.Component {
  state = {
    current: 0,
    SliderData: [],
  };

  nextSlide = () => {
    if (this.state.current === this.props.sliderData.length - 1) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  };
  prevSlide = () => {
    if (this.state.current === 0) {
      this.setState({ current: this.props.sliderData.length - 1 });
    } else {
      this.setState({ current: this.state.current - 1 });
    }
  };

  render() {
    if (!this.props.sliderData) {
      return null;
    }
    return (
      <div className="slider">
        <div className="arrows">
          <FaArrowCircleLeft
            className="left-arrow"
            onClick={() => this.prevSlide()}
          />
          <FaArrowCircleRight
            className="right-arrow"
            onClick={() => this.nextSlide()}
          />
        </div>
        {this.props.sliderData.map((slide, i) => {
          return (
            <div
              key={i}
              className={i === this.state.current ? 'slide active' : 'slide'}
            >
              {i === this.state.current && (
                <img className="slider-image" src={slide} alt="your pictures" />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageCarousel;
