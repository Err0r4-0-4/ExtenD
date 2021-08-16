import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Ui/Spinner";
import styles from "./createMerch.module.css";
import HeaderCreater from "../Ui/HeaderCreater";
import { Redirect } from "react-router-dom";

const Create = React.memo(() => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState({});
  const [showSpinner, setshowSpinner] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onSubmitHandler = async () => {
    const formData = new FormData();

    try {

      console.log(file);

      formData.append("file", file);
  
      formData.append("title", title);
  
      formData.append("description", desc);
  
      formData.append("price", price);
  
      let config = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };

      console.log("strated");
      setshowSpinner(true);
      const res = await axios.post(
        "https://backend-jatingupta0214-gmailcom.vercel.app/creator/createMerchandise",
        formData,
        config
      );
      setshowSpinner(false);
      setRedirect(true)
      console.log(res);
    } catch (e) {
      console.log("message");
      setshowSpinner(false);
      console.log(e.message);
    }
  };

  return (
    <div>
      <HeaderCreater />
      {redirect ? <Redirect to="creatorProfile" /> : null}
      <div className={styles.merch}>
        {showSpinner ? <Spinner /> : ""}
        <div className={styles.form}>
          <input
            placeholder="title"
            className={styles.field}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            className={styles.field}
            placeholder="desc"
            onChange={(event) => setDesc(event.target.value)}
          />
          <input
            className={styles.field}
            placeholder="price"
            onChange={(event) => setPrice(event.target.value)}
          />
          <input
            className={styles.field2}
            type="file"
            onChange={(event) => setFile(event.target.files[0])}
          />

          <button onClick={onSubmitHandler} className={styles.button}>
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
});

export default Create;
