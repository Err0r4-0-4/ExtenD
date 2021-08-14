import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Creator from '../Creator/Creator'

const Creators = React.memo(props => {

    const [creators, setCreators] = useState([]);

  useEffect( async () => {

    axios
      .get('http://localhost:3000/creator/creators')
      .then((res) => {
        setCreators(res.data)
      })
      .then((err) => {
        console.log(err);
      });
    
  }, []);

  useEffect( async () => {

    console.log(creators);
    
  }, [creators]);

  let creatorsArray = (
    <div>
       {creators.creators?.map((creator) => (
       <Creator
       key={creator._id}
       id={creator._id}
       name={creator.name}/>
       ))}
    </div>
)

  return (
      <div>

        <div>{creators[0]}</div>
        {creatorsArray}

   </div>
  );
});

export default Creators;
