const express = require("express");
const router = express.Router();
const { orders } = require("../controllers/allOrders");

router.get('/allOrders', orders)

module.exports = router;