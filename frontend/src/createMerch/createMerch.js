import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Ui/Spinner";

const Create = React.memo(() => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState({});
  const [showSpinner, setshowSpinner] = useState(false);
  const onSubmitHandler = async () => {
    const formData = new FormData();

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

    try {
      console.log("strated");
      setshowSpinner(true);
      const res = await axios.post(
        "http://localhost:3000/creator/createMerchandise",
        formData,
        config
      );
      setshowSpinner(false);
      console.log(res);
    } catch (e) {
      console.log("message");
      setshowSpinner(false);
      console.log(e.message);
    }
  };

  return (
    <div>
      {showSpinner ? <Spinner /> : ""}
      <input
        placeholder="title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        placeholder="desc"
        onChange={(event) => setDesc(event.target.value)}
      />
      <input
        placeholder="price"
        onChange={(event) => setPrice(event.target.value)}
      />
      <input type="file" onChange={(event) => setFile(event.target.files[0])} />

      <button onClick={onSubmitHandler}>CREATE</button>
    </div>
  );
});

export default Create;
