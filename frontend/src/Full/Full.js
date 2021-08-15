<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import web3 from "../ethereum/web3";
import Spinner from "../Ui/Spinner";
import styles from "./Full.module.css";
import image from "../Image/doctors.png";
import Creator from "../ethereum/Creator";

const Full = React.memo((props) => {
  const [creator, setCreator] = useState({});
  const [amount, setAmount] = useState({});
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

    const res = await axios.post(
      "http://localhost:3000/creator/creatorById",
      data,
      config
    );
    setCreator(res.data.creator);

    const ctr = Creator(res.data.creator.contractAddress);

    const b = await ctr.methods.bal().call();
    console.log(b);
  }, []);

  const tipHandler = async () => {
    const ctr = Creator(creator.contractAddress);
    try {
      const accounts = await web3.eth.getAccounts();
      setshowSpinner(true);
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
    try {
      const res = await axios.post(
        "http://localhost:3000/creator/addTransaction",
        data,
        config
      );
      console.log(res);
      setshowSpinner(false);
    } catch (error) {
      setshowSpinner(false);
      console.log(error);
    }
  };
=======
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import web3 from '../ethereum/web3'

import styles from './Full.module.css'
import image from '../Image/doctors.png'
import Creator from '../ethereum/Creator'
import Card from '../itemCard/itemCard'

const Full = React.memo(props => {

    const [creator, setCreator] = useState({});
    const [amount, setAmount] = useState({});
    const [merchs, setMerchs] = useState([]);

    useEffect( async () => {

        const data = {
           id: props.match.params.id
          };

          let config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }

       
        const meerch = await axios.post("http://localhost:3000/creator/getMerchandise", data, config)
        console.log(meerch.data.merchandises)
        setMerchs(meerch.data.merchandises)
        
        const res = await axios.post("http://localhost:3000/creator/creatorById", data, config)
        setCreator(res.data.creator)
       
            const ctr = Creator(res.data.creator.contractAddress) 

            const b = await ctr.methods.bal().call();
            console.log(b);
        
      }, []);

      const tipHandler = async() => {
            const ctr = Creator(creator.contractAddress)

            const accounts = await web3.eth.getAccounts();
            await ctr.methods.tip().send({
              from: accounts[0],
              value: web3.utils.toWei(amount),
            });

            const data = {
                name: creator.name,
                amount: amount,
                address: creator.contractAddress
               };
     
               let config = {
                 headers: {
                     token: localStorage.getItem('token')
                 }
             }
     
             const res = await axios.post("http://localhost:3000/creator/addTransaction", data, config)
             console.log(res);
      }

      let items = (
        <div>
          {merchs?.map((merch) => (
           <Card
           title={merch.title}
           desc={merch.description}
           price={merch.price}
           image={merch.image}/>
          ))}
        </div>
      );

>>>>>>> c431532f93f18f4fd3962812f62497891f7cbdbc

  return (
    <div>
      {showSpinner ? <Spinner /> : ""}
      <img src={image} className={styles.image}></img>
      <div>Name</div>
      <div>{creator.name}</div>

<<<<<<< HEAD
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

      <div>Account address</div>
      <div>{creator.contractAddress}</div>

      <input
        placeholder="how much you want to tip"
        onChange={(event) => setAmount(event.target.value)}
      />

      <button onClick={tipHandler}>Tip</button>
    </div>
=======
       <div>description</div>
       <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>

       <div>Email</div>
       <div>{creator.email}</div>

       <div>Account address</div>
       <div>{creator.contractAddress}</div>

        <input 
        placeholder="how much you want to tip" 
        onChange={event => setAmount(event.target.value)} />
       
       <button onClick={tipHandler}>Tip</button>

       {items}
   </div>
>>>>>>> c431532f93f18f4fd3962812f62497891f7cbdbc
  );
});

export default Full;
