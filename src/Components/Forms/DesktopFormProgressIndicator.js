import React from "react";

import styles from "./DesktopFormProgressIndicator.module.css";

import catPaw_color from "../../assets/desktop_catPaw_color.png";
import catPaw_grey from "../../assets/desktop_catPaw_gray.png";
import catPaw_highlited from "../../assets/desktop_catPaw_highlited.png";

let formProgressIndicator = [
  catPaw_grey,
  catPaw_grey,
  catPaw_grey,
  catPaw_grey,
  catPaw_grey,
];

const indicatorTitles = [
  "PERSONAL INFO",
  "HOUSEHOLD INFO",
  "VET INFO",
  "PET OWNERSHIP",
  "COMPLETE",
];

const DesktopFormProgressIndicator = ({ step }) => {
  formProgressIndicator[step] = catPaw_color;

  return (
    <div className={styles.process_indicator}>
      {formProgressIndicator.map((catPaw, i) => (
        <div className={styles.indicator_container} key={`form_${i}`}>
          <img
            src={i === step ? catPaw_highlited : catPaw}
            alt={`form ${i} indicator`}
          />
          <div className={styles.indicator_number}>{i + 1}</div>
          <span className={styles.indicator_title}>{indicatorTitles[i]}</span>
        </div>
      ))}
    </div>
  );
};

export default DesktopFormProgressIndicator;
