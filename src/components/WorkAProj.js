import React from "react";
import styles from "./WorkAProj.module.css";

function WorkAProj(props) {
  return (
    <div className={styles.projectBox}>
      <div className={styles.projName}>{props.title}</div>
      <div className={styles.imageWrapper}>
        <img
          src={props.image}
          alt={`${props.title}`}
          className={styles.imageStyle}
        />
      </div>
    </div>
  );
}

export default WorkAProj;
