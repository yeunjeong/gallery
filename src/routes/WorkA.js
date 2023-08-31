import React, { useState } from "react";
import styles from "./WorkA.module.css";
import ProjBox from "../components/WorkABox";
import Footer from "../components/Footer";
import Detail from "../components/Detail";

import arrowLeft from "../assets/images/arrow_left2.png";
import arrowRight from "../assets/images/arrow_right2.png";

function WorkA() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const data = [
    {
      img: require("../assets/images/works/works_a/project_a.png"),
      title: "PROJECT A",
    },
    {
      img: require("../assets/images/works/works_a/project_b.png"),
      title: "PROJECT B",
    },
    {
      img: require("../assets/images/works/works_a/project_c.png"),
      title: "PROJECT C",
    },
    {
      img: require("../assets/images/works/works_a/project_d.png"),
      title: "PROJECT D",
    },
    {
      img: require("../assets/images/works/works_a/project_e.png"),
      title: "PROJECT E",
    },
    {
      img: require("../assets/images/works/works_a/project_f.png"),
      title: "PROJECT F",
    },
    {
      img: require("../assets/images/works/works_a/project_g.png"),
      title: "PROJECT G",
    },
    {
      img: require("../assets/images/works/works_a/project_h.png"),
      title: "PROJECT H",
    },
    {
      img: require("../assets/images/works/works_a/project_i.png"),
      title: "PROJECT I",
    },
    {
      img: require("../assets/images/works/works_a/project_j.png"),
      title: "PROJECT J",
    },
    {
      img: require("../assets/images/works/works_a/project_k.png"),
      title: "PROJECT K",
    },
    {
      img: require("../assets/images/works/works_a/project_l.png"),
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

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const hideDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <div>
      {isDetailOpen ? (
        <Detail
          id={currentImageIndex}
          title={data[currentImageIndex].title}
          data2={data2}
          hideDetail={hideDetail}
          bgColor={"rgba(42, 33, 142, 1)"}
        />
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
