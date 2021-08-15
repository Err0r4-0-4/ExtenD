import React, { useState } from "react";
import styles from "./Login.module.css";
import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Img2 from "../Image/creator.png";
import Img3 from "../Image/user.png";

import Img1 from "../Image/logo_.png";
import Loginuser from "../Login/Loginuser";
import Logincreator from "../Login/Logincreator";
import Signupcreator from "../Signup/Signupcreator";
import Signupuser from "../Signup/Signupuser";
const Login = () => {
  const [but, setBut] = useState(false);
  const onclickselect1 = () => {
    setBut(true);
  };
  const onclickselect2 = () => {
    setBut(false);
  };

  const [but2, setBut2] = useState(false);
  const onclickselect3 = () => {
    setBut2(true);
  };
  const onclickselect4 = () => {
    setBut2(false);
  };
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.logo_name}>
          <img src={Img1} alt="logo pimage" className={styles.logo} />
          <div className={styles.box}>
            <span className={styles.do}>Extend</span>
          </div>
          <div className={styles.imageprofile}></div>
          <div className={styles.select}>
            <button
              className={!but ? styles.button1 : styles.button2}
              onClick={onclickselect1}
            >
              Creator
            </button>
            <button
              className={!but ? styles.button2 : styles.button1}
              onClick={onclickselect2}
            >
              Public
            </button>
          </div>

          <div className={styles.select2}>
            <button
              className={!but2 ? styles.button1 : styles.button2}
              onClick={onclickselect3}
            >
              SignUp
            </button>
            <button
              className={!but2 ? styles.button2 : styles.button1}
              onClick={onclickselect4}
            >
              Login
            </button>
          </div>
        </div>
        {!but ? (
          but2 ? (
            <Loginuser />
          ) : (
            <Signupuser />
          )
        ) : but2 ? (
          <Logincreator />
        ) : (
          <Signupcreator />
        )}

        <div className={styles.profile}>
          {!but ? (
            <img src={Img3} alt="User" className={styles.img2} />
          ) : (
            <img src={Img2} alt="Creator" className={styles.img2} />
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          Website for Fintech Creator Economy <span>©</span> Error 404
        </p>
        <ul>
          <li>
            <a href="#">
              <GoMarkGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <GoMail />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              <MdCall />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
