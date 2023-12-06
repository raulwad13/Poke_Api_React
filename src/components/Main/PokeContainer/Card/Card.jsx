import React from "react";

const Card = (pokemon) => {
  return (
    
    <div>
      {pokemon.name?
        <>
    <p>{pokemon.name}</p>
    </>:""}
  </div>
  );
};

export default Card;
