import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    console.log(
      "Orders component mounted, making API call to:",
      `${process.env.REACT_APP_BASE_URL}/allOrders`
    );
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/allOrders`)
      .then((res) => {
        console.log("Orders API response:", res.data);
        setOrders(res.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        console.error("Error details:", error.response);
      });
  }, []);

  console.log("Current orders state:", orders);

  if (orders.length > 0) {
    return (
      <div className="orders">
        <div className="orders-header">
          <h2>Your Orders</h2>
          <span className="orders-count">{orders.length} orders</span>
        </div>
        <div className="orders-list">
          {orders.map((order, index) => (
            <div
              key={index}
              className={`order-card order-${order.mode.toLowerCase()}`}
            >
              <div className="order-main-row">
                <span className="order-stock">{order.name}</span>
                <span
                  className={`order-mode order-mode-${order.mode.toLowerCase()}`}
                >
                  {order.mode}
                </span>
              </div>
              <div className="order-info-row">
                <span className="order-qty">
                  Qty: <b>{order.qty}</b>
                </span>
                <span className="order-price">
                  Price: <b>₹{order.price}</b>
                </span>
              </div>
              {/* Add more order details here if needed */}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }
};

export default Orders;
