import React, { useState, useEffect } from "react";
import styles from "./itemCard.module.css";
import web3 from "../ethereum/web3";
import Spinner from "../Ui/Spinner";
import Creator from "../ethereum/Creator";

import axios from "axios";

const Card = React.memo((props) => {
  const [showSpinner, setshowSpinner] = useState(false);
  const onBuyHandler = async () => {
    const ctr = Creator(props.address);

    const data = {
      title: props.title,
      description: props.desc,
      price: props.price,
    };

    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    try {
      setshowSpinner(true);
      let res = await axios.post(
        "http://localhost:3000/creator/addOrder",
        data,
        config
      );

      console.log(res.data);

      /////////////////////////

      let b = await ctr.methods.bal().call();
      console.log(b);

      const accounts = await web3.eth.getAccounts();
      await ctr.methods.tip().send({
        from: accounts[0],
        value: web3.utils.toWei(props.price),
      });

      b = await ctr.methods.bal().call();
      setshowSpinner(false);
      console.log(b);
    } catch (e) {
      setshowSpinner(false);
      console.log(e);
    }
  };

  return (
    <div>
      {showSpinner ? <Spinner /> : ""}
      <img
        src={`data:image/jpeg;base64,${props.image}`}
        className={styles.img}
      />

      <div>{props.title}</div>
      <div>{props.desc}</div>
      <div>{props.price}</div>
      <button onClick={onBuyHandler}>Buy now</button>
      {/* <div>{props.title}</div> */}
    </div>
  );
});

export default Card;
