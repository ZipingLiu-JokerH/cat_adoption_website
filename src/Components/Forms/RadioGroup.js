import React from "react";
import { Field, ErrorMessage } from "formik";

import styles from "./Form.module.css";

const RadioGroup = ({ groupid, question, groupname, choices, style }) => {
  return (
    <div style={style}>
      <div id={groupid}>{question}</div>
      <div
        role="group"
        aria-labelledby={groupid}
        className={styles.radio_group}
      >
        {choices.map((choice) => (
          <label key={`${groupname}_${choice}`}>
            <Field type="radio" name={groupname} value={choice} />
            <span>{choice}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
