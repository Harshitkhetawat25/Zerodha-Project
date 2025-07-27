const {positions} = require("../controllers/allPositions");
const express = require("express");
const router = express.Router();

router.get("/allPositions", positions);

module.exports = router;