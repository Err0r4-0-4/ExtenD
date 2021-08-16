import React, { useState, useEffect } from "react";
import styles from "./itemCard.module.css";
import web3 from "../ethereum/web3";
import Spinner from "../Ui/Spinner";
import Creator from "../ethereum/Creator";
import Card2 from "../Ui/Card2";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Card = React.memo((props) => {

  const [showSpinner, setshowSpinner] = useState(false);
  const [redirect, setRedirect] = useState(false);

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
        "https://backend-jatingupta0214-gmailcom.vercel.app/creator/addOrder",
        data,
        config
      );
      console.log(res.data);
      setRedirect(true)

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
       {redirect ? <Redirect to="orders" /> : null}
      <div className={styles.itemsC}>
        <Card2>
          {showSpinner ? <Spinner /> : ""}
          <img
            src={`data:image/jpeg;base64,${props.image}`}
            className={styles.img}
          />
          <div className={styles.one}>
            <div className={styles.left}>Tile</div>
            <div className={styles.right}>{props.title}</div>
          </div>
          <div className={styles.one}>
            <div className={styles.left}>Description</div>

            <div className={styles.right}>{props.desc}</div>
          </div>
          <div className={styles.one}>
            <div className={styles.left}>Price</div>

            <div className={styles.right}> {props.price} ETH</div>
          </div>
          <button onClick={onBuyHandler} className={styles.button3}>
            Buy now
          </button>
          {/* <div>{props.title}</div> */}
        </Card2>
      </div>
    </div>
  );
});

export default Card;
