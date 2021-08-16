import React, { useState, useEffect } from "react";
// import styles from './itemCard.module.css'
import web3 from "../ethereum/web3";
import Img from "../Image/shop.jpg";
import Card from "../Ui/Card";
import styles from "./Order.module.css";
const Order = React.memo((props) => {
  return (
    <Card>
      <img src={Img} alt="shop" className={styles.img}></img>
      <div className={styles.left}>{props.title}</div>
      <div className={styles.left}>{props.desc}</div>
      <div className={styles.left}>{props.price} ETH</div>
    </Card>
  );
});

export default Order;
