import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";
import { useParams } from "react-router-dom";
 
function usePokemon(pokemonName) {
    const { id } = useParams(); // Get the ID from the URL parameters

    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    // Initialize state for the currently selected Pokemon and the Pokemon list
    const [pokemon, setPokemon] = useState(null);
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: '',
        nextUrl: '',
        prevUrl: ''
    });

    // Function to download details for the given Pokemon ID or name
    async function downloadGivenPokemon(id) {
        const response = await axios.get(POKEMON_DETAIL_URL + ((pokemonName) ? pokemonName : id));
        const pokemonData = response.data;

        // Set the Pokemon details in the state
        setPokemon({
            name: pokemonData.name,
            height: pokemonData.height,
            weight: pokemonData.weight,
            types: pokemonData.types,
            image: pokemonData.sprites.other.dream_world.front_default
        });

        // Get the primary type of the Pokemon
        const types = response.data.types.map(t => t.type.name);
        return types[0];
    }

    // Function to download details for the given Pokemon and its related types
    async function downloadPokemonAndRelated(id) {
        try {
            const type = await downloadGivenPokemon(id);
            await downloadPokemons(pokemonListState, setPokemonListState, `https://pokeapi.co/api/v2/type/${type}`);
        } catch(e) {
            console.log("No Pokemon found or an error occurred.");
        }
    }

    // Effect to trigger downloading Pokemon details and related data
    useEffect(() => {
        downloadPokemonAndRelated(id);

        // Scroll to the top of the page
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [id, pokemonName]); // Trigger the effect when ID or pokemonName changes

    // Return the selected Pokemon details and the Pokemon list state
    return [pokemon, pokemonListState];
}

export default usePokemon;
