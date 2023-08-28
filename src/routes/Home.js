import React from "react";
import styles from "./Home.module.css";
import SideScroll from "../components/SideScroll";

import videoImg from "../assets/images/video.png";
import profilePicImg from "../assets/images/profile_pic.png";
import project1ExImg from "../assets/images/works/project1_ex.png";
import project21Img from "../assets/images/works/project21.png";
import project22Img from "../assets/images/works/project22.png";
import project23Img from "../assets/images/works/project23.png";
import project24Img from "../assets/images/works/project24.png";
import project31Img from "../assets/images/works/project31.png";
import profile2Img from "../assets/images/profile2.png";
import icon1Img from "../assets/images/icon1.png";
import icon2Img from "../assets/images/icon2.png";
import icon3Img from "../assets/images/icon3.png";

function Home() {
  const workCMenuItems = [
    { text: "ACTIVITY1" },
    { text: "ACTIVITY2" },
    { text: "ACTIVITY3" },
    { text: "ACTIVITY4" },
    { text: "ACTIVITY5" },
  ];

  return (
    <div>
      <SideScroll />
      <div id="1" className={styles.videoBox}>
        <img src={videoImg} alt="video" style={{ width: "100%" }} />
      </div>
      <div id="2" className={styles.contentBox}>
        ABOUT ME
        <div className={styles.profileBox}>
          <img src={profilePicImg} alt="profile" style={{ width: "30vw" }} />
          <div className={styles.profileText}>
            Name: yeunjeong <br />
            age: 22
          </div>
        </div>
      </div>
      <div id="3" className={styles.contentBox}>
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
      <div id="4" className={styles.contentBox}>
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
      <div id="5" className={styles.contentBox}>
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
      <div id="6" className={styles.contentBox}>
        BUSINESS CARD
        <div className={styles.contactBox}>
          <div className={styles.contactText}>
            ABOUT MY PROTFOLIO
            <div className={styles.contactAboutME}>Explanation</div>
            SOCIAL NETWORK SERVICE
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                margin: "1vh 1vh",
              }}
            >
              <img
                src={icon1Img}
                alt="youtube icon"
                className={styles.contactIcon}
              />
              <img
                src={icon2Img}
                alt="linked in icon"
                className={styles.contactIcon}
              />
              <img
                src={icon3Img}
                alt="instagram icon"
                className={styles.contactIcon}
              />
            </div>
            MY EMAIL ADDRESS
            <div
              style={{
                backgroundColor: "#D9D9D9",
                height: "5vh",
                marginBottom: "1vh",
              }}
            ></div>
            EMAIL TITLE
            <div
              style={{
                backgroundColor: "#D9D9D9",
                height: "5vh",
                marginBottom: "1vh",
              }}
            ></div>
            EMAIL CONTENT
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#D9D9D9",
              }}
            ></div>
            <div className={styles.sendButton}>SEND TO EMAIL, NOW!</div>
          </div>
          <div>
            <img
              src={profile2Img}
              alt="profile"
              className={styles.profileImg}
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>
          THIS PAGE DOESN’T HAVE ANY COMMERCIAL PURPOSE, JUST PERSONAL
          PORTFOLIOS.
        </div>
        <div className={styles.footerText}>
          @2023, JURAN KIM, ALL RIGHT RESERVED
        </div>
      </div>
    </div>
  );
}

export default Home;
