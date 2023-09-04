import React, { useState } from "react";
import styles from "./WorkC.module.css";
import ProjBox from "../components/WorkCBox";
import Footer from "../components/Footer";

import exitIcon from "../assets/images/go_back_btn.png";

function WorkC() {
  const data = [
    {
      img: require("../assets/images/works/works_a/project_a.png"),
      title: "ACTIVITY A",
    },
    {
      img: require("../assets/images/works/works_c/activity_b.png"),
      title: "ACTIVITY B",
    },
    {
      img: require("../assets/images/works/works_c/activity_c.png"),
      title: "ACTIVITY C",
    },
    {
      img: require("../assets/images/works/works_c/activity_d.png"),
      title: "ACTIVITY D",
    },
    {
      img: require("../assets/images/works/works_c/activity_e.png"),
      title: "ACTIVITY E",
    },
    {
      img: require("../assets/images/works/works_c/activity_f.png"),
      title: "ACTIVITY F",
    },
    {
      img: require("../assets/images/works/works_c/activity_g.png"),
      title: "ACTIVITY G",
    },
    {
      img: require("../assets/images/works/works_c/activity_h.png"),
      title: "ACTIVITY H",
    },
    {
      img: require("../assets/images/works/works_c/activity_i.png"),
      title: "ACTIVITY I",
    },
    {
      img: require("../assets/images/works/works_c/activity_j.png"),
      title: "ACTIVITY J",
    },
  ];

  const data2 = [
    {
      img1: require("../assets/images/works/works_c/activity_a.png"),
      text1:
        "  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ABOUT MY ACTIVITY  ",
    },
  ];

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageMargin = "10px";

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
        <div className={styles.detailBox}>
          <div className={styles.detailHeader}>
            <img
              src={exitIcon}
              alt="exit icon"
              style={{ width: "1.5vw" }}
              onClick={hideDetail}
            />
            <div style={{ flex: 1, marginLeft: "2vw" }}>
              {data[currentImageIndex].title}
            </div>
            <div style={{ fontFamily: "KleeOne" }}>0000.00.00.</div>
          </div>
          <div className={styles.detailTag}>
            #GOOD_THING #GOOD_THING #GOOD_THING #GOOD_THING #GOOD_THING
            #GOOD_THING
          </div>
          <img
            src={data[currentImageIndex].img}
            alt="project"
            style={{ width: "100%", margin: "2vw 0vw" }}
          />
          <div className={styles.detailText}>{data2[0].text1}</div>
          <div style={{ display: "flex", marginTop: imageMargin }}>
            <div
              style={{
                width: "45%",
                marginRight: imageMargin,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "70%" }}>
                <img
                  src={data[currentImageIndex].img}
                  alt={"title"}
                  className={styles.imageStyle}
                />
              </div>
              <div style={{ height: "30%", marginTop: imageMargin }}>
                <img
                  src={data[currentImageIndex].img}
                  alt={"title"}
                  className={styles.imageStyle}
                />
              </div>
            </div>
            <div
              style={{
                width: "55%",
                marginRight: imageMargin,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "25%" }}>
                <img
                  src={data[currentImageIndex].img}
                  alt={"title"}
                  className={styles.imageStyle}
                />
              </div>
              <div style={{ height: "75%", marginTop: imageMargin }}>
                <img
                  src={data[currentImageIndex].img}
                  alt={"title"}
                  className={styles.imageStyle}
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: imageMargin }}>
            <div
              style={{
                width: "45%",
                marginRight: imageMargin,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "35%" }}>
                <img
                  src={data[currentImageIndex].img}
                  alt={"title"}
                  className={styles.imageStyle}
                />
              </div>
              <div style={{ height: "35%", marginTop: imageMargin }}>
                <img
                  src={data[currentImageIndex].img}
                  alt={"title"}
                  className={styles.imageStyle}
                />
              </div>
              <div style={{ height: "30%", marginTop: imageMargin }}>
                <img
                  src={data[currentImageIndex].img}
                  alt={"title"}
                  className={styles.imageStyle}
                />
              </div>
            </div>
            <div
              style={{
                width: "55%",
                marginRight: imageMargin,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "50%" }}>
                <img
                  src={data[currentImageIndex].img}
                  alt={"title"}
                  className={styles.imageStyle}
                />
              </div>
              <div style={{ height: "50%", marginTop: imageMargin }}>
                <img
                  src={data[currentImageIndex].img}
                  alt={"title"}
                  className={styles.imageStyle}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.contentBox}>
          <div style={{ marginLeft: "5vh" }}>ACTIVITY</div>
          <div className={styles.projectBox}>
            {[0, 2, 4, 6, 8].map((index) => (
              <div
                style={{ display: "flex", marginBottom: "35px" }}
                key={index}
              >
                <ProjBox
                  id={index}
                  title={data[index].title}
                  image={data[index].img}
                  showDetail={showDetail}
                />
                <ProjBox
                  id={index + 1}
                  title={data[index + 1].title}
                  image={data[index + 1].img}
                  showDetail={showDetail}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default WorkC;
