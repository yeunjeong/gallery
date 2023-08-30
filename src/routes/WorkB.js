import React, { useState } from "react";
import styles from "./WorkB.module.css";
import ProjBox from "../components/WorkBBox";
import Footer from "../components/Footer";
import Detail from "../components/Detail";

function WorkB() {
  const data = [
    {
      img: require("../assets/images/works/works_b/project_1.png"),
      title: "PROJECT 1",
    },
    {
      img: require("../assets/images/works/works_b/project_2.png"),
      title: "PROJECT 2",
    },
    {
      img: require("../assets/images/works/works_b/project_3.png"),
      title: "PROJECT 3",
    },
    {
      img: require("../assets/images/works/works_b/project_4.png"),
      title: "PROJECT 4",
    },
    {
      img: require("../assets/images/works/works_b/project_5.png"),
      title: "PROJECT 5",
    },
    {
      img: require("../assets/images/works/works_b/project_6.png"),
      title: "PROJECT 6",
    },
    {
      img: require("../assets/images/works/works_b/project_7.png"),
      title: "PROJECT 7",
    },
    {
      img: require("../assets/images/works/works_b/project_8.png"),
      title: "PROJECT 8",
    },
    {
      img: require("../assets/images/works/works_b/project_9.png"),
      title: "PROJECT 9",
    },
    {
      img: require("../assets/images/works/works_b/project_10.png"),
      title: "PROJECT 10",
    },
    {
      img: require("../assets/images/works/works_b/project_11.png"),
      title: "PROJECT 11",
    },
    {
      img: require("../assets/images/works/works_b/project_12.png"),
      title: "PROJECT 12",
    },
    {
      img: require("../assets/images/works/works_b/project_13.png"),
      title: "PROJECT 13",
    },
    {
      img: require("../assets/images/works/works_b/project_14.png"),
      title: "PROJECT 14",
    },
    {
      img: require("../assets/images/works/works_b/project_15.png"),
      title: "PROJECT 15",
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

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const imageMargin = "10px";

  const showDetail = (id) => {
    setCurrentImageIndex(id);
    setIsDetailOpen(true);

    // Store the current scroll position
    setPreviousScrollPosition(window.scrollY);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const hideDetail = () => {
    setIsDetailOpen(false);

    // Restore the previous scroll position
    window.scrollTo(0, previousScrollPosition);
  };

  return (
    <div>
      {isDetailOpen ? (
        <Detail
          id={currentImageIndex}
          title={data[currentImageIndex].title}
          data2={data2}
          hideDetail={hideDetail}
          bgColor={"rgba(6, 2, 56, 1)"}
        />
      ) : (
        <div className={styles.contentBox}>
          <div style={{ marginLeft: "5vh" }}>CFX WORK</div>
          <div className={styles.projectBox}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "30%", marginRight: imageMargin }}>
                <ProjBox
                  id={0}
                  title={data[0].title}
                  image={data[0].img}
                  showDetail={showDetail}
                />
              </div>
              <div style={{ width: "30%", marginRight: imageMargin }}>
                <ProjBox
                  id={1}
                  title={data[1].title}
                  image={data[1].img}
                  showDetail={showDetail}
                />
              </div>
              <div style={{ width: "40%" }}>
                <ProjBox
                  id={2}
                  title={data[2].title}
                  image={data[2].img}
                  showDetail={showDetail}
                />
              </div>
            </div>
            <div style={{ display: "flex", marginTop: imageMargin }}>
              <div style={{ width: "50%", marginRight: imageMargin }}>
                <ProjBox
                  id={3}
                  title={data[3].title}
                  image={data[3].img}
                  showDetail={showDetail}
                />
              </div>
              <div style={{ width: "50%" }}>
                <ProjBox
                  id={4}
                  title={data[4].title}
                  image={data[4].img}
                  showDetail={showDetail}
                />
              </div>
            </div>
            <div style={{ display: "flex", marginTop: imageMargin }}>
              <div style={{ width: "100%" }}>
                <ProjBox
                  id={5}
                  title={data[5].title}
                  image={data[5].img}
                  showDetail={showDetail}
                />
              </div>
            </div>
            <div style={{ display: "flex", marginTop: imageMargin }}>
              <div
                style={{
                  width: "33%",
                  marginRight: imageMargin,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "40%" }}>
                  <ProjBox
                    id={6}
                    title={data[6].title}
                    image={data[6].img}
                    showDetail={showDetail}
                  />
                </div>
                <div style={{ height: "60%", marginTop: imageMargin }}>
                  <ProjBox
                    id={7}
                    title={data[7].title}
                    image={data[7].img}
                    showDetail={showDetail}
                  />
                </div>
              </div>
              <div style={{ width: "34%", marginRight: imageMargin }}>
                <ProjBox
                  id={8}
                  title={data[8].title}
                  image={data[8].img}
                  showDetail={showDetail}
                />
              </div>
              <div
                style={{
                  width: "33%",
                  marginRight: imageMargin,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "30%" }}>
                  <ProjBox
                    id={9}
                    title={data[9].title}
                    image={data[9].img}
                    showDetail={showDetail}
                  />
                </div>
                <div style={{ height: "70%", marginTop: imageMargin }}>
                  <ProjBox
                    id={10}
                    title={data[10].title}
                    image={data[10].img}
                    showDetail={showDetail}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: imageMargin }}>
              <div
                style={{
                  width: "50%",
                  marginRight: imageMargin,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "30%" }}>
                  <ProjBox
                    id={11}
                    title={data[11].title}
                    image={data[11].img}
                    showDetail={showDetail}
                  />
                </div>
                <div style={{ height: "70%", marginTop: imageMargin }}>
                  <ProjBox
                    id={12}
                    title={data[12].title}
                    image={data[12].img}
                    showDetail={showDetail}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  marginRight: imageMargin,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "40%" }}>
                  <ProjBox
                    id={13}
                    title={data[13].title}
                    image={data[13].img}
                    showDetail={showDetail}
                  />
                </div>
                <div style={{ height: "60%", marginTop: imageMargin }}>
                  <ProjBox
                    id={14}
                    title={data[14].title}
                    image={data[14].img}
                    showDetail={showDetail}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default WorkB;
