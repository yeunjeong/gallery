import React from "react";
import styles from "./AboutMe.module.css";
import Footer from "../components/Footer";

import profileImg from "../assets/images/profile3.png";
import project1 from "../assets/images/works/aboutMe1.png";
import project2 from "../assets/images/works/aboutMe2.png";

function AboutMe() {
  const data = [
    {
      text: "I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM  I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM ",
    },
    {
      text: "I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM  I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM I AM ",
    },
  ];

  return (
    <div>
      <div className={styles.profileImgBox}>
        <img src={profileImg} alt="profile" style={{ width: "40vw" }} />
        <div className={styles.profileText}>
          <div>I AM A</div>
          <div>MISONYEO</div>
        </div>
      </div>
      <div className={styles.section1}>
        {data[0].text}
        <img
          src={project1}
          alt="project1"
          style={{ width: "100%", marginTop: "5vh" }}
        />
      </div>
      <div className={styles.section2}>
        <div
          style={{
            paddingRight: "2vw",
          }}
        >
          {data[1].text}
        </div>

        <div className={styles.imageBox}>
          <img src={project2} alt="project2" style={{ width: "42vw" }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
