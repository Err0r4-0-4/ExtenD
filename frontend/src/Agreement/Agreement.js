import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Agreement.module.css";
const HistoryCard = React.memo((props) => {
  console.log(props.url);
  return (
    <div className={styles.aggrement}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.dis}>{props.desc}</div>
      <button className={styles.button}>
        <a href={props.url}>Show Contract</a>
      </button>
      <div className={styles.hash}>{props.hash}</div>
    </div>
  );
});

export default HistoryCard;
