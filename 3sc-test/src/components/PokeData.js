import React, { useState, useEffect } from "react";
import axios from "axios";
import SinglePokemon from "./SinglePokemon";

export default function PokeAPI() {
    const [pokeApi, setPokeApi] = useState({});
    const [allPokemonsPage, setAllPokemonsPage] = useState([]);

  useEffect(() => {
    async function getData() {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        setPokeApi(res.data);
        setAllPokemonsPage(res.data.results);
    }

    getData();
  }, [pokeApi.count]);

  const renderAllPokemons = (allPokemonsPage) => {
    return (
        allPokemonsPage.map((pokemon) => {
            return <SinglePokemon key={pokemon.name} pokemon={pokemon} />;
      })
    );
  }

  return (
    <div>
      <h1>There are {pokeApi.count} Pokemons to catch</h1>
      <div>
         {renderAllPokemons(allPokemonsPage)}
      </div>
    </div>
  );
}