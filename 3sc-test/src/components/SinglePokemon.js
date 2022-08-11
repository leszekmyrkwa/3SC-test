import React, { useState, useEffect } from "react";
import axios from "axios";
import './SinglePokemon.scss';
import TypePill from "./PokemonTypePill";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
  }, [props.pokemon.url]);

  // function saveToFavourite() {

  // }
 
  return (
    <Card className="pokemonCard" sx={{ maxWidth: 275 }}>
      <StarBorderIcon className="pokemonCard-favourite"/>
      <CardMedia
          component="img"
          height="194"
          image={pokeImg}
          alt={pokemonData.name}
      />
      <CardContent>
          <Typography gutterBottom variant="h4" component="h4">
              {pokemonData.name}
          </Typography>
          <div className="pokemon-card__types">
            {pokeTypes.map(type => (
              <TypePill compact pokemonType={type.type.name} key={type.type.name} />
            ))}
          </div>
      </CardContent>
    </Card>
  );
}