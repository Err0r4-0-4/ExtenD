import React, { useState, useEffect } from "react";
import styles from './itemCard.module.css'

const Card = React.memo((props) => {

    console.log(props.image)
 
    return(
    <div>

      <img src={`data:image/jpeg;base64,${props.image}`} className={styles.img}/>
        
      <div>{props.title}</div>
      <div>{props.desc}</div>
      <div>{props.price}</div>
      <button>Buy now</button>
      {/* <div>{props.title}</div> */}
    </div>
    )
  
});

export default Card;
