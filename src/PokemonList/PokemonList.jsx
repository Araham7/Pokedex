import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Components/Pokemon/Pokemon.jsx";
import "./PokemonList.css";
import usePokemonList from "../hooks/usePokemonList.js";

function PokemonList() {

  const [ pokemonListState , setPokemonListState ] = usePokemonList();

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


