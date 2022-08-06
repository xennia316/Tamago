import React from "react";

import Styles from "./Input.module.css";

const Input = () => {
  return (
    <section className={Styles.inputBody}>
      <div className={Styles.sideIcon}>hello</div>
      <input className={Styles.actualInput} type="text" />
      <label className={Styles.label}>Name</label>
    </section>
  );
};

export default Input;
