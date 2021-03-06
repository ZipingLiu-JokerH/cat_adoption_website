import React from "react";

// styles
import styles from "./FooterLink.module.css";

const FooterLink = (props) => {
  return (
    <div className={styles.footer_link}>
      <a href="/#">{props.name}</a>
      {props.children ? (
        <div className={styles.icon_container}>{props.children}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FooterLink;
