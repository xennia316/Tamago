import React from "react";

import Styles from "./Input.module.css";

const Input = () => {
  return (
    <section className={Styles.inputBody}>
      <input className={Styles.actualInput} type="text" />
      <div className={Styles.sideIcon}>hello</div>
    </section>
  );
};

export default Input;
