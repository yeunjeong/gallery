import React from "react";
import styles from "./WorkBBox.module.css";

import project21Img from "../assets/images/works/project21.png";
import project22Img from "../assets/images/works/project22.png";
import project23Img from "../assets/images/works/project23.png";
import project24Img from "../assets/images/works/project24.png";

const WorkBBox = () => {
  return (
    <div>
      CFX WORK
      <div className={styles.workBBox}>
        <div
          style={{
            flex: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, display: "flex" }}>
            <div style={{ flex: 2, backgroundColor: "blue" }}>
              <div className={styles.imageWrapper}>
                <img
                  src={project21Img}
                  alt="project2-1"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "40vh",
                  }}
                />
                <div className={styles.overlay}>
                  <div className={styles.projectTitle}>PROJECT NAME</div>
                  <div className={styles.projectText}>Project explanation</div>
                </div>
              </div>
            </div>
            <div style={{ flex: 3, marginLeft: "2vh" }}>
              <div className={styles.imageWrapper}>
                <img
                  src={project22Img}
                  alt="project2-2"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "40vh",
                  }}
                />
                <div className={styles.overlay}>
                  <div className={styles.projectTitle}>PROJECT NAME</div>
                  <div className={styles.projectText}>Project explanation</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, marginTop: "2vh" }}>
            <div className={styles.imageWrapper}>
              <img
                src={project24Img}
                alt="project2-4"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "38vh",
                }}
              />
              <div className={styles.overlay}>
                <div className={styles.projectTitle}>PROJECT NAME</div>
                <div className={styles.projectText}>Project explanation</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 2, marginLeft: "2vh" }}>
          <div className={styles.imageWrapper}>
            <img
              src={project23Img}
              alt="project2-3"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "80vh",
              }}
            />
            <div className={styles.overlay}>
              <div className={styles.projectTitle}>PROJECT NAME</div>
              <div className={styles.projectText}>Project explanation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBBox;
