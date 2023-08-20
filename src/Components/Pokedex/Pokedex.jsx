// Import necessary dependencies and components
import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css'; // Import the associated CSS for styling
import PokemonDetails from '../PokemonDetails/PokemonDetails';

// Define the Pokedex component
function Pokedex() {
    // Set up a state variable to manage the search term
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='pokedex-wrapper'>
            {/* Display the heading */}
            <h1 className='heading'>POKEDEX</h1>
            
            {/* Render the Search component and pass a callback to update the search term */}
            <Search updateSearchTerm={setSearchTerm} />
            
            {/* Conditionally render either the PokemonDetails or PokemonList component */}
            {searchTerm ? <PokemonDetails pokemonName={searchTerm} /> : <PokemonList />}
        </div>
    )
}

// Export the Pokedex component as the default export
export default Pokedex;