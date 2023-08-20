import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";

// Define the usePokemonList custom hook
function usePokemonList(DEFAULT_URL) {
    // Initialize state for the Pokemon list and navigation URLs
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: DEFAULT_URL,
        nextUrl: DEFAULT_URL,
        prevUrl: DEFAULT_URL
    });

    // Effect to trigger downloading the Pokemon list
    useEffect(() => {
        downloadPokemons(pokemonListState, setPokemonListState, DEFAULT_URL);
    }, [pokemonListState.pokedexUrl]); // Trigger the effect when pokedexUrl changes

    // Return the Pokemon list state and the setter function
    return [pokemonListState, setPokemonListState];
}

export default usePokemonList;