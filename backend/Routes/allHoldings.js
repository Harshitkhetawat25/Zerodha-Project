const express = require("express");
const router = express.Router();

const { holdings } = require("../Controllers/allHoldings");
router.get("/allHoldings", holdings);

module.exports = router;