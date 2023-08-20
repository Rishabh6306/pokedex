import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';
import usePokemanListHook from '../../hooks/usePokemanListHook';

function PokemonList() {
 
   const [pokemnListState, SetpokemnListState] = usePokemanListHook()
  return (
    <div className='pokemonList-container'>
      {/* Heading */}
      <h1 className='pokemon-heading'>Pokemon List</h1>
      <div className="page-controls">
        {/* Button to navigate to the previous page */}
        <button
          onClick={() =>
            SetpokemnListState((prevState) => ({
              ...prevState,
              POKEDEX_URL: pokemnListState.previousUrl,
            }))
          }
          disabled={pokemnListState.previousUrl === null}
        >
          Previous
        </button>
        {/* Button to navigate to the next page */}
        <button
          onClick={() =>
            SetpokemnListState((prevState) => ({
              ...prevState,
              POKEDEX_URL: pokemnListState.nextUrl,
            }))
          }
          disabled={pokemnListState.nextUrl === null}
        >
          Next
        </button>
      </div>
      <div className="pokemon-lists">
        {/* Render each Pokemon */}
        {pokemnListState.pokemnList.map((pokemon) => (
          <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} url={pokemon.image} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;