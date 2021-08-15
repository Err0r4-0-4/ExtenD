import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./HeaderCreater.module.css";
import Modal from "./Modal";
import Img1 from "../Image/logoh.png";
const HeaderCreater = () => {
  const [open, setOpen] = useState(false);
  const clickhandler = () => {
    setOpen(!open);
  };
  let header = true;

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
              to="/creatorProfile"
              className={styles.link}
              activeClassName={styles.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/historyCreator"
              className={styles.link}
              activeClassName={styles.active}
            >
              History
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/history"
              className={styles.link}
              activeClassName={styles.active}
            >
              History
            </NavLink>
          </li> */}

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
        <div className={styles.burger} onClick={clickhandler}>
          {open ? (
            <Modal />
          ) : (
            <div className={styles.burgerbut}>
              <div className={styles.lines}></div>
              <div className={styles.lines}></div>
              <div className={styles.lines}></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderCreater;
