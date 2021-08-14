import React, { useState } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import axios from 'axios'

import web3 from '../ethereum/web3'
import factory from '../ethereum/Factory'
import styles from "../Pages/Login.module.css";

const Logincreator =() => {

  const [keystroke, keystrikeSet] = useState("");
  const [invalidstate, setinvalidstate] = useState(false);
  const [touched, Settouched] = useState(false);

  const changedevent = (e) => {
    keystrikeSet(e.target.value);
    Settouched(false);
  };

  const blurevent = () => {
    Settouched(true);
    if (keystroke.trim().length === 0) {
      setinvalidstate(true);
    } else setinvalidstate(false);
  };

  const [keystroke2, keystrikeSet2] = useState("");
  const [invalidstate2, setinvalidstate2] = useState(false);
  const [touched2, Settouched2] = useState(false);

  const changedevent2 = (e) => {
    keystrikeSet2(e.target.value);
    Settouched2(false);
  };

  const blurevent2 = () => {
    Settouched2(true);
    if (keystroke2.trim().length === 0) {
      setinvalidstate2(true);
    } else setinvalidstate2(false);
  };

  const [keystroke3, keystrikeSet3] = useState("");
  const [invalidstate3, setinvalidstate3] = useState(false);
  const [touched3, Settouched3] = useState(false);

  const changedevent3 = (e) => {
    keystrikeSet3(e.target.value);
    Settouched3(false);
  };

  const blurevent3 = () => {
    Settouched3(true);
    if (keystroke3.trim().length === 0) {
      setinvalidstate3(true);
    } else setinvalidstate3(false);
  };
  const [keystroke4, keystrikeSet4] = useState("");
  const [invalidstate4, setinvalidstate4] = useState(false);
  const [touched4, Settouched4] = useState(false);

  const changedevent4 = (e) => {
    keystrikeSet4(e.target.value);
    Settouched4(false);
  };

  const blurevent4 = () => {
    Settouched4(true);
    if (keystroke4.trim().length === 0) {
      setinvalidstate4(true);
    } else setinvalidstate4(false);
  };


  const formsubmission = async(e) => {
    e.preventDefault();
    Settouched(true);
    if (keystroke.trim().length === 0) {
      setinvalidstate(true);
    }
    if (!invalidstate) {
      console.log(keystroke);
      keystrikeSet("");
    }

    Settouched2(true);
    if (keystroke2.trim().length === 0) {
      setinvalidstate2(true);
    }
    if (!invalidstate) {
      console.log(keystroke2);
      keystrikeSet2("");
    }

    Settouched3(true);
    if (keystroke3.trim().length === 0) {
      setinvalidstate3(true);
    }
    if (!invalidstate) {
      console.log(keystroke3);
      keystrikeSet3("");
    }

    Settouched4(true);
    if (keystroke4.trim().length === 0) {
      setinvalidstate4(true);
    }
    if (!invalidstate) {
      console.log(keystroke3);
      keystrikeSet4("");
    }

    const accounts = await web3.eth.getAccounts();
    await factory.methods
    .createCreator(keystroke3)
    .send({
      from: accounts[0],
    });

    const count = await factory.methods.creatorCount().call();

    const address = await factory.methods
    .deployedCreators(count-1)
    .call();

    // console.log(address)

    const data = {
      name: keystroke,
      email: keystroke2,
      password: keystroke4,
      account: keystroke3,
      contractAddress: address
    };

    axios
      .post('http://localhost:3000/creator/signup', data)
      .then((res) => {
        console.log(res);
        // this.setState({loading: false})
        // window.location.reload(false);
      })
      .then((err) => {
        console.log(err);
        // this.setState({loading: false})
        // window.location.reload(false);
      });
   
  };


  const isInvalid = touched && invalidstate;
  const isInvalid2 = touched2 && invalidstate2;
  const isInvalid3 = touched3 && invalidstate3;
  const isInvalid4 = touched4 && invalidstate4;

  return (
    <form className={styles.form} onSubmit={formsubmission}>
      <div className={styles.feildset}>
        <input
          type="text"
          placeholder="Name"
          value={keystroke}
          className={isInvalid ? styles.error : styles.feild}
          onChange={changedevent}
          onBlur={blurevent}
        />
        {isInvalid && (
          <p className={styles.error2}>
            <BsFillExclamationCircleFill />
          </p>
        )}
      </div>
      <div className={styles.feildset}>
        <input
          type="email"
          placeholder="Email ID"
          value={keystroke2}
          className={isInvalid2 ? styles.error : styles.feild}
          onChange={changedevent2}
          onBlur={blurevent2}
        />
        {isInvalid2 && (
          <p className={styles.error2}>
            <BsFillExclamationCircleFill />
          </p>
        )}
      </div>
      <div className={styles.feildset}>
        <input
          type="text"
          placeholder="Account"
          value={keystroke3}
          className={isInvalid3 ? styles.error : styles.feild}
          onChange={changedevent3}
          onBlur={blurevent3}
        />
        {isInvalid3 && (
          <p className={styles.error2}>
            <BsFillExclamationCircleFill />
          </p>
        )}
      </div>
      <div className={styles.feildset}>
        <input
          type="password"
          placeholder="Password"
          value={keystroke4}
          className={isInvalid4 ? styles.error : styles.feild}
          onChange={changedevent4}
          onBlur={blurevent4}
        />
        {isInvalid3 && (
          <p className={styles.error2}>
            <BsFillExclamationCircleFill />
          </p>
        )}
      </div>
      <button
        className={
          isInvalid || isInvalid2 || isInvalid3 || isInvalid4
            ? styles.buttonred
            : styles.button
        }
      >
        LOGIN
      </button>
      <div className={styles.anchor}>
        <a href="#">Error Encountered</a>
        <a href="#">Forgot Password ?</a>
      </div>
    </form>
  );
};

export default Logincreator;
