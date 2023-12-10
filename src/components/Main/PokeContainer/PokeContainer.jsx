import React, { useState, useEffect} from "react";
import Search from "./Search/Search";
import Pokelist from "./Pokelist/Pokelist";
// import { PokemonContext } from "../../../context";
import axios from "axios";
import "./PokeContainer.css";

const PokeContainer = () => {
  // const {pokeContext} = useContext(pokemonContext);
  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState("");
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {

    const fetchPokemon = async () => {
      const req = await axios({
        method: "get",
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      });

      setData([req.data.results]);
    };
      fetchPokemon();
  }, [pokemon]);

  useEffect(() => {
    const dPokemon = async () => {
      const req = await axios({
        method: "get",
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      });

      setPokeList([...pokeList, req.data]);
    };
    if (pokemon) {
      dPokemon();
    }
  }, [pokemon]);

  const addPokemon = (pokemon) => {
    setPokemon(pokemon);
  };
  const debouncedAddPokemon = (pokemon) => {
    const timerId = setTimeout(() => {
      addPokemon(pokemon);
    }, 1500);

    return () => clearTimeout(timerId);
  };
  return (
    <>
      <h1>WELCOME</h1>
      <div>
        <Search add={debouncedAddPokemon} />
        <Pokelist pokemon={pokeList} />
      </div>
    </>
  );
};

export default PokeContainer;
