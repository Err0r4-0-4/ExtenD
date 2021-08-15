import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./HeaderUser.module.css";
import Img1 from "../Image/logoh.png";
const HeaderUser = () => {
  let header = false;
  const location = useLocation();
  console.log(location);
  if (location.pathname !== "/home") header = true;
  return (
    <>
      <div className={header ? styles.header2 : styles.header}>
        <div className={styles.logo_}>
          <img src={Img1} alt="Logo" className={styles.logo}></img>
        </div>
        {console.log(header)}
        <ul className={styles.ul}>
          <li>
            <NavLink
              to="/home"
              className={styles.link}
              activeClassName={styles.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/creators"
              className={styles.link}
              activeClassName={styles.active}
            >
              Creators
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={styles.link}
              activeClassName={styles.active}
            >
              History
            </NavLink>
          </li>

          <li>
            <NavLink
              to=""
              className={styles.link}
              activeClassName={styles.active}
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
    </>
  );
};

export default HeaderUser;
