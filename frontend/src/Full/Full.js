import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

import styles from './Full.module.css'

const Full = React.memo(props => {

    useEffect( async () => {

        const data = {
           id: props.match.params.id
          };
      
          axios
            .post("http://localhost:3000/creator/creatorById", data)
            .then((res) => {
              console.log(res);
              // this.setState({loading: false})
              // window.location.reload(false);
            })
            .then((err) => {
              console.log(err);
              // this.setState({loading: false})
              // window.location.reload(false);
            });

        console.log(props.match.params.id)
        
      }, []);

  return (
      <div>

       <img></img>
   </div>
  );
});

export default Full;
