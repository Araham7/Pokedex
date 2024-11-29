import "./Search.css"; // Importing Css.

function Search() {
    return(
        <input className="pokemon-name-input"
        type="text" 
        placeholder="Pokemon name..."
        disabled // We would enable search field in future.
        />
    )
}

export default Search;