import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import image from '../Image/doctors.png'
import styles from './Creator.module.css'

const Creators = React.memo(props => {

  return (
      <div>

        <img src={image} className={styles.image}></img>
        <div>{props.name}</div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        <div>Description</div>
        <Link to={'/' + props.id}>View creator</Link>
   </div>
  );
});

export default Creators;
