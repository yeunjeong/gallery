import React from "react";
import styles from "./WorkCBox.module.css";

import project31Img from "../assets/images/works/project31.png";

const WorkCBox = () => {
  const workCMenuItems = [
    { text: "ACTIVITY1" },
    { text: "ACTIVITY2" },
    { text: "ACTIVITY3" },
    { text: "ACTIVITY4" },
    { text: "ACTIVITY5" },
  ];

  return (
    <div>
      {" "}
      ACTIVITY
      <div className={styles.workCBox}>
        <div className={styles.workCmenu}>
          {workCMenuItems.map((item, index) => (
            <div key={index} className={styles.menuText}>
              {item.text}
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <div className={styles.imageWrapper}>
            <img
              src={project31Img}
              alt="project3-1"
              style={{ width: "50vw", height: "70vh", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              backgroundColor: "#D9D9D92B",
              flex: 1,
              marginLeft: "2vh",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WorkCBox;
