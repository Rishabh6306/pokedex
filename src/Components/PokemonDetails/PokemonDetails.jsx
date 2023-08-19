import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './PokemonDetails.css'

function PokemonDetails() {

  const { id } = useParams();
  let [pokemon, setPokemon] = useState(null)
  const POEKMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/'

  async function downloadPokemon() {
    const response = await axios.get(POEKMON_DETAIL_URL + id);
    let pokemon = response.data;
    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      image: pokemon.sprites.front_default
    })
  }

  useEffect(() => {
    downloadPokemon()
  })

  return (
    <>
   <h1><Link className='home-icon' to="/">Home &#9751;</Link></h1>
    {pokemon && <div className='pokemon-detail-container'>
      <div className='pokemon-name'>
        {pokemon.name}
      </div>
      <div className='pokemon-image'>
        <img src={pokemon.image} alt="" />
      </div>
      <div className='pokemon-atr'>
        <div>
          Height: {pokemon.height}
        </div>
        <div>
          Weight: {pokemon.weight}
        </div>
      </div>
      <div className='pokemon-type'>
        <h2>Type: </h2> {pokemon.types.map((t) => (
          <span className='type' key={t.type.name}>{t.type.name}</span>
        ))}
      </div>
    </div>}
    </>
  )
}

export default PokemonDetails;