import React from "react";

import catPaw_color from "../../assets/catPaw_color.png";
import catPaw_grey from "../../assets/catPaw_gray.png";

import styles from "./MobileFormProgressIndicator.module.css";

let formProgressIndicator = [
  catPaw_grey,
  catPaw_grey,
  catPaw_grey,
  catPaw_grey,
  catPaw_grey,
];

const MobileFormProgressIndicator = ({ step }) => {
  formProgressIndicator[step] = catPaw_color;

  return (
    <div className={styles.process_indicator}>
      {formProgressIndicator.map((catPaw, i) => (
        <img src={catPaw} key={`form_${i}`} alt={`form ${i} indicator`} />
      ))}
    </div>
  );
};

export default MobileFormProgressIndicator;
