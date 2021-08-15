import React from "react";
import styles from "./EachPage.module.css";
const EachPage = (props) => {
  return <div className={styles.page}>{props.children}</div>;
};

export default EachPage;
