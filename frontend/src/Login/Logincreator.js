import React, { useState } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import axios from "axios";
import web3 from "../ethereum/web3";
import factory from "../ethereum/Factory";
import styles from "./Logincreator.module.css";
import Spinner from "../Ui/Spinner";
import { Redirect } from "react-router-dom";

const Logincreator = () => {
  //Creator Signup
  const [keystroke, keystrikeSet] = useState("");
  const [invalidstate, setinvalidstate] = useState(false);
  const [interest, setInterest] = useState("");

  const [touched, Settouched] = useState(false);
  const [showSpinner, setshowSpinner] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [file, setFile] = useState({});

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

  const [keystroke5, keystrikeSet5] = useState("");
  const [invalidstate5, setinvalidstate5] = useState(false);
  const [touched5, Settouched5] = useState(false);

  const changedevent5 = (e) => {
    keystrikeSet5(e.target.value);
    Settouched5(false);
  };

  const blurevent5 = () => {
    Settouched5(true);
    if (keystroke5.trim().length === 0) {
      setinvalidstate5(true);
    } else setinvalidstate5(false);
  };

  const formsubmission = async (e) => {
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
      console.log(keystroke4);
      keystrikeSet4("");
    }

    Settouched5(true);
    if (keystroke5.trim().length === 0) {
      setinvalidstate5(true);
    }
    if (!invalidstate) {
      console.log(keystroke5);
      keystrikeSet5("");
    }
    let address;
    try {
      setshowSpinner(true);
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCreator(keystroke3).send({
        from: accounts[0],
      });

      const count = await factory.methods.creatorCount().call();

      address = await factory.methods.deployedCreators(count - 1).call();
    } catch (error) {
      setshowSpinner(false);
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", keystroke);
    formData.append("email", keystroke2);
    formData.append("password", keystroke4);
    formData.append("account", keystroke3);
    formData.append("contractAddress", address);
    formData.append("fieldOfIntrest", interest);

    axios
      .post(
        "https://backend-jatingupta0214-gmailcom.vercel.app/creator/signup",
        formData
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.creatorId);
        localStorage.setItem("creator", true);

        const data = {
          email: keystroke2,
          password: keystroke4,
        };

        axios
          .post(
            "https://backend-jatingupta0214-gmailcom.vercel.app/creator/login",
            data
          )
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.creatorId);
            localStorage.setItem("creator", true);
            setIsAuth(true);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setshowSpinner(false);
      });
  };

  const isInvalid = touched && invalidstate;
  const isInvalid2 = touched2 && invalidstate2;
  const isInvalid3 = touched3 && invalidstate3;
  const isInvalid4 = touched4 && invalidstate4;
  const isInvalid5 = touched5 && invalidstate5;

  return (
    <form className={styles.form} onSubmit={formsubmission}>
      {showSpinner ? <Spinner /> : null}
      {isAuth ? <Redirect to="creatorProfile" /> : null}
      {showSpinner ? <Spinner /> : ""}
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
        {isInvalid4 && (
          <p className={styles.error2}>
            <BsFillExclamationCircleFill />
          </p>
        )}
      </div>

      <div className={styles.feildset}>
        <textarea
          placeholder="Feild of Interest"
          value={interest}
          className={isInvalid5 ? styles.error : styles.feild}
          onChange={(event) => setInterest(event.target.value)}
          onBlur={blurevent5}
        />
        {isInvalid5 && (
          <p className={styles.error2}>
            <BsFillExclamationCircleFill />
          </p>
        )}
      </div>
      <input
        type="file"
        onChange={(event) => setFile(event.target.files[0])}
        className={styles.choose}
      />
      <button
        className={
          isInvalid || isInvalid2 || isInvalid3 || isInvalid4 || isInvalid5
            ? styles.buttonred
            : styles.button
        }
      >
        LOGIN
      </button>
    </form>
  );
};

export default Logincreator;
