require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
const DB_URL = process.env.MONGO_URL;

// Log environment variables for debugging (remove in production)
console.log("Environment check:");
console.log("MONGO_URL exists:", !!process.env.MONGO_URL);
console.log("TOKEN_KEY exists:", !!process.env.TOKEN_KEY);
const { OrderModel } = require("./model/OrderModel");
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
    origin: "http://localhost:3000", // Adjust this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Add express built-in JSON parser with error handling
app.use(express.json({ 
  limit: '10mb',
  verify: (req, res, buf, encoding) => {
    try {
      JSON.parse(buf);
    } catch (e) {
      console.error('Invalid JSON received:', buf.toString());
      res.status(400).json({ error: 'Invalid JSON format' });
      return;
    }
  }
}));
app.use(express.urlencoded({ extended: true }));

// Mount routes with specific prefixes
app.use("/api", allHoldings);
app.use("/api", allPositions);
app.use("/api", allWatchLists);
app.use("/api", allOrders);
app.use("/", authRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

app.post("/api/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Added Successfully");
});

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
