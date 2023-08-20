// Import necessary dependencies
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PokemonDetails.css';
import usePokemonDetailHook from '../../hooks/usePokemonDetailHook';

function PokemonDetails() {
  // Extract the 'id' parameter from the URL using 'useParams'
  const { id } = useParams();
   const [ pokemon ] = usePokemonDetailHook(id)
  return (
    <>
      {/* Link to navigate back to the home page */}
      <h1>
        <Link className='home-icon' to="/">
          Home &#9751;
        </Link>
      </h1>
      {/* Display Pokemon details if data is available */}
      {pokemon && (
        <div className='pokemon-detail-container'>
          {/* Display Pokemon name */}
          <div className='pokemon-name'>{pokemon.name}</div>
          {/* Display Pokemon image */}
          <div className='pokemon-image'>
            <img src={pokemon.image} alt="img" />
          </div>
          {/* Display Pokemon attributes */}
          <div className='pokemon-atr'>
            <div>
              Height: {pokemon.height}
            </div>
            <div>
              Weight: {pokemon.weight}
            </div>
          </div>
          {/* Display Pokemon types */}
          <div className='pokemon-type'>
            <h2>Type: </h2>
            {pokemon.types.map((t) => (
              <span className='type' key={t.type.name}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonDetails;