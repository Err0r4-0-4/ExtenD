import React, { useState, useEffect } from "react";
import axios from "axios";

import Order from "../Order/Order";

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
          "http://localhost:3000/creator/getOrders",data,config);
          setMerchs(res.data.orders)
        console.log(res);
    }catch(e){
        console.log(e)
    }
    
  }, []);

  let ordersArray = (
    <div>
      {merchs.map((merch) => (
        <Order
        title={merch.title}
        desc={merch.description}
        price={merch.price}/>
      ))}
    </div>
  );

 

  return (
    <div>
     {ordersArray}
    </div>
  );
});

export default Orders;
