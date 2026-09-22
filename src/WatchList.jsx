import {Link} from 'react-router-dom';

function WatchList({
    watchlist,
    remove
}){

return(
<div className="watchlist-grid">
    {watchlist.map(function(movie){
        return(
            
            <div key={movie.id} className="watchlist-card">
                <Link to={`/movie/${movie.id}`} className="watchlist-link" >
            <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="watchlist-poster" />
            <h2 className='watchlist-title'>{movie.title}</h2>
            </Link>
            <button
            className="delete-btn"
            onClick={function(){
                remove(movie.id)
            }}>Delete</button>
            <br />
            <br />
            </div>
        )
    })}
</div>

)

}


export default WatchList;