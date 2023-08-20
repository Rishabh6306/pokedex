import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetailHook(id) {
      // State to hold Pokemon data
  let [pokemon, setPokemon] = useState(null);
  
  // URL to fetch Pokemon details
  const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

  // Function to fetch Pokemon details
  async function downloadPokemon() {
    const response = await axios.get(POKEMON_DETAIL_URL + id);
    let pokemon = response.data;
    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      image: pokemon.sprites.front_default,
    });
  }

  // Fetch Pokemon details on component mount
  useEffect(() => {
    downloadPokemon(id);
  }, []);

  return [pokemon]
}

export default usePokemonDetailHook;