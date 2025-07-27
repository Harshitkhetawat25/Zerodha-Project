const { OrderModel } = require("../model/OrderModel");
const orders = async (req, res) => {
  try {
    let allOrders = await OrderModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

module.exports = { orders };
