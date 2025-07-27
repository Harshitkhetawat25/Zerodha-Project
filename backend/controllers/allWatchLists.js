const { WatchListModel } = require("../model/WatchlistModel");
const watchlists = async(req,res)=>{
    try{
  let allWatchLists = await WatchListModel.find({});
  res.json(allWatchLists);
    }catch(err) {
        res.status(500).json({error: "Failed to fetch watchlists"});
    }

}

module.exports = {watchlists}