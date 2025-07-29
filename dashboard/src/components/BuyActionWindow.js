import { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState(0);

  const handleBuyClick = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      })
      .then((res) => {
        console.log("Order placed successfully:", res.data);
        generalContext.closeBuyWindow();
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        generalContext.closeBuyWindow();
      });
  };

  const generalContext = useContext(GeneralContext);
  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            type="button"
          >
            Buy
          </button>
          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
