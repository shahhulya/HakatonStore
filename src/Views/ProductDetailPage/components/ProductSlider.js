import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import classes from '../productDetail.module.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

export default function ProductSlider({ images }) {
  return (
    <Carousel
      className={classes.sliderWrapper}
      showArrows={false}
      showThumbs={true}
      infiniteLoop={true}
    >
      {images.map((image, index) => (
        <div key={index} className={classes.sliderImg}>
          <img src={image} alt="hero" />
        </div>
      ))}
    </Carousel>
  );
}
