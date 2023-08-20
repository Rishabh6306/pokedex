// Import necessary dependencies and associated CSS for styling
import './PokemonList.css';

import Pokemon from '../Pokemon/Pokemon'; // Import the individual Pokemon component
import usePokemonList from '../../hooks/usePokemonList'; // Custom Hook for fetching Pokemon list

// Define the PokemonList component
function PokemonList() {
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    // Use the custom hook to fetch and manage the Pokemon list
    const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_URL);

    return (
        <div className='pokemon-list-wrapper'>
            <div>
                <h1>Pokemon list</h1>
            </div>
            <div className='page-controls'>
                {/* Button to navigate to previous page */}
                <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.prevUrl})}>Prev</button>
                
                {/* Button to navigate to next page */}
                <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.nextUrl})}>Next</button>
            </div>
            <div className='pokemon-list'>
                {/* Map through the Pokemon list and display each Pokemon component */}
                {pokemonListState.pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)}
            </div>
        </div>
    );
}

// Export the PokemonList component as the default export
export default PokemonList;