import React, { useState } from "react";
import Card from "../Card/Card";

const Pokelist = ({ pokemon }) => {
  return <>{pokemon.length > 0 ? <Card pokemon={pokemon[0]} /> : ""}</>;
};

export default Pokelist;
