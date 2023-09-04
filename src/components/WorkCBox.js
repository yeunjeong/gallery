import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkCBox.module.css";

function WorkCBox({ id, title, image, showDetail }) {
  return (
    <div
      className={`${styles.projectBox} ${
        id % 2 === 0 ? styles.marginStyle : ""
      }`}
    >
      <div className={styles.titleText}>{title}</div>
      <div
        className={styles.imageWrapper}
        onClick={() => {
          showDetail(id);
        }}
      >
        <img src={image} alt="project" className={styles.imageStyle}></img>
      </div>
      <div className={styles.textBox}>
        <div>#GOOD_THING #GOOD_THING</div>
        <div>#GOOD_THING #GOOD_THING</div>
        <div>#GOOD_THING #GOOD_THING</div>
      </div>
    </div>
  );
}

WorkCBox.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  showDetail: PropTypes.func.isRequired,
};

export default WorkCBox;
