import React from "react";
import styles from "./Card2.module.css";
const Card2 = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card2;
