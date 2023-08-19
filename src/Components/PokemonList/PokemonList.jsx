import React, { useEffect, useState } from 'react';
import './PokemonList.css';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList() {
  // Initial URL for the PokeAPI
  const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon';

  // State to manage the Pokemon list and pagination URLs
  const [pokemnListState, SetpokemnListState] = useState({
    pokemnList: [],           // Array to hold fetched Pokemon data
    POKEDEX_URL: DEFAULT_URL, // Current PokeAPI URL
    previousUrl: null,        // URL for previous page, initially null
    nextUrl: null,            // URL for next page, initially null
  });

  // Fetch Pokemon data from the API
  async function downloadPokemon() {
    // Fetch data from the current PokeAPI URL
    const response = await axios.get(pokemnListState.POKEDEX_URL);
    const pokemonsResult = response.data.results;

    // Update pagination URLs in the state
    SetpokemnListState((prevState) => ({
      ...prevState,
      nextUrl: response.data.next,
      previousUrl: response.data.previous,
    }));

    // Fetch detailed data for each Pokemon
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

    // Update Pokemon list in the state
    SetpokemnListState((prevState) => ({
      ...prevState,
      pokemnList: pokemonFinalResult,
    }));
  }

  // Fetch Pokemon data on component mount and when URL changes
  useEffect(() => {
    downloadPokemon();
  }, [pokemnListState.POKEDEX_URL]);

  return (
    <div className='pokemonList-container'>
      {/* Heading */}
      <h1 className='pokemon-heading'>Pokemon List</h1>
      <div className="page-controls">
        {/* Button to navigate to the previous page */}
        <button
          onClick={() =>
            SetpokemnListState((prevState) => ({
              ...prevState,
              POKEDEX_URL: pokemnListState.previousUrl,
            }))
          }
          disabled={pokemnListState.previousUrl === null}
        >
          Previous
        </button>
        {/* Button to navigate to the next page */}
        <button
          onClick={() =>
            SetpokemnListState((prevState) => ({
              ...prevState,
              POKEDEX_URL: pokemnListState.nextUrl,
            }))
          }
          disabled={pokemnListState.nextUrl === null}
        >
          Next
        </button>
      </div>
      <div className="pokemon-lists">
        {/* Render each Pokemon */}
        {pokemnListState.pokemnList.map((pokemon) => (
          <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} url={pokemon.image} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;