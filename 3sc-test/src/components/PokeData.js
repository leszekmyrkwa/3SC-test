import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokeData.scss";
import Pagination from "./Pagination";
import SinglePokemon from "./SinglePokemon";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "./Navbar";
import Filter from "./Filter";

export default function PokeAPI() {
    const [allPokemonsPage, setAllPokemonsPage] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    async function getData() {
        let res = await axios.get(currentPage);
        setAllPokemonsPage(res.data.results);
        setCurrentPage(res.data);
    }

    getData();
  }, [currentPage.next]);
 
    function fetchPrevPage() {
      if (currentPage.previous)
        setCurrentPage(currentPage.previous);
        if (pageCount > 1) {
          setPageCount(pageCount - 1);
        }
    }

    function fetchNextPage() {
      if (currentPage.next)
      setPageCount(pageCount + 1)
      setCurrentPage(currentPage.next);
    }

    function backToHome() {
      setPageCount(1)
      setCurrentPage('https://pokeapi.co/api/v2/pokemon');
    }

    function filterByGeneration() {

    }

  const renderAllPokemons = (allPokemonsPage) => {
    return (
        allPokemonsPage.map((pokemon) => {
            return (
              <Grid2 className='pokeDataGrid-inner' key={pokemon.name} xs={4} s={4} md={3}>
                <SinglePokemon pokemon={pokemon} />
              </Grid2>
            );
      })
    );
  }

  return (
    <div className="pokeData">
      <Navbar backToHome={backToHome} />
      <div className="pokeData-heading">
        <h1>There are <span>{currentPage.count}</span> Pokemons to catch!</h1>
        <Filter filterByGeneration={ filterByGeneration }/>
      </div>
      <Grid2 className='pokeDataGrid' container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         {renderAllPokemons(allPokemonsPage)}
      </Grid2>
       <Pagination
          currentPage={pageCount}
          pageCount={Math.round(currentPage.count / 20)}
          onPrev={fetchPrevPage}
          onNext={fetchNextPage}
        />
    </div>
  );
}