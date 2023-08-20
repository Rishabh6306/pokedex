import axios from "axios";
import { useEffect, useState } from "react";

function usePokemanListHook() {
  const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon';

  const [pokemnListState, SetpokemnListState] = useState({
    pokemnList: [],
    POKEDEX_URL: DEFAULT_URL,
    previousUrl: null,
    nextUrl: null,
  });

  async function downloadPokemon(url) {
    const response = await axios.get(url);
    const pokemonsResult = response.data.results;

    SetpokemnListState((prevState) => ({
      ...prevState,
      nextUrl: response.data.next,
      previousUrl: response.data.previous,
    }));

    const pokemonPromises = pokemonsResult.map((pokemon) => axios.get(pokemon.url));
    const pokemonsResultData = await axios.all(pokemonPromises);
    const pokemonFinalResult = pokemonsResultData.map((pokemonData) => {
      const pokemon = pokemonData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types,
      };
    });

    SetpokemnListState((prevState) => ({
      ...prevState,
      pokemnList: pokemonFinalResult,
    }));
  }

  useEffect(() => {
    downloadPokemon(pokemnListState.POKEDEX_URL);
  }, [pokemnListState.POKEDEX_URL]);

  return [pokemnListState, SetpokemnListState];
}

export default usePokemanListHook;