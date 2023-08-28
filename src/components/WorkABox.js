import React from "react";
import styles from "./WorkABox.module.css";

import project1ExImg from "../assets/images/works/project1_ex.png";

const WorkABox = () => {
  return (
    <div>
      3D WORK
      <div className={styles.workABox}>
        <div className={styles.imageWrapper}>
          <img
            src={project1ExImg}
            alt="project1-1"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkABox;
