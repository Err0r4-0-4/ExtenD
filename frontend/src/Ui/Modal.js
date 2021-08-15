import React from "react";
import styles from "./Modal.module.css";
import { NavLink } from "react-router-dom";
const Modal = () => {
  return (
    <div className={styles.opened}>
      {console.log("hey")}
      <ul className={styles.ul2}>
        <li>xx</li>
        <li>
          <NavLink
            to="/home"
            className={styles.link1}
            activeClassName={styles.active1}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/creators"
            className={styles.link1}
            activeClassName={styles.active1}
          >
            Creators
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={styles.link1}
            activeClassName={styles.active1}
          >
            History
          </NavLink>
        </li>

        <li>
          <NavLink
            to=""
            className={styles.link1}
            activeClassName={styles.active1}
            exact
          >
            Signout
          </NavLink>
        </li>
        {/* <li>
        <NavLink
          to=""
          className={styles.link}
          activeClassName={styles.active}
          exact
        >
          +
        </NavLink>
      </li> */}
      </ul>
    </div>
  );
};

export default Modal;
