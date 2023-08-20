import axios from "axios"; // Import Axios for making HTTP requests

// Define an asynchronous function to download Pokemon data
async function downloadPokemons(pokemonListState, setPokemonListState, defaultUrl, limit = 20) {
    // Fetch data from the provided URL or the default URL
    const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : defaultUrl);

    // Determine the array of Pokémon results from the response data
    let pokemonResults = response.data.results ? response.data.results : response.data.pokemon;
    pokemonResults = pokemonResults.slice(0, limit); // Limit the number of results

    // Create an array of promises for fetching individual Pokemon data
    const pokemonPromise = pokemonResults.map((p) => {
        if (p.url) {
            return axios.get(p.url);
        } else if (p.pokemon.url) {
            return axios.get(p.pokemon.url);
        }
    });

    // Fetch data for all the promises in parallel
    const pokemonListData = await axios.all(pokemonPromise);

    // Process the fetched Pokemon data and create a final list
    const pokemonFinalList = pokemonListData.map(pokemonData => {
        const pokemon = pokemonData.data;
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types
        };
    });

    // Update the Pokemon list state and navigation URLs
    setPokemonListState({
        ...pokemonListState,
        pokemonList: pokemonFinalList,
        nextUrl: response.data.next,
        prevUrl: response.data.previous
    });
}

// Export the downloadPokemons function
export default downloadPokemons;