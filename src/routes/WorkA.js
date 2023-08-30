import React, { useState } from "react";
import styles from "./WorkA.module.css";
import ProjBox from "../components/WorkABox";
import Footer from "../components/Footer";

import arrowLeft from "../assets/images/arrow_left2.png";
import arrowRight from "../assets/images/arrow_right2.png";
import exitIcon from "../assets/images/exit_icon.png";

function WorkA() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const data2 = [
    {
      img1: require("../assets/images/works/project_a_1.png"),
      img2: require("../assets/images/works/project_a_2.png"),
      text1:
        "  THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT ",
      text2:
        "  THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS THE PROJECT IS",
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

  const showDetail = (id) => {
    setCurrentImageIndex(id);
    setIsDetailOpen(true);
  };

  const hideDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <div>
      {isDetailOpen ? (
        <div className={styles.detailBox}>
          <div className={styles.detailHeader}>
            <div style={{ flex: 1 }}>{data[currentImageIndex].title}</div>
            <img
              src={exitIcon}
              alt="exit icon"
              style={{ width: "3vw" }}
              onClick={hideDetail}
            />
          </div>
          <img
            src={data2[0].img1}
            alt="project"
            style={{ width: "100%", margin: "2vw 0vw" }}
          />
          <div className={styles.detailText}>{data2[0].text1}</div>
          <div style={{ display: "flex", margin: "4vw 0vw" }}>
            <div className={styles.detailText2}>{data2[0].text2}</div>
            <img src={data2[0].img2} alt="project" style={{ width: "40%" }} />
          </div>
        </div>
      ) : (
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
                  id={currentPageIndex * 4}
                  title={data[currentPageIndex * 4].title}
                  image={data[currentPageIndex * 4].img}
                  showDetail={showDetail}
                />
                <ProjBox
                  id={currentPageIndex * 4 + 1}
                  title={data[currentPageIndex * 4 + 1].title}
                  image={data[currentPageIndex * 4 + 1].img}
                  showDetail={showDetail}
                />
              </div>
              <div className={styles.projectSection2}>
                <ProjBox
                  id={currentPageIndex * 4 + 2}
                  title={data[currentPageIndex * 4 + 2].title}
                  image={data[currentPageIndex * 4 + 2].img}
                  showDetail={showDetail}
                />
                <ProjBox
                  id={currentPageIndex * 4 + 3}
                  title={data[currentPageIndex * 4 + 3].title}
                  image={data[currentPageIndex * 4 + 3].img}
                  showDetail={showDetail}
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
      )}
      <Footer />
    </div>
  );
}

export default WorkA;
