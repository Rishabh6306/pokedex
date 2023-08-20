// Import necessary dependencies and associated CSS for styling
import './PokemonDetails.css';

import { Link } from 'react-router-dom';

// Custom Hook for fetching Pokémon details
import usePokemon from '../../hooks/usePokemon';
import Pokemon from '../Pokemon/Pokemon';

// Define the PokemonDetails component
function PokemonDetails({ pokemonName }) {
    // Use the custom hook to fetch the Pokémon details
    const [pokemon, pokemonListState] = usePokemon(pokemonName);

    return (
        <>
        {/* Display the link to return to Pokedex */}
        <h1 >
            <Link className='pokedex-redirect' to="/">Home &#10169;</Link>
        </h1>
        
        {/* Display the Pokémon details */}
        {pokemon && <div className='pokemon-details-wrapper'>
            <div className='pokemon-detail-name'>{pokemon.name}</div>
            <div className='pokemon-image'>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className='pokemon-attr'>
                <div>Height: {pokemon.height}</div>
                <div>Weight: {pokemon.weight}</div>
            </div>
            <div className='pokemon-types'>
                <h1>Type:</h1> {pokemon.types.map(t => <span className='type' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>}
        
        {/* Display a list of similar Pokémon */}
        <div className='similar-pokemons'>
            <h1>Similar pokemons</h1>
            <div className='pokemon-similar-boxes'>
                {pokemonListState.pokemonList.length > 0 && 
                     pokemonListState.pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)
                }
            </div>
        </div>
        </>
    );
}

// Export the PokemonDetails component as the default export
export default PokemonDetails;