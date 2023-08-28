import React from "react";
import styles from "./Home.module.css";
import SideScroll from "../components/SideScroll";
import WorkABox from "../components/WorkABox";
import WorkBBox from "../components/WorkBBox";
import WorkCBox from "../components/WorkCBox";
import ContactBox from "../components/ContactBox";

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
