import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails(){

const [filmeAtual, setFilmeAtual] = useState();
const [loading, setLoading] = useState(true);
const [erro, setError] = useState("");

const {id} = useParams();
const url = `https://api.themoviedb.org/3/movie/${id}`;

const token = import.meta.env.VITE_TMDB_TOKEN;

async function buscarDetalhes(){
    setError("");
    setLoading(true);
try{
const response = await fetch(url, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

if(!response.ok){
    throw new Error("Invalid request");
    }

const data = await response.json();
setFilmeAtual(data);
}catch(error){
    setError(error.message);
}
finally{
    setLoading(false);
}
} 

useEffect(function(){
  buscarDetalhes();
}, [id]);


return(
    <div>
        {loading ? <p>Loading...</p> : erro ? <p>{erro}</p> : 

        <div className="movie-details">
            <img 
            src={`https://image.tmdb.org/t/p/w500${filmeAtual.poster_path}`} 
            className="details-poster"
            />
            <div className="details-itens">
         <h1>{filmeAtual.title}</h1> 
         <p>Release Date: {filmeAtual.release_date}</p>
         <h3>Rating: {filmeAtual.vote_average.toFixed(2)}</h3>
         <p>{filmeAtual.overview}</p>
         </div>
         
         </div>
         }
    </div>
)

}


export default MovieDetails;
