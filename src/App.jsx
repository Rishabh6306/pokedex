// Import necessary components and libraries
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

// Define the main App component
function App() {
  return (
    // Set up the application routes using the React Router's Routes component
    <Routes>
      {/* Define the route for the Pokedex component */}
      <Route path="/" element={<Pokedex />} />
      
      {/* Define the route for the PokemonDetails component with a dynamic ID parameter */}
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      
      {/* Define a fallback route for any other paths */}
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

// Export the App component as the default export
export default App;