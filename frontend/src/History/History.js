import React, { useState, useEffect } from "react";
import axios from "axios";

import HistoryCard from "../HistoryCard/HistoryCard";

const History = React.memo(() => {


  const [transactions, setTransactions] = useState([]);

  useEffect( async () => {

    const data = {
       id: localStorage.getItem('id')
      };

      let config = {
        headers: {
            token: localStorage.getItem('token')
        }
    }

    let res = await axios.post("http://localhost:3000/creator/getTransaction",data, config);
    console.log(res.data.transactions);
    setTransactions(res.data.transactions);
    
  }, []);

  let TransactionArray = (
    <div>
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

    {TransactionArray}
    </div>
  );
});

export default History;
