import React, { useState, useEffect } from "react";
import axios from "axios";

import HistoryCard from "../HistoryCard/HistoryCard";

const History = React.memo(() => {


  const [agreements, setAggrements] = useState([]);

  useEffect( async () => {

    const data = {
       id: localStorage.getItem('id')
      };

      let config = {
        headers: {
            token: localStorage.getItem('token')
        }
    }

    let res = await axios.post("http://localhost:3000/creator/getContracts",data, config);
    console.log(res.data.contracts);
    setAggrements(res.data.contracts);
    
  }, []);

  let agreementsArray = (
    <div>
      {agreements?.map((agreement) => (
       <HistoryCard 
       title={agreement.title}
       desc={agreement.description}
       url={agreement.fileUrl}
       hash={agreement.hash}/>
        
      ))}
    </div>
  );

  
  return (
    <div>

    {agreementsArray}
    </div>
  );
});

export default History;
