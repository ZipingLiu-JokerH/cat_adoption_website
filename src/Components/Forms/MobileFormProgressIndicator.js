import React from "react";

import catPaw_color from "../../assets/catPaw_color.png";
import catPaw_grey from "../../assets/catPaw_gray.png";

import styles from "./MobileFormProgressIndicator.module.css";

const MobileFormProgressIndicator = ({ step }) => {
  const indicator = new Array(5).fill(catPaw_grey);
  for (let i = 0; i <= step; i++) {
    indicator[i] = catPaw_color;
  }

  return (
    <div className={styles.process_indicator}>
      {indicator.map((catPaw, i) => (
        <img src={catPaw} key={`form_${i}`} alt={`form ${i} indicator`} />
      ))}
    </div>
  );
};

export default MobileFormProgressIndicator;
