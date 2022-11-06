import React from "react";

import styles from "./Input1.module.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Input1 = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.inputContainer}`}>
        <input
          id="name"
          className={`${styles.input}`}
          type="text"
          pattern=".+"
          required
        />
        <label className={`${styles.label}`} for="name">
          Nome
        </label>
      </div>
    </section>
  );
};

export default Input1;
