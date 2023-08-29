import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./WorkAProj.module.css";

function WorkAProj({ id, title, image }) {
  return (
    <div className={styles.projectBox}>
      <div className={styles.projName}>{title}</div>
      <div className={styles.imageWrapper}>
        <Link to={`/worka/${id}`}>
          <img src={image} alt={`${title}`} className={styles.imageStyle} />
        </Link>
      </div>
    </div>
  );
}

WorkAProj.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default WorkAProj;
