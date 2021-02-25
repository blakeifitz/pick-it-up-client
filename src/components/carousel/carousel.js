import React from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import './carousel.css';

const SliderData = [
  {
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
];

export class ImageCarousel extends React.Component {
  state = {
    current: 0,
  };
  nextSlide = () => {
    if (this.state.current === SliderData.length - 1) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  };
  prevSlide = () => {
    if (this.state.current === 0) {
      this.setState({ current: SliderData.length - 1 });
    } else {
      this.setState({ current: this.state.current - 1 });
    }
  };

  render() {
    if (!SliderData) {
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
        {SliderData.map((slide, i) => {
          return (
            <div
              key={i}
              className={i === this.state.current ? 'slide active' : 'slide'}
            >
              {i === this.state.current && (
                <img
                  className="slider-image"
                  src={slide.image}
                  alt="your pictures"
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageCarousel;
