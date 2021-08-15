import React from "react";
import { Link } from "react-router-dom";
import styles from "./Mainpage.module.css";
import Footer from "../Ui/Footer";
const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.head}>
        <h1 className={styles.headtxt}>
          <span className={styles.yellow}>Extend</span> a Hand of....
          <br />
          Support, Security and Salary
        </h1>
        <Link to="/creators" className={styles.but1}>
          Creators
        </Link>
        <Link to="/history" className={styles.but2}>
          History
        </Link>
      </div>
    </div>
  );
};

export default Mainpage;
