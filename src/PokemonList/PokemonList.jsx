import { useEffect, useState } from "react"; // Importing "useEffect" hook.
import axios from "axios";
import Pokemon from "../Components/Pokemon/Pokemon.jsx";
import "./PokemonList.css"

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon"

    // function to download 20 pokemons :---
    async function downloadPokemons() {
        try {
            const response = await axios.get(POKEDEX_URL); // Ye 20 pokemons ke list ko download karega.
            const pokemonResults = response.data.results; // "result" se array of pokemons ko nikal rahen hai.
            console.log(response.data);
            

            // iterating over array of pokemons , and using their url, to create an array of promises
            // that will Download 20 pokemons.
            const pokemonResultPromises = pokemonResults.map((pokemon) =>
                axios.get(pokemon.url)
            );

            // passing that promise array to "axios.all(ye parally sare chijon ko download karke ladengi)".
            const pokemonData = await axios.all(pokemonResultPromises); // it will gives array of 20 pokemon data.
            // console.log(pokemonData);

            // now iterate on the data of each pokemon , and extract id , name , image , types
            const pokeListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                

                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image:
                        pokemon.sprites?.other?.dream_world?.front_default ||
                        pokemon.sprites.front_shiny,
                    types: pokemon.types.map((type) => type.type.name),
                };
            });

            setPokemonList(pokeListResult);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        downloadPokemons(); // 
    }, []);

    return (
        <div className="pokemon-list-wrapper">
        {/* <h1>Pokemon List</h1> */}
        <div className="pokemon-wrapper">

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                pokemonList.map((p) => (
                    <Pokemon key={p.id} name={p.name} image={p.image}/>
                ))
            )}
        </div>

        <div className="control-btn">
            <button className="prev-btn">Previous</button>
            <button className="next-btn">Next</button>
        </div>

        </div>
    );
}

export default PokemonList;
