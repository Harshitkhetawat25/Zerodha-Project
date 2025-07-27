const {model} = require('mongoose');
const {WatchListSchema} = require('../schemas/WatchListSchema');

const WatchListModel = model('watchlist',WatchListSchema  );

module.exports = {WatchListModel};