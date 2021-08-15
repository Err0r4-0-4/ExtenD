import React from "react";
import styles from "./Spinner.module.css";
import Backdrop from "./Backdrop";
function App() {
  return (
    <div>
      <Backdrop show={true} />
      <div class={styles["sk-folding-cube"]}>
        <div class={styles["sk-cube1"] + " " + styles["sk-cube"]}></div>
        <div class={styles["sk-cube2"] + " " + styles["sk-cube"]}></div>
        <div class={styles["sk-cube3"] + " " + styles["sk-cube"]}></div>
        <div class={styles["sk-cube4"] + " " + styles["sk-cube"]}></div>
      </div>
    </div>
  );
}

export default App;
