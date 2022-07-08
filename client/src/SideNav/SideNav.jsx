import React from "react";
import styles from "./SideNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShareFromSquare,
  faHeart,
  faBell,
  faGear,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  return (
    <section className={styles.body}>
      <section className={styles.top}>Tamago</section>
      <section className={styles.content}>
        <FontAwesomeIcon icon={faHome} className={styles.icon} />
        Dashboard
      </section>
      <section className={styles.content}>
        <FontAwesomeIcon icon={faShareFromSquare} className={styles.icon} />
        Explore City
      </section>
      <section className={styles.content}>
        <FontAwesomeIcon icon={faBell} className={styles.icon} />
        Notification
      </section>
      <section className={styles.content}>
        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        Favorite
      </section>
      <section className={styles.content}>
        <FontAwesomeIcon icon={faGear} className={styles.icon} />
        Settings
      </section>
      <section></section>
      <section className={styles.content}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className={styles.icon} />
        Logout
      </section>
    </section>
  );
};

export default SideNav;
