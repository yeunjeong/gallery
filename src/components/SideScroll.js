import React, { useState, useEffect } from "react";
import styles from "./SideScroll.module.css";
import { Link } from "react-scroll";

const SideScroll = () => {
  const [activeSection, setActiveSection] = useState("1");

  const handleSetActive = (sectionId) => {
    setActiveSection(sectionId);
  };

  const sections = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className={styles.rightMenuBar}>
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          spy={true}
          smooth={true}
          offset={-10}
          onSetActive={() => handleSetActive(section)}
        >
          <div
            className={`${styles.menuCircle} ${
              activeSection === section ? styles.activeCircle : ""
            }`}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default SideScroll;
