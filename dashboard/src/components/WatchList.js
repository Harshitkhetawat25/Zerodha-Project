import WatchListItem from "./WatchListItem";
import axios from "axios";
import { useEffect, useState } from "react";
const WatchList = () => {
  const [watchlists, setWatchlists] = useState([]);

  useEffect(() => {
    console.log(
      "WatchList component mounted, making API call to:",
      `${process.env.REACT_APP_BASE_URL}/allWatchLists`
    );
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/allWatchLists`)
      .then((res) => {
        console.log("WatchList API response:", res.data);
        setWatchlists(res.data);
      })
      .catch((error) => {
        console.error("Error fetching watchlists:", error);
        console.error("Error details:", error.response);
      });
  }, []);

  console.log("Current watchlists state:", watchlists);
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlists.length} / 50 </span>
      </div>

      <ul className="list">
        {watchlists.map((stock, index) => {
          return (
            <WatchListItem
              key={stock.name || index}
              stock={stock}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;
