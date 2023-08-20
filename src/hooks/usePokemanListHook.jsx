import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemon";

function usePokemanListHook(DEFAULT_URL) {

  const [pokemnListState, SetpokemnListState] = useState({
    pokemnList: [],
    POKEDEX_URL: DEFAULT_URL,
    previousUrl: null,
    nextUrl: null,
  });


  useEffect(() => {
    downloadPokemon(pokemnListState, SetpokemnListState, pokemnListState.POKEDEX_URL);
  }, [pokemnListState.POKEDEX_URL]);

  return [pokemnListState, SetpokemnListState];
}

export default usePokemanListHook;