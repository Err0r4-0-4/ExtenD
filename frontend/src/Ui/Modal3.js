import React from "react";
import styles from "./Modal3.module.css";
const Modal3 = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

export default Modal3;
