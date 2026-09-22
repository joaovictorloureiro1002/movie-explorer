import WatchList from "./WatchList";

function WatchlistPage({
    watchlist,
    remove
}){
  return(
    <div>
      {watchlist.length === 0 ? <p> Your Watchlist is empty</p> : 
      <WatchList 
        remove={remove}
        watchlist={watchlist}
        />}
        
    </div>
  )
}

export default WatchlistPage;