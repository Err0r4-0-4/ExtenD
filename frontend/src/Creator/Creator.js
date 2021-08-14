import React, { useState, useEffect } from 'react';

import image from '../Image/doctors.png'
import styles from './Creator.module.css'

const Creators = React.memo(props => {

  return (
      <div>

        <img src={image} className={styles.image}></img>
        <div>{props.name}</div>
        <div>Description</div>
   </div>
  );
});

export default Creators;
