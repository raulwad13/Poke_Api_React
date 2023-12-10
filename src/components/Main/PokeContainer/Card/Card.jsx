import React from "react";

const Card = ({pokemon}) => {
  return <>
  <section>
  <p>{pokemon.name}</p>
  <img src={pokemon.sprites.front_default}/>
  </section>
  </>;
};

export default Card;
