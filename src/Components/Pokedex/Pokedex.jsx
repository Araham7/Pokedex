import "./Pokedex.css"
import Search from "../Search/Search.jsx";
import PokemonList from "../../PokemonList/PokemonList.jsx";

function Pokedex() {
    return(
        <div className="pokemon-wrapper">

        <Search/>
        <PokemonList/>

        </div>
    )
}

export default Pokedex;