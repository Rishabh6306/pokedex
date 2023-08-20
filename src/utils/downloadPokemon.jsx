import axios from "axios";

async function downloadPokemon(pokemnListState, SetpokemnListState, url) {
    const response = await axios.get(url);
    const pokemonsResult = response.data.results?response.data.results:response.data.pokemon;

    SetpokemnListState((prevState) => ({
      ...prevState,
      nextUrl: response.data.next,
      previousUrl: response.data.previous,
    }));

    
    const pokemonPromises = pokemonsResult.map((p) => {
      if(p.url) {
        return axios.get(p.url)
      } else if(p.pokemon.url) {
        return axios(p.pokemon.url)
      }
    })
    const pokemonsResultData = await axios.all(pokemonPromises);
    console.log(pokemonsResultData);
    const pokemonFinalResult = pokemonsResultData.map((pokemonData) => {
      const pokemon = pokemonData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types,
      };
    });

    SetpokemnListState((prevState) => ({
      ...prevState,
      pokemnList: pokemonFinalResult,
    }));
  }

  export default downloadPokemon;