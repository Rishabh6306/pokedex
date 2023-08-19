import React, { useEffect, useState } from 'react'
import './PokemonList.css'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'

function PokemonList() {
const [pokemnList, setPokemonList] = useState([])

const DEAFULT_URL = 'https://pokeapi.co/api/v2/pokemon'
const [nextUrl, SetNextUrl] = useState(DEAFULT_URL)
const [previousUrl, SetPreviousUrl] = useState(DEAFULT_URL)
const [POEDEX_URL, setPOEDEX_URL] = useState(DEAFULT_URL)


  async function downloadPoekmon() {
    const reponse = await axios.get(POEDEX_URL ? POEDEX_URL : DEAFULT_URL);
    const pokemonsResult = reponse.data.results;
 
 SetNextUrl(reponse.data.next)
 SetPreviousUrl(reponse.data.previous)
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
  }, [POEDEX_URL])
  return (
    <div className='pokemonList-container'>
      <h1 className='pokemon-heading'>Pokemon List</h1>
      <div className="page-controls">
        <button onClick={(() => setPOEDEX_URL(previousUrl))} disabled={previousUrl === null} >Previous</button>
        <button onClick={(() => setPOEDEX_URL(nextUrl))} disabled={nextUrl === null}>Next</button>
      </div>
      <div className="pokemon-lists">
      {pokemnList.map((pokemon) => <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} url={pokemon.image}/>)}
      </div>
    </div>
  )
}

export default PokemonList;