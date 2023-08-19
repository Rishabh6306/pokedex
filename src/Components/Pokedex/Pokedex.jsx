// Import necessary dependencies
import React from 'react';
import './Pokedex.css';
import Search from '../Search/Search';
import PokemonList from '../PokemonList/PokemonList';

// Component representing the entire Pokedex
function Pokedex() {
  return (
    <>
      {/* Wrapper for the Pokedex */}
      <div className='pokedex-wrapper'>
        {/* Pokedex title */}
        <h1>POKEDEX</h1>
        {/* Search component */}
        <Search />
        {/* PokemonList component to display the list of Pokemon */}
        <PokemonList />
      </div>
    </>
  );
}

export default Pokedex;