const {watchlists} = require("../controllers/allWatchLists");
const express = require("express");
const router = express.Router();

router.get('/allWatchlists', watchlists)

module.exports = router;