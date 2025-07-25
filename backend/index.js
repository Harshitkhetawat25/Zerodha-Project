require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.MONGO_URL;
const {HoldingModel} = require("./model/HoldingModel");
mongoose.set('strictQuery', true);



app.get('/addHoldings', async(req, res)=>{
    let tempHoldings = [{
    name: "BHARTIARTL",
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: "+2.99%",
    }];
    tempHoldings.forEach((item)=>{
        let newHolding = new HoldingModel({
            name:item.name,
            qty:item.qty,
            avg:item.avg,
            price:item.price,
            net:item.net,
            day:item.day,
        });

        newHolding.save();
    })
    res.send("Holdings Added");
})

app.listen(8080, () => {
  console.log("Server is running on port 8080");
  mongoose.connect(DB_URL).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
});
