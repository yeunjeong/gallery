import React from "react";
import styles from "./ContactBox.module.css";

import profile2Img from "../assets/images/profile2.png";
import icon1Img from "../assets/images/icon1.png";
import icon2Img from "../assets/images/icon2.png";
import icon3Img from "../assets/images/icon3.png";

const ContactBox = () => {
  return (
    <div>
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
          <img src={profile2Img} alt="profile" className={styles.profileImg} />
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
