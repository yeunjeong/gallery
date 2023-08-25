import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./MenuBar.module.css";
import logoImg from "../assets/images/logo.png";

const Menubar = () => {
  return (
    <div>
      <div className={styles.container}>
        <img src={logoImg} alt="logo" style={{ marginRight: "20px" }} />
        <div className={styles.menuBox}>
          <Link to="/" className={styles.menuLink}>
            HOME
          </Link>
        </div>
        <div className={styles.menuBox}>
          <Link to="/aboutme" className={styles.menuLink}>
            ABOUT ME
          </Link>
        </div>
        <div className={styles.menuBox}>
          <Link to="/worka" className={styles.menuLink}>
            3D WORK
          </Link>
        </div>
        <div className={styles.menuBox}>
          <Link to="/workb" className={styles.menuLink}>
            CFX WORK
          </Link>
        </div>
        <div className={styles.menuBox}>
          <Link to="/workc" className={styles.menuLink}>
            ACTIVITY
          </Link>
        </div>
        <div className={styles.menuBox}>
          <Link to="/contact" className={styles.menuLink}>
            CONTACT
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Menubar;
