import WatchListItem from "./WatchListItem";
import axios from "axios";
import {useEffect, useState} from  'react';
const WatchList = () => {
  const [watchlists, setWatchlists] = useState([]);

useEffect(()=>{
  axios.get(`${process.env.REACT_APP_BASE_URL}/allWatchLists`)
  .then((res)=>{
    setWatchlists(res.data);
  })
})
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
        {watchlists.map((stock, index)=>{
          return (
          <WatchListItem key={stock.name||index} stock={stock} index={index} />
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;
