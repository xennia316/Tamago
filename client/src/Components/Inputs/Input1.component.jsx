import React from "react";

import styles from "./Input1.module.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Input1 = ({ id, type, label }) => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.inputContainer}`}>
        <input
          id={id}
          className={`${styles.input}`}
          type={type}
          pattern=".+"
          required
        />
        <label className={`${styles.label}`} for={label}>
          {label}
        </label>
      </div>
    </section>
  );
};

export default Input1;
