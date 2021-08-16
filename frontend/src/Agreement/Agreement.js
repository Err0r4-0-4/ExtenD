import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Agreement.module.css";

const HistoryCard = React.memo((props) => {

  const [valid, setValid] = useState(true);

  // console.log(props.i);
  // console.log(props.hashArr[props.i]);
  // // console.log(props.hash)

  // if(props.hash==props.hashArr[props.i]){
  //   setValid(true)
  // }
  return (

    <div className={styles.aggrement}>
      {valid ? <div>YES</div> : <div>NO</div>}
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
