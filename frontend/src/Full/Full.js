import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import web3 from "../ethereum/web3";
import Spinner from "../Ui/Spinner";
import styles from "./Full.module.css";
import image from "../Image/social2.png";
import Creator from "../ethereum/Creator";
import Card from "../itemCard/itemCard";
import HeaderUser from "../Ui/HeaderUser";
import EachPage from "../Ui/EachPage";
import Card2 from "../Ui/Card2";
import Modal3 from "../Ui/Modal3";
const Full = React.memo((props) => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(!show);
  };
  const [creator, setCreator] = useState({});
  const [amount, setAmount] = useState({});
  const [merchs, setMerchs] = useState([]);
  const [showSpinner, setshowSpinner] = useState(false);

  useEffect(async () => {
    const data = {
      id: props.match.params.id,
    };

    let config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    try {
      setshowSpinner(true);
      const meerch = await axios.post(
        "http://localhost:3000/creator/getMerchandise",
        data,
        config
      );
      console.log(meerch.data.merchandises);
      setMerchs(meerch.data.merchandises);

      const res = await axios.post(
        "http://localhost:3000/creator/creatorById",
        data,
        config
      );
      setCreator(res.data.creator);

      const ctr = Creator(res.data.creator.contractAddress);

      const b = await ctr.methods.bal().call();
      console.log(b);
      setshowSpinner(false);
    } catch (error) {
      setshowSpinner(false);
      console.log(error);
    }
  }, []);

  const tipHandler = async () => {
    const ctr = Creator(creator.contractAddress);
    try {
      setshowSpinner(true);
      const accounts = await web3.eth.getAccounts();
      await ctr.methods.tip().send({
        from: accounts[0],
        value: web3.utils.toWei(amount),
      });
    } catch (error) {
      setshowSpinner(false);
      console.log(error);
    }

    const data = {
      name: creator.name,
      amount: amount,
      address: creator.contractAddress,
    };

    let config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    const res = await axios.post(
      "http://localhost:3000/creator/addTransaction",
      data,
      config
    );
    setshowSpinner(false);
    console.log(res);
  };

  let items = (
    <div>
      {merchs?.map((merch) => (
        <Card
          title={merch.title}
          desc={merch.description}
          price={merch.price}
          image={merch.image}
          address={creator.contractAddress}
        />
      ))}
    </div>
  );

  return (
    <div>
      <HeaderUser />
      <EachPage>
        <div className={styles.card2}>
          <Card2>
            {showSpinner ? <Spinner /> : ""}
            <img src={image} className={styles.image}></img>
            <div className={styles.one}>
              <div className={styles.left}>Name</div>
              <div className={styles.right}>{creator.name}</div>
            </div>
            <div className={styles.one}>
              <div className={styles.left}>description</div>
              <div className={styles.right}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <div className={styles.one}>
              <div className={styles.left}>Email</div>
              <div className={styles.right}>{creator.email}</div>
            </div>
            <div className={styles.one}>
              <div className={styles.left}>Account</div>
              <div className={styles.right}>{creator.contractAddress}</div>
            </div>
            <div className={styles.left2}>Tip the Creator</div>

            <div className={styles.two}>
              <input
                type="number"
                placeholder="Tip in ETH"
                onChange={(event) => setAmount(event.target.value)}
              />
              <div className={styles.eth}>ETH</div>
              <button onClick={tipHandler}>Tip</button>
            </div>
          </Card2>
        </div>
        <div className={show ? styles.full : styles.half}>
          <Card2>
            {show ? (
              <Modal3>{items ? items : <p>No items to display</p>}</Modal3>
            ) : (
              <p>Click to show merchandise</p>
            )}
            <button
              className={show ? styles.buttonfixed : styles.button}
              onClick={clickHandler}
            >
              {show ? "Hide Merchandise" : "Show Merchandise"}
            </button>
          </Card2>
        </div>
      </EachPage>
    </div>
  );
});

export default Full;
