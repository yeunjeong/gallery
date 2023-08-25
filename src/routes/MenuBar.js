import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./MenuBar.module.css";
import logoImg from "../assets/images/logo.png";

const menuItems = [
  { to: "/", text: "HOME" },
  { to: "/aboutme", text: "ABOUT ME" },
  { to: "/worka", text: "3D WORK" },
  { to: "/workb", text: "CFX WORK" },
  { to: "/workc", text: "ACTIVITY" },
  { to: "/contact", text: "CONTACT" },
];

const Menubar = () => {
  return (
    <div>
      <div className={styles.container}>
        <img
          src={logoImg}
          alt="logo"
          style={{ marginRight: "50px", width: "4vw" }}
        />
        {menuItems.map((item, index) => (
          <div key={index} className={styles.menuBox}>
            <Link to={item.to} className={styles.menuLink}>
              {item.text}
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Menubar;
