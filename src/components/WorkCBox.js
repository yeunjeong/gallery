import React, { useState } from "react";
import styles from "./WorkCBox.module.css";

import project31Img from "../assets/images/works/project31.png";
import project32Img from "../assets/images/works/project32.png";
import activityA from "../assets/images/works/activityA.png";
import activityB from "../assets/images/works/activityB.png";
import activityC from "../assets/images/works/activityC.png";

const WorkCBox = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const data = [
    { img: project31Img, text: "project 1" },
    { img: project32Img, text: "project 2" },
    { img: activityA, text: "project 3" },
    { img: activityB, text: "project 4" },
    { img: activityC, text: "project 5" },
  ];
  const workCMenuItems = [
    { text: "ACTIVITY1" },
    { text: "ACTIVITY2" },
    { text: "ACTIVITY3" },
    { text: "ACTIVITY4" },
    { text: "ACTIVITY5" },
  ];

  const imagggg = (index) => {
    console.log(index);
  };

  return (
    <div>
      {" "}
      ACTIVITY
      <div className={styles.workCBox}>
        <div className={styles.workCmenu}>
          {workCMenuItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.menuText} ${
                currentImageIndex === index ? styles.textWithUnderline : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <div className={styles.imageWrapper}>
            <img
              src={data[currentImageIndex].img}
              alt="project3-1"
              style={{ width: "50vw", height: "70vh", objectFit: "cover" }}
            />
          </div>
          <div className={styles.explanationText}>
            {data[currentImageIndex].text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCBox;
