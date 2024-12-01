/*
Isme UI ka busness logic likha jayega.
*/

import axios from "axios"; // Importing Axios.
import { useEffect, useState } from "react"; // Iporting "useState-&-useEffect-hooks".


function usePokemonList() {

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

  return([
    pokemonListState ,
    setPokemonListState
  ]);

}

export default usePokemonList;