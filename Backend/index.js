const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// var admin = require("firebase-admin");
const fileuploader = require("express-fileupload");
//const user =  require("./routes/user");
const creatorRoute = require("./routes/creator");
const userRoute = require("./routes/user");

dotenv.config();
const mongoDbUrl = process.env.MONGODBURL;
const port = process.env.PORT || 9000;
const app = express();

// app.get('/',(req,res,next)=>{
//     res.send("Hello")
// })

// var firebaseConfig = {
//   apiKey: "AIzaSyBoh79oHjd51XNoQ9qZcY22xHEkulA75eo",
//   authDomain: "test-817a8.firebaseapp.com",
//   databaseURL: "https://test-817a8-default-rtdb.firebaseio.com",
//   projectId: "test-817a8",
//   storageBucket: "test-817a8.appspot.com",
//   messagingSenderId: "92579505970",
//   appId: "1:92579505970:web:90bd526ee8ac9d2cba192b",
//   measurementId: "G-GPZ1PPRHMF",
// };
// admin.initializeApp(firebaseConfig);
// // var serviceAccount = require("./config.json");
// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: "https://test-817a8.firebaseio.com",
// // });

// app.use(fileuploader());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/user", userRoute);
app.use("/creator", creatorRoute);
// app.use("/van",vanRoute)

mongoose
  .connect(mongoDbUrl)
  .then((result) => {
    app.listen(port, () => {
      console.log(`App is running on Port ${port} and connected to Database`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
