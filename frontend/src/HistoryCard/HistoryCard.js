import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Ui/Card";
import styles from "./HistoryCard.module.css";
import image from "../Image/social2.png";
import Slide from "react-reveal/Slide";
const HistoryCard = React.memo((props) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = props.date.substring(0, 4);
  const date = props.date.substring(8, 10);
  const month1 = +props.date.substring(5, 7);
  const month = months[month1];
  const time = props.date.substring(12, 19);
  console.log(year, date, month);
  console.log(props.url);
  return (
    <Slide up>
      <Card>
        <div className={styles.card}>
          <img src={image} className={styles.image}></img>
        </div>
        <div className={styles.text}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.dis}>{props.address}</div>
        </div>
        <div className={styles.cal}>
          <div className={styles.amount}>{props.amount} ETH</div>

          <div className={styles.time}>{time}</div>
          <div className={styles.date}>
            {month} {date} {year}
          </div>
        </div>
      </Card>
    </Slide>
  );
});

export default HistoryCard;
