import React from "react";
import styles from "./Home.module.css";
import videoImg from "../assets/images/video.png";
import profilePicImg from "../assets/images/profile_pic.png";
import project1ExImg from "../assets/images/works/project1_ex.png";
import project21Img from "../assets/images/works/project21.png";
import project22Img from "../assets/images/works/project22.png";
import project23Img from "../assets/images/works/project23.png";
import project24Img from "../assets/images/works/project24.png";
import project31Img from "../assets/images/works/project31.png";
import profile2Img from "../assets/images/profile2.png";

const workCMenuItems = [
  { text: "ACTIVITY1" },
  { text: "ACTIVITY2" },
  { text: "ACTIVITY3" },
  { text: "ACTIVITY4" },
  { text: "ACTIVITY5" },
];

function Home() {
  return (
    <div>
      <div className={styles.videoBox}>
        <img src={videoImg} alt="video" style={{ width: "100%" }} />
      </div>
      <div className={styles.contentBox}>
        ABOUT ME
        <div className={styles.profileBox}>
          <img src={profilePicImg} alt="profile" style={{ width: "30vw" }} />
          <div className={styles.profileText}>
            Name: yeunjeong <br />
            age: 22
          </div>
        </div>
      </div>
      <div className={styles.contentBox}>
        3D WORK
        <div className={styles.workABox}>
          <div className={styles.imageWrapper}>
            <img
              src={project1ExImg}
              alt="project1-1"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.contentBox}>
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
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentBox}>
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
      <div className={styles.contentBox}>
        BUSINESS CARD
        <div className={styles.profileBox}>
          <img src={profile2Img} alt="profile" style={{ width: "30vw" }} />
          <div className={styles.profileText}>
            Name: yeunjeong <br />
            age: 22
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
