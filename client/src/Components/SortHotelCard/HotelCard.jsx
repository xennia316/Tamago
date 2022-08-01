import React from "react";
import Styles from "./HotelCard.module.css";

import image from "../../images/hotel1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const HotelCard = () => {
  return (
    <section className={Styles.cardBody}>
      <div className={Styles.imageDiv}>
        <img src={image} className={Styles.image} alt="" />
      </div>
      <div className={Styles.hotelNameDiv}>
        <h2 className={Styles.hotelName}>Shikara Hotel</h2>
        <FontAwesomeIcon icon={faLocationDot} className={Styles.locationIcon} />
        <span style={{ color: "#bcbcbc" }}>hello</span>
      </div>
      <div className={Styles.hotelPriceDiv}>
        <span className={Styles.hotelPrice}>$43.5</span>
        <span style={{ color: "#bcbcbc" }}>/night</span>
      </div>
    </section>
  );
};

export default HotelCard;
