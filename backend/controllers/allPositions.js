const { PositionModel } = require("../model/PositionModel");    

const positions = async (req, res) => {
  try {
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
};

module.exports = { positions };