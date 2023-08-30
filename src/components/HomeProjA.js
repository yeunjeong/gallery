import React, { useState } from "react";
import styles from "./HomeProjA.module.css";

import arrowLeftImg from "../assets/images/arrow_left.png";
import arrowRightImg from "../assets/images/arrow_right.png";
import project1ExImg from "../assets/images/works/project1_ex.png";
import projectIImg from "../assets/images/works/project_i.png";
import projectJImg from "../assets/images/works/project_j.png";
import projectKImg from "../assets/images/works/project_k.png";
import projectLImg from "../assets/images/works/project_l.png";

const HomeProjA = () => {
  const images = [
    project1ExImg,
    projectIImg,
    projectJImg,
    projectKImg,
    projectLImg,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      3D WORK
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={styles.arrowBox} onClick={goToPreviousImage}>
          <img src={arrowLeftImg} alt="arrow" width="8vw" />
        </div>
        <div className={styles.workABox}>
          <div className={styles.imageWrapper}>
            <img
              src={images[currentImageIndex]}
              alt={`project-${currentImageIndex}`}
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.arrowBox} onClick={goToNextImage}>
          <img src={arrowRightImg} alt="arrow" width="8vw" />
        </div>
      </div>
    </div>
  );
};

export default HomeProjA;
