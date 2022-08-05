import React from "react";
import Input from "../Inputs/Input";
import Styles from "./MidSectionTop.module.css";

const MidSectionTop = () => {
  return (
    <section className={Styles.body}>
      <section className={Styles.heading}>
        <h2 className={Styles.headingText}>Find a Hotel to Lodge</h2>
      </section>
      <section>
        <section className={Styles.inputSection}>
          <Input />
          <Input />
        </section>
        <section className={Styles.ButtonSection}></section>
      </section>
    </section>
  );
};

export default MidSectionTop;
