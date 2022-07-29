import React from "react";
import styles from "./SideNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faShareFromSquare,
  faHeart,
  faBuilding,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";

import { faBell } from "@fortawesome/free-regular-svg-icons";
const SideNav = () => {
  return (
    <section className={styles.body}>
      <section className={styles.top}>Tamago</section>
      <section className={styles.contents}>
        <section className={styles.content}>
          <FontAwesomeIcon icon={faBuilding} className={styles.icon} />
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
          <FontAwesomeIcon icon={faWindowClose} className={styles.icon} />
          Settings
        </section>
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
