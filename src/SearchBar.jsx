function SearchBar({value, pegarSearch, buscarFilmes}){

return(
<div>
    <form onSubmit={buscarFilmes}
    className="formulario">
    <input type="text" 
    onChange={pegarSearch}
    value={value}
    className="input"
    placeholder="Search for a movie"
    />
    <button className="botao">Search</button>
    
    </form>
</div>

)

}


export default SearchBar;