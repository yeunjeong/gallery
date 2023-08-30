import React from "react";
import PropTypes from "prop-types";
import styles from "./Detail.module.css";

import exitIcon from "../assets/images/exit_icon.png";

function Detail({ id, title, data2, hideDetail, bgColor }) {
  return (
    <div className={styles.detailBox} style={{ backgroundColor: bgColor }}>
      <div className={styles.detailHeader}>
        <div style={{ flex: 1 }}>{title}</div>
        <img
          src={exitIcon}
          alt="exit icon"
          style={{ width: "3vw" }}
          onClick={hideDetail}
        />
      </div>
      <img
        src={data2[0].img1}
        alt="project"
        style={{ width: "100%", margin: "2vw 0vw" }}
      />
      <div className={styles.detailText}>{data2[0].text1}</div>
      <div style={{ display: "flex", margin: "4vw 0vw" }}>
        <div className={styles.detailText2}>{data2[0].text2}</div>
        <img src={data2[0].img2} alt="project" style={{ width: "40%" }} />
      </div>
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  data2: PropTypes.arrayOf.isRequired,
  hideDetail: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Detail;
