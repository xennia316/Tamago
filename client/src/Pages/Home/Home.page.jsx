import React from "react";
import styles from "./Home.module.css";
import { SideNav } from "../../Components";
import { MidSectionTop } from "../../Sections";

const Home = () => {
  return (
    <section className={`${styles.homeWrapper}`}>
      <SideNav />
      <MidSectionTop />
    </section>
  );
};

export default Home;
