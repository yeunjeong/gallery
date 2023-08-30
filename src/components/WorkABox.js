import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkABox.module.css";

function WorkABox({ id, title, image, showDetail }) {
  return (
    <div className={styles.projectBox}>
      <div className={styles.projName}>{title}</div>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={`${title}`}
          className={styles.imageStyle}
          onClick={() => {
            showDetail(id);
          }}
        />
      </div>
    </div>
  );
}

WorkABox.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  showDetail: PropTypes.func.isRequired,
};

export default WorkABox;
