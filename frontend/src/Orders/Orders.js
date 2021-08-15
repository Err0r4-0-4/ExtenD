import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = React.memo(() => {

  const [merchs, setMerchs] = useState([]);
  
  useEffect(async () => {

    try{
        const data = {
        };
    
        let config = {
          headers: {
            token: localStorage.getItem("token"),
          },
        };
  
      const res = await axios.post(
          "http://localhost:3000/creator/getOrders",
          data,
          config
        );
        console.log(res);
    }catch(e){
        console.log(e)
    }
    
  }, []);

  

 

  return (
    <div>
     ORDERS
    </div>
  );
});

export default Orders;
