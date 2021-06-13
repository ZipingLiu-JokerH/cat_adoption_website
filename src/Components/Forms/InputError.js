import React from "react";

import styles from "./Form.module.css";

const inputError = (prop) => {
  return <span className={styles.error}>{prop.children}</span>;
};

export default inputError;
