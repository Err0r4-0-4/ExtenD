import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Orders.module.css";
import Order from "../Order/Order";
import HeaderUser from "../Ui/HeaderUser";
import EachPage from "../Ui/EachPage";
import Footer from "../Ui/Footer";

const Orders = React.memo(() => {
  const [merchs, setMerchs] = useState([]);

  useEffect(async () => {
    try {
      const data = {};

      let config = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };

      const res = await axios.post(
        "https://backend-jatingupta0214-gmailcom.vercel.app/creator/getOrders",
        data,
        config
      );
      setMerchs(res.data.orders);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }, []);

  let ordersArray = (
    <div className={styles.flex}>
      {merchs.map((merch) => (
        <Order
          title={merch.title}
          desc={merch.description}
          price={merch.price}
        />
      ))}
    </div>
  );

  return (
    <div>
      <HeaderUser />
      <EachPage> {ordersArray}</EachPage>
      <Footer></Footer>
    </div>
  );
});

export default Orders;
