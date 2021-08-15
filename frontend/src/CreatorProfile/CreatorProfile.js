import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./CreatorProfile.module.css";
import image from "../Image/creator.png";

const Creators = React.memo(() => {
  const [creator, setCreator] = useState([]);

  useEffect(async () => {
    const data = {
      id: localStorage.getItem("id"),
    };

    let config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    let res = await axios.post(
      "http://localhost:3000/creator/creatorById",
      data,
      config
    );
    // console.log(res.data);
    setCreator(res.data.creator);

    res = await axios.post(
      "http://localhost:3000/creator/getContracts",
      data,
      config
    );
    console.log(res);
    console.log("res");

    // const ctr = Creator(res.data.creator.contractAddress)

    // const b = await ctr.methods.bal().call();
    // console.log(b);
  }, []);

  const onUploadHandler = (event) => {
    // this.setState({loading:true})

    const formData = new FormData();

    formData.append("file", event.target.files[0]);

    formData.append("title", "aaaaaaaaaaa");

    formData.append("description", "bbbbbbbb");

    let config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    axios
      .post("http://localhost:3000/creator/uploadContract", formData, config)
      .then((response) => {
        // this.setState({loading:false})
        console.log(response);
      })
      .catch((e) => {
        // this.setState({loading:false})
        console.log(e);
      });
  };

  return (
    <div>
<<<<<<< HEAD
      <img src={image} className={styles.image}></img>

      <div>Name</div>
      <div>{creator.name}</div>

      <div>description</div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>

      <div>Email</div>
      <div>{creator.email}</div>
      <div>ETh recieved</div>
      <div>1</div>

      <button>Transfer</button>
      <div>Account address</div>
      <div>{creator.contractAddress}</div>

      <input type="file" onChange={onUploadHandler} />
=======

    <img src={image} className={styles.image}></img>

     <div>Name</div>
       <div>{creator.name}</div>

       <div>description</div>
       <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>

       <div>Email</div>
       <div>{creator.email}</div>

       <div>ETh recieved</div>
       <div>1</div>

       <button>Transfer</button>

       <div>Account address</div>
       <div>{creator.contractAddress}</div>

       <input type="file" onChange={onUploadHandler}/>
>>>>>>> 9bbf8f0db10a0d5aeea15c15e385d1c65b88c6bf
    </div>
  );
});

export default Creators;
