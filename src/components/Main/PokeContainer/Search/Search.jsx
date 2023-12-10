import React, { useState, useEffect } from "react";

const Search = ({ add }) => {
  const [inputValue, setPokemon] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(inputValue);
    setPokemon("");
  };

 
  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Añadir Pokemon</button>
      </form>
    </div>
    
    </>
  );
};

export default Search;
