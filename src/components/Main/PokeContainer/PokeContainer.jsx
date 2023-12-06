import React, { useState } from "react";
import Search from "./Search/Search";
import Pokelist from "./Pokelist/Pokelist";



const PokeContainer = () => {
  const [data, setData] = useState([]);

  const addPokemon = (pokemon) => {

    setData(pokemon)
  }

  return (
    <>
    <h1>WELCOME</h1>
    <div>
      <Search add={addPokemon}/>
      <Pokelist pokemon={data}/>
    </div>
    </>
)};

export default PokeContainer;
