import React from "react";

import styles from "./ImageLink.module.css";

const ImageLink = (props) => {
  return (
    <div className={styles.imagelink_container} onClick={props.onClick}>
      <img src={props.image} alt={props.name} />
      <div className={styles.link_tag}>{props.name}</div>
    </div>
  );
};

export default ImageLink;
