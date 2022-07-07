import React from "react";
import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <section className={styles.body}>
      <section className={styles.content}>Home</section>
      <section className={styles.content}>About</section>
      <section className={styles.content}>Favorite</section>
      <section className={styles.content}>Contact</section>
      <section className={styles.content}>Bookings</section>
      <section className={styles.content}>Settings</section>
      <section className={styles.content}>Logout</section>
    </section>
  );
};

export default SideNav;
