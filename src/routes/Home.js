import React from "react";
import styles from "./Home.module.css";
import SideScroll from "../components/SideScroll";
import WorkABox from "../components/HomeProjA";
import WorkBBox from "../components/HomeProjB";
import WorkCBox from "../components/HomeProjC";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";

import videoImg from "../assets/images/video.png";
import profilePicImg from "../assets/images/profile_pic.png";

function Home() {
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
        <WorkABox />
      </div>
      <div id="4" className={styles.contentBox}>
        <WorkBBox />
      </div>
      <div id="5" className={styles.contentBox}>
        <WorkCBox />
      </div>
      <div id="6" className={styles.contentBox}>
        <ContactBox />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
