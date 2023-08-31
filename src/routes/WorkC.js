import React, { useState } from "react";
import styles from "./WorkC.module.css";
import ProjBox from "../components/WorkCBox";
import Footer from "../components/Footer";

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

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <div className={styles.detailBox} onClick={hideDetail}></div>
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
