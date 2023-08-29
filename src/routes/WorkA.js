import React, { useState } from "react";
import styles from "./WorkA.module.css";
import ProjBox from "../components/WorkAProj";
import Footer from "../components/Footer";

import arrowLeft from "../assets/images/arrow_left2.png";
import arrowRight from "../assets/images/arrow_right2.png";

function WorkA() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const data = [
    {
      img: require("../assets/images/works/project_a.png"),
      title: "PROJECT A",
    },
    {
      img: require("../assets/images/works/project_b.png"),
      title: "PROJECT B",
    },
    {
      img: require("../assets/images/works/project_c.png"),
      title: "PROJECT C",
    },
    {
      img: require("../assets/images/works/project_d.png"),
      title: "PROJECT D",
    },
    {
      img: require("../assets/images/works/project_e.png"),
      title: "PROJECT E",
    },
    {
      img: require("../assets/images/works/project_f.png"),
      title: "PROJECT F",
    },
    {
      img: require("../assets/images/works/project_g.png"),
      title: "PROJECT G",
    },
    {
      img: require("../assets/images/works/project_h.png"),
      title: "PROJECT H",
    },
    {
      img: require("../assets/images/works/project_i.png"),
      title: "PROJECT I",
    },
    {
      img: require("../assets/images/works/project_j.png"),
      title: "PROJECT J",
    },
    {
      img: require("../assets/images/works/project_k.png"),
      title: "PROJECT K",
    },
    {
      img: require("../assets/images/works/project_l.png"),
      title: "PROJECT L",
    },
  ];

  const goToPreviousPage = () => {
    setCurrentPageIndex((prevIndex) =>
      prevIndex === 0 ? data.length / 4 - 1 : prevIndex - 1
    );
  };

  const goToNextPage = () => {
    setCurrentPageIndex((prevIndex) =>
      prevIndex === data.length / 4 - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className={styles.contentBox}>
        <div style={{ marginLeft: "5vh" }}>3D WORK</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            height: "100vh",
          }}
        >
          <div className={styles.arrowBox}>
            <img
              src={arrowLeft}
              alt="left arrow"
              style={{ width: "3vw" }}
              onClick={goToPreviousPage}
            />
          </div>
          <div className={styles.projectSection}>
            <div className={styles.projectSection2}>
              <ProjBox
                title={data[currentPageIndex * 4].title}
                image={data[currentPageIndex * 4].img}
              />
              <ProjBox
                title={data[currentPageIndex * 4 + 1].title}
                image={data[currentPageIndex * 4 + 1].img}
              />
            </div>
            <div className={styles.projectSection2}>
              <ProjBox
                title={data[currentPageIndex * 4 + 2].title}
                image={data[currentPageIndex * 4 + 2].img}
              />
              <ProjBox
                title={data[currentPageIndex * 4 + 3].title}
                image={data[currentPageIndex * 4 + 3].img}
              />
            </div>
          </div>
          <div className={styles.arrowBox}>
            <img
              src={arrowRight}
              alt="right arrow"
              style={{ width: "3vw" }}
              onClick={goToNextPage}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WorkA;
