import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        THIS PAGE DOESN’T HAVE ANY COMMERCIAL PURPOSE, JUST PERSONAL PORTFOLIOS.
      </div>
      <div className={styles.footerText}>
        @2023, JURAN KIM, ALL RIGHT RESERVED
      </div>
    </div>
  );
}

export default Footer;
