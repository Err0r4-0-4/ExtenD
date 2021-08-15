import React, { useState, useEffect } from "react";


const Card = React.memo((props) => {
 
    return(
    <div>
      <div>{props.title}</div>
      <div>{props.desc}</div>
      <div>{props.price}</div>
      <button>Buy now</button>
      {/* <div>{props.title}</div> */}
    </div>
    )
  
});

export default Card;
