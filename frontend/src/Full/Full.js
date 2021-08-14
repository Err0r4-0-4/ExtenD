import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import styles from './Full.module.css'

const Full = React.memo(props => {

    useEffect( async () => {

        // axios
        //   .get('http://localhost:3000/creator/creators')
        //   .then((res) => {
        //     setCreators(res.data)
        //   })
        //   .then((err) => {
        //     console.log(err);
        //   });

        console.log(props.match.params.id)
        
      }, []);

  return (
      <div>

       <img></img>
       <div>Full</div>
   </div>
  );
});

export default Full;
