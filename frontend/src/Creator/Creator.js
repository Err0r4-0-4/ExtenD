import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import image from '../Image/doctors.png'
import styles from './Creator.module.css'

const Creators = React.memo(props => {

  return (
      <div>

        <img src={image} className={styles.image}></img>
        <div>{props.name}</div>
        <div>Description</div>
        <Link to={'/' + props.id}>View creator</Link>
   </div>
  );
});

export default Creators;
