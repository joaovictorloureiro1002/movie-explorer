import {Link} from 'react-router-dom';

function MovieCard({
    poster,
    title,
    releaseDate,
    voteAvg,
    addWatchlist,
    id
}){

return(
    
    <div className="movie-card">
        <Link to={`/movie/${id}`}>
        <img 
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        className="movie-poster"
        />
        <div className="movie-data">
        <p className="movie-title">{title}</p>
        <p className="movie-release">{releaseDate}</p>
        <p className="average-vote">{voteAvg.toFixed(2)}</p>
        </div>
        </Link>
        <button onClick={function(){
            addWatchlist(id)
            
        }}
        className="btn-add">
            Add to Watchlist</button>
        
    </div>
)

}


export default MovieCard;