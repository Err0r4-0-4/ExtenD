import React from "react";
import { Link } from "react-router-dom";
import styles from "./Mainpage.module.css";
const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.head}>
        <h1 className={styles.headtxt}>
          Extend a Hand of....
          <br />
          Support, Security and Salary
        </h1>
        <Link to="new" className={styles.but1}>
          Creators
        </Link>
        <Link to="donate" className={styles.but2}>
          History
        </Link>
      </div>
    </div>
  );
};

export default Mainpage;
