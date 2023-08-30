import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkBBox.module.css";

function WorkBBox({ id, title, image, showDetail }) {
  return (
    <div
      className={styles.projectBox}
      onClick={() => {
        showDetail(id);
      }}
    >
      <img src={image} alt={title} className={styles.imageStyle} />
    </div>
  );
}

WorkBBox.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  showDetail: PropTypes.func.isRequired,
};

export default WorkBBox;
