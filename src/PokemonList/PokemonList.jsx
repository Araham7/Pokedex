import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Components/Pokemon/Pokemon.jsx";
import "./PokemonList.css";

function PokemonList() {
  // Consolidated state for the Pokemon List :---
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isLoading: true,
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    previousUrl: "",
    nextUrl: "",
  });

  // Function to fetch and process Pokemon data
  const downloadPokemons = async () => {
    try {
      setPokemonListState((prevState) => ({ ...prevState, isLoading: true }));

      const { data } = await axios.get(pokemonListState.pokedexUrl);

      const pokemonResults = data.results;

      const pokemonResultPromises = pokemonResults.map((pokemon) =>
        axios.get(pokemon.url)
      );

      const pokemonData = await axios.all(pokemonResultPromises);

      const processedPokemonList = pokemonData.map((poke) => {
        const { id, name, sprites, types } = poke.data;
        return {
          id,
          name,
          image:
            sprites?.other?.dream_world?.front_default || sprites.front_shiny,
          types: types.map((t) => t.type.name),
        };
      });

      setPokemonListState({
        ...pokemonListState,
        pokemonList: processedPokemonList,
        isLoading: false,
        nextUrl: data.next,
        previousUrl: data.previous,
      });
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    downloadPokemons();
  }, [pokemonListState.pokedexUrl]);

  const handleNavigation = (url) => {
    if (url) {
      setPokemonListState((prevState) => ({ ...prevState, pokedexUrl: url }));
    }
  };

  const { pokemonList, isLoading, previousUrl, nextUrl } = pokemonListState;

  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          pokemonList.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              id={pokemon.id}
            />
          ))
        )}
      </div>

      <div className="control-btn">
        <button
          disabled={!previousUrl}
          className="prev-btn"
          style={{
            backgroundColor: previousUrl ? "#00ffff" : "rgb(70 74 80)",
            cursor: previousUrl ? "pointer" : "not-allowed",
          }}
          onClick={() => handleNavigation(previousUrl)}
        >
          Previous
        </button>

        <button
          disabled={!nextUrl}
          className="next-btn"
          style={{
            backgroundColor: nextUrl ? "#00ffff" : "rgb(70 74 80)",
            cursor: nextUrl ? "pointer" : "not-allowed",
          }}
          onClick={() => handleNavigation(nextUrl)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;


