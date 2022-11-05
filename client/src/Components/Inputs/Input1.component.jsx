import React from "react";

import Styles from "./Input1.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Input1 = () => {
  return (
    <section className={Styles.inputBody}>
      <div className={Styles.sideIcon}>
        <FontAwesomeIcon icon={faLocationDot} className={Styles.icon} />
      </div>
      <input className={Styles.actualInput} type="text" />
      <label className={Styles.label}>Name</label>
    </section>
  );
};

export default Input1;
