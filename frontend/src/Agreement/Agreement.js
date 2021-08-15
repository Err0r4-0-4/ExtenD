import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HistoryCard = React.memo((props) => {
    console.log(props.url)
  return (
   <div>
      <div>{props.title}</div>
      <div>{props.desc}</div>
      <div>{props.url}</div>
      <div>{props.hash}</div>
   </div>
  );
});

export default HistoryCard;
