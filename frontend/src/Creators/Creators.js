import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderUser from "../Ui/HeaderUser";
import Creator from "../Creator/Creator";
import styles from "./Creators.module.css";
import EachPage from "../Ui/EachPage";
const Creators = React.memo(() => {
  const [creators, setCreators] = useState([]);
  console.log("Log");
  useEffect(async () => {
    axios
      .get("http://localhost:3000/creator/creators")
      .then((res) => {
        setCreators(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  useEffect(async () => {
    console.log(creators);
  }, [creators]);

  let creatorsArray = (
    <div className={styles.flex}>
      {creators.creators?.map((creator) => (
        <Creator key={creator._id} id={creator._id} name={creator.name} />
      ))}
    </div>
  );

  return (
    <div>
      <HeaderUser />
      <EachPage className={styles.creator}>
        <div className={styles.banner}>Creators and Curators</div>
        {creators[0]}
        <div>{creatorsArray}</div>
      </EachPage>
    </div>
  );
});

export default Creators;
