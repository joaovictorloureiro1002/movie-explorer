import {useState, useEffect} from 'react';
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import WatchlistPage from './WatchlistPage';
import { Link } from "react-router-dom";
import MovieDetails from './MovieDetails';


function App(){

 

const [search, setSearch] = useState("");
const [movies, setMovies] = useState([]);
const [watchlist, setWatchlist] = useState(function(){

 let dadosSalvos = localStorage.getItem("watchlist");
 let dadosConvertidos;
 if(dadosSalvos !== null){
   dadosConvertidos = JSON.parse(dadosSalvos);
  return dadosConvertidos;
  }else{
  return [];
 }

});

const [loading, setLoading] = useState(false);
const [error, setError] = useState(""); 



  useEffect(function(){

    localStorage.setItem("watchlist", JSON.stringify(watchlist))

  }, [watchlist])

function pegarSearch(event){
  setSearch(event.target.value);
}

async function buscarFilmes(event){
event.preventDefault();

if(search.trim() === ""){
  return;
}

setLoading(true);
setError("");

try{
const token = import.meta.env.VITE_TMDB_TOKEN;
const url = `https://api.themoviedb.org/3/search/movie?query=${search.trim()}`;
const response = await fetch(url, {
  headers: { 
    Authorization: `Bearer ${token}`
}
});

if(!response.ok){
  throw new Error("Something went wrong")
}

const data = await response.json();

if(data.results.length === 0){
  setError("No movies found")
  
}
setMovies(data.results);
console.log(data);

} catch(erro){
setError(erro.message);
} finally{
setLoading(false);
setSearch("");
}




}


function addWatchlist(id){

  const jaExiste = watchlist.some(function(movie){
    return movie.id === id;
  });

  if(jaExiste){
    return;
  }

let movieSelecionado = movies.find(function(movie){
  return movie.id === id;
})
setWatchlist([...watchlist, movieSelecionado]);
}

function remove(id){
let listaRemovida = watchlist.filter(function(o){
  return o.id !== id
})
setWatchlist(listaRemovida);
}

return(
  <div>
    <div className='navbar'>
      <h1 className='titulo'>Movie Explorer</h1>
<div className="links">
<Link to="/">Home </Link>
<Link to="/watchlist">My Watchlist  {watchlist.length}</Link>
</div>
</div>
<Routes>
  <Route path='/' element={<Home 
  search={search}
  pegarSearch={pegarSearch}
  buscarFilmes={buscarFilmes}
  movies={movies}
  addWatchlist={addWatchlist}
  error={error}
  loading={loading}
  />
  }
   />
  <Route path='/watchlist' element={<WatchlistPage
  watchlist={watchlist}
  remove={remove}
  />} />

  <Route path='/movie/:id' 
  element={<MovieDetails />}
  />

</Routes>

  </div>

)

}



export default App;