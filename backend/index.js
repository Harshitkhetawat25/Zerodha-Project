require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
const DB_URL = process.env.MONGO_URL;
const allHoldings = require("./Routes/allHoldings");
const authRoutes = require("./Routes/AuthRoute");
const allPositions = require("./Routes/allPositions");
const allWatchLists = require("./Routes/allWatchLists");
const allOrders = require("./Routes/allOrders");
mongoose.set("strictQuery", true);
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",// Adjust this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
  })
);

app.use(bodyParser.json());
app.use("/", allHoldings); 
app.use('/', allPositions);
app.use("/", allWatchLists);
app.use("/", allOrders);


app.listen(8080, () => {
  console.log("Server is running on port 8080");
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
});




// app.post('/newOrder',  async (req,res)=>{
//   let newOrder =  new OrderModel ({
//     name:req.body.name,
//     qty:req.body.qty,
//     price:req.body.price,
//     mode: req.body.mode,
//   });
//   newOrder.save();
//   res.send("Order Added Successfully");
// })