import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Slide from "react-reveal/Slide";
import {
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrSnapchat,
  GrLocation,
} from "react-icons/gr";
import image from "../Image/creator2.jpg";
import styles from "./Creator.module.css";
import Card from "../Ui/Card";
const Creators = React.memo((props) => {
  return (
    // <Slide up>
    <Card>
      {props.image ? (
        <img
          id="base64image"
          src={`data:image/jpeg;base64,${props.image}`}
          className={styles.image}
        />
      ) : (
        <img src={image} className={styles.image} />
      )}

      <div className={styles.text}>
        <div className={styles.location}>
          <GrLocation /> India
        </div>
        <div className={styles.name}>{props.name}</div>

        <div className={styles.dis}>Description</div>

        <ul className={styles.social}>
          <li className={styles.face}>
            <a href="https://facebook.com/creator">
              <GrFacebookOption />
            </a>
          </li>
          <li className={styles.insta}>
            <a href="https://instagram.com/creator">
              <GrInstagram />
            </a>
          </li>

          <li className={styles.twitter}>
            <a href="https://twitter.com/creator">
              <GrTwitter />
            </a>
          </li>
          <li className={styles.snap}>
            <a href="https://snapchat.com/creator">
              <GrSnapchat />
            </a>
          </li>
        </ul>
        <div className={styles.link}>
          <Link to={"/" + props.id}>View creator</Link>
        </div>
      </div>
    </Card>
    // </Slide>
  );
});

export default Creators;
