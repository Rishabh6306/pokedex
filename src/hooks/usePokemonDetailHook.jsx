import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemon";

function usePokemonDetailHook(id) {
      // State to hold Pokemon data
  let [pokemon, setPokemon] = useState(null);

  const [pokemnListState, SetpokemnListState] = useState({
    pokemnList: '',
    previousUrl: '',
    nextUrl: '',
  });
  
  // URL to fetch Pokemon details
  const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

  // Function to fetch Pokemon details
  async function downloadGivenPokemon() {
    const response = await axios.get(POKEMON_DETAIL_URL + id);
    let pokemon = response.data;
    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      image: pokemon.sprites.front_default,
    });

    const types = response.data.types.map(t => t.type.name);
    return types[0];
  }

  async function downloadPokemonAndRelated(id) {
    const type = await downloadGivenPokemon(id)
    await downloadPokemon( pokemnListState, SetpokemnListState, `https://pokeapi.co/api/v2/type/${type}`)
  }

  // Fetch Pokemon details on component mount
  useEffect(() => {
    downloadPokemonAndRelated(id)
  }, [id]);

  return [pokemon, pokemnListState]
}

export default usePokemonDetailHook;