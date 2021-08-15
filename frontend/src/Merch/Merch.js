import React, { useState, useEffect } from "react";
import axios from "axios";

const Merch = React.memo(() => {

    const [title, setTitle] = useState("");
   
   
    useEffect(async () => {

        let config = {
            headers: {
              token: localStorage.getItem("token"),
            },
          };
    
        // try{
        //     const res = await axios.post("http://localhost:3000/creator/getMerchandise", data, config)
        //     console.log(res)
        //  }catch(e){
        //      console.log("message")
        //      console.log(e.message)
        //  }

      }, []);
  
  return (
    <div>
        <div>MECHANT</div>
    </div>
  );
});

export default Merch;
