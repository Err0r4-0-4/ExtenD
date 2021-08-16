import React, { useState } from "react";
import styles from "../Pages/Login.module.css";
import axios from "axios";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Spinner from "../Ui/Spinner";
import { Redirect } from "react-router-dom";

const Signupuser = () => {
  //Public Login
  const [keystroke, keystrikeSet] = useState("");
  const [invalidstate, setinvalidstate] = useState(false);
  const [touched, Settouched] = useState(false);
  const [showSpinner, setshowSpinner] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

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

  //   const [keystroke2, keystrikeSet2] = useState("");
  //   const [invalidstate2, setinvalidstate2] = useState(false);
  //   const [touched2, Settouched2] = useState(false);

  //   const changedevent2 = (e) => {
  //     keystrikeSet2(e.target.value);
  //     Settouched2(false);
  //   };

  //   const blurevent2 = () => {
  //     Settouched2(true);
  //     if (keystroke2.trim().length === 0) {
  //       setinvalidstate2(true);
  //     } else setinvalidstate2(false);
  //   };

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

  const formsubmission = (e) => {
    e.preventDefault();
    Settouched(true);
    if (keystroke.trim().length === 0) {
      setinvalidstate(true);
    }
    if (!invalidstate) {
      console.log(keystroke);
      keystrikeSet("");
    }

    const data = {
      email: keystroke,
      password: keystroke3,
    };
    setshowSpinner(true);
    axios
      .post("https://backend-jatingupta0214-gmailcom.vercel.app/user/login", data)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("creator", false);
        setIsAuth(true);
        setshowSpinner(false);
        // this.setState({loading: false})
        // window.location.reload(false);
      })
      .catch((err) => {
        window.alert(err);
        console.log(err);
        setshowSpinner(false);
        // this.setState({loading: false})
        // window.location.reload(false);
      });

    // Settouched2(true);
    // if (keystroke2.trim().length === 0) {
    //   setinvalidstate2(true);
    // }
    // if (!invalidstate) {
    //   console.log(keystroke2);
    //   keystrikeSet2("");
    // }

    Settouched3(true);
    if (keystroke3.trim().length === 0) {
      setinvalidstate3(true);
    }
    if (!invalidstate) {
      console.log(keystroke3);
      keystrikeSet3("");
    }
  };

  const isInvalid = touched && invalidstate;
  //   const isInvalid2 = touched2 && invalidstate2;
  const isInvalid3 = touched3 && invalidstate3;

  return (
    <form className={styles.form} onSubmit={formsubmission}>
<<<<<<< HEAD
      {showSpinner ? <Spinner/> : null}
      {isAuth ? <Redirect to="home"/> : null}
=======
      {isAuth ? <Redirect to="creators" /> : null}
>>>>>>> a1f5bd6316099f9dff610f6c63cff36953859ef7
      <div className={styles.feildset}>
        <input
          type="email"
          placeholder="Email ID"
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
      {/* <div className={styles.feildset}>
          <input
            type="text"
            placeholder="PIN Code"
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
        </div> */}
      <div className={styles.feildset}>
        <input
          type="password"
          placeholder="Password"
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
      <button
        className={isInvalid || isInvalid3 ? styles.buttonred : styles.button}
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

export default Signupuser;
