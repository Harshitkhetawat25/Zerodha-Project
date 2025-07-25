import { watchlist } from "../data/data"; // Assuming you have a data file for watchlist
import WatchListItem from "./WatchListItem";
const WatchList = () => {
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
        <span className="counts">{watchlist.length} / 50 </span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index)=>{
          console.log(index)
          return (
          <WatchListItem stock={stock} index={index} />
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;
