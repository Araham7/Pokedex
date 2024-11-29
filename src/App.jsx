import "./App.css";

import Search from "./Components/Search/Search";
import Pokedex from "./Components/Pokedex/Pokedex.jsx";
import PokemonList from "./PokemonList/PokemonList.jsx";

function App() {

  return (
    <div className='pokedex-container'>

      <Pokedex/>
      <Search/>

      <PokemonList/>

    </div>
  )
}

export default App


