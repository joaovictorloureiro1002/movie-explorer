import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";



function Home({
    search,
    pegarSearch,
    buscarFilmes,
    movies,
    addWatchlist,
    error,
    loading
}){
    return(
        <div>
            <SearchBar 
            value={search}
            pegarSearch={pegarSearch}
            buscarFilmes={buscarFilmes}
            />
    {loading ? 
    <p>Loading...</p> : 
    error ?<p>{error}</p> : 
        <div className="movie-grid">
  {movies.map(function(movie){
   return(
    <MovieCard 
    key={movie.id}
    poster={movie.poster_path}
    title={movie.title}
    releaseDate={movie.release_date}
    voteAvg={movie.vote_average}
    addWatchlist={addWatchlist}
    id={movie.id}
    />
  )
  })}
    

    
  </div>}


        </div>
    )
}

export default Home;