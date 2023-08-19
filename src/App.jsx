// Import necessary dependencies
import React from 'react';
import './App.css';
import Pokedex from './Components/Pokedex/Pokedex';
import PokemonDetails from './Components/PokemonDetails/PokemonDetails';
import { Route, Routes } from 'react-router-dom';

// Main component representing the entire app
function App() {
  return (
    <Routes>
      {/* Route for the Pokedex component */}
      <Route path="/" element={<Pokedex />} />
      {/* Route for the PokemonDetails component */}
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      {/* Default route for unmatched paths */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;