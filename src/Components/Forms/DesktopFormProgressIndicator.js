import React from "react";

import styles from "./DesktopFormProgressIndicator.module.css";

import catPaw_color from "../../assets/desktop_catPaw_color.png";
import catPaw_grey from "../../assets/desktop_catPaw_gray.png";
import catPaw_highlited from "../../assets/desktop_catPaw_highlited.png";

const indicatorTitles = [
  "PERSONAL INFO",
  "HOUSEHOLD INFO",
  "VET INFO",
  "PET OWNERSHIP",
  "COMPLETE",
];

const DesktopFormProgressIndicator = ({ step }) => {
  const indicator = new Array(5).fill(catPaw_grey);
  for (let i = 0; i <= step; i++) {
    if (i === step) {
      indicator[i] = catPaw_highlited;
    } else {
      indicator[i] = catPaw_color;
    }
  }

  return (
    <div className={styles.process_indicator}>
      {indicator.map((catPaw, i) => (
        <div className={styles.indicator_container} key={`form_${i}`}>
          <img src={catPaw} alt={`form ${i} indicator`} />
          <div className={styles.indicator_number}>{i + 1}</div>
          <span className={styles.indicator_title}>{indicatorTitles[i]}</span>
        </div>
      ))}
    </div>
  );
};

export default DesktopFormProgressIndicator;
