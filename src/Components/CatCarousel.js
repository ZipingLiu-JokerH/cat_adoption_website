import React from "react";

import styles from "./CatCarousel.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CatCarousel = ({ images, catName: name }) => {
  return (
    <div className={styles.carousel}>
      <Carousel infiniteLoop>
        {images.map((image, i) => (
          <div key={`${name}_${i}`}>
            <img src={image} alt={`${name}_${i}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CatCarousel;
