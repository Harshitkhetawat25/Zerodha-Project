
const { HoldingModel } = require("../model/HoldingModel");

const holdings = async (req, res) => {
try {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);

}catch (error) {
  res.status(500).json({ error: "Failed to fetch holdings" });

}
  
} 


module.exports = { holdings };