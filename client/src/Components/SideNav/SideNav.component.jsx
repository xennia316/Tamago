import React, { useState } from "react";
import styles from "./SideNav.module.css";

// Importing icons from fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareFromSquare,
  faHeart,
  faArrowAltCircleLeft,
  faListAlt,
  faRectangleXmark,
} from "@fortawesome/free-regular-svg-icons";

import { faGear, faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const SideNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.body}>
      <section
        onClick={() => {
          setOpen(!open);
        }}
        className={`${styles.topContainer}`}
      >
        <section className={styles.top}>Tamago</section>
        {open ? (
          <FontAwesomeIcon
            className={`${styles.toggleIcon}`}
            icon={faRectangleXmark}
          />
        ) : (
          <FontAwesomeIcon
            className={`${styles.toggleIcon}`}
            icon={faListAlt}
          />
        )}
      </section>
      {open ? (
        <section className={styles.contents}>
          <section className={styles.contents}>
            <section className={styles.content}>
              <FontAwesomeIcon icon={faHomeAlt} className={styles.icon} />
              Dashboard
            </section>
            <section className={styles.content}>
              <FontAwesomeIcon
                icon={faShareFromSquare}
                className={styles.icon}
              />
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
          </section>
          <section></section>
          <section className={styles.content}>
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className={styles.icon}
            />
            Logout
          </section>
        </section>
      ) : (
        <section></section>
      )}
    </section>
  );
};

export default SideNav;
