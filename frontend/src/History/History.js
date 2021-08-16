import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./History.module.css";
import HistoryCard from "../HistoryCard/HistoryCard";
import EachPage from "../Ui/EachPage";
import HeaderUser from "../Ui/HeaderUser";
import Spinner from "../Ui/Spinner";
import Footer from "../Ui/Footer";
const History = React.memo(() => {
  const [transactions, setTransactions] = useState([]);
  const [showSpinner, setshowSpinner] = useState(false);

  useEffect(async () => {
    const data = {
      id: localStorage.getItem("id"),
    };

    let config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    setshowSpinner(true);
    let res = await axios.post(
      "http://localhost:3000/creator/getTransaction",
      data,
      config
    );
    setshowSpinner(false);
    console.log(res.data.transactions);
    setTransactions(res.data.transactions);
  }, []);

  let TransactionArray = (
    <div className={styles.flex}>
      {transactions.map((transaction) => (
        <HistoryCard
          key={transaction._id}
          name={transaction.name}
          amount={transaction.amount}
          date={transaction.date}
          address={transaction.address}
          // id={patient._id}
          // dose={patient.dose}
          // name={patient.name}
          // gender={patient.gender}
          // special={patient.special}
          // otp={patient.otp}
          // vaccinated={patient.vaccinated}
        />
      ))}
    </div>
  );

  return (
    <div>
      {showSpinner ? <Spinner /> : ""}
      <HeaderUser />

      <EachPage>
        <div className={styles.banner}>Previous Transactions</div>
        {TransactionArray}
      </EachPage>
      <Footer />
    </div>
  );
});

export default History;
