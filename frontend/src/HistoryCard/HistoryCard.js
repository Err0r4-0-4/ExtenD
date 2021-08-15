import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const HistoryCard = React.memo((props) => {
    console.log(props.url)
  return (
   <div>
      <div>{props.name}</div>
      <div>{props.amount}</div>
      <div>{props.date}</div>
      <div>{props.address}</div>
   </div>
  );
});

export default HistoryCard;
