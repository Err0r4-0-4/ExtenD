import React, { useState, useEffect } from "react";
// import styles from './itemCard.module.css'
import web3 from "../ethereum/web3";

const Order = React.memo((props) => {
 
    return(
    <div>
        <div>{props.title}</div>
        <div>{props.desc}</div>
        <div>{props.price}</div>
    </div>
    )
  
});

export default Order;
