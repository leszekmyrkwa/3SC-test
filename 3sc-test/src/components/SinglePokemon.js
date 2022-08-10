import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SinglePokemon(props) {

  const [pokemonData, setPokemonData] = useState({});
  const [pokeImg, setPokeImg] = useState("");
  const [pokeTypes, setPokeTypes] = useState([]);

  useEffect(() => {
    async function getData() {
          let res = await axios.get(props.pokemon.url);
          setPokemonData(res.data);
          setPokeImg(res.data.sprites.front_default);
          setPokeTypes(res.data.types);
      }

    getData();
  }, [pokemonData.name]);

  console.log(pokeTypes)
 
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardMedia
          component="img"
          height="194"
          image={pokeImg}
          alt={pokemonData.name}
      />
      <CardContent>
          <Typography gutterBottom variant="h2" component="div">
              {pokemonData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {pokeTypes[0] ? pokeTypes[0].type.name : ''}
              {pokeTypes[1] ? pokeTypes[1].type.name : ''}
          </Typography>
      </CardContent>
    </Card>
  );
}