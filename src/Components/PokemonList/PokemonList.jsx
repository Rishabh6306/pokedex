import React, { useEffect, useState } from 'react'
import './PokemonList.css'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'

function PokemonList() {
const [pokemnList, setPokemonList] = useState([])
  const POEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'
  async function downloadPoekmon() {
    const reponse = await axios.get(POEDEX_URL);
    const pokemonsResult = reponse.data.results;
    const pokemonPromise = pokemonsResult.map((pokemon) => axios.get(pokemon.url))
    const pokemonsResultData = await axios.all(pokemonPromise)
    const pokemonFinalResult = pokemonsResultData.map((pokemonData) => {
    const pokemon = pokemonData.data;
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      types: pokemon.types
    }
    })
    setPokemonList(pokemonFinalResult);
  }

  useEffect(() => {
    downloadPoekmon()
  }, [])
  return (
    <div className='pokemonList-container'>
      <h2>Pokemon</h2>
      <div className="pokemon-lists">
      {pokemnList.map((pokemon) => <Pokemon key={pokemon.id} name={pokemon.name} url={pokemon.image}/>)}
      </div>
    </div>
  )
}

export default PokemonList;