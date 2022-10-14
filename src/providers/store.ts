import create from "zustand";
import { ZustandStore } from "@squirtle2/providers";
import {
  buildPokemonTypesList,
  filterAutoCompleteOptions,
  getPokemonByName,
  getRandomPokemonFromDataSrc,
  handlePokemonTypeDispatch,
  pokemonAreEqual,
} from "@utils";

export const usePokemonStore = create<ZustandStore>((set, get) => ({
  targetPokemon: null,
  guessingInputValue: "",
  autoCompleteOptions: [],
  guessesList: [],
  pokemonTypes: buildPokemonTypesList(),
  gameIsOver: false,
  handleAutoCompleteOptions: (currentInputValue) => {
    const filteredOptions = filterAutoCompleteOptions(currentInputValue);
    set({
      autoCompleteOptions: filteredOptions,
      guessingInputValue: currentInputValue,
    });
  },
  directSetGuessingInputValue: (newInputValue) => set({
    guessingInputValue: newInputValue,
    autoCompleteOptions: [],
  }),
  pickRandomPokemon: () => {
    const randomPokemon = getRandomPokemonFromDataSrc();

    // setting new game
    set({
      targetPokemon: randomPokemon,
      gameIsOver: false,
      guessingInputValue: "",
      guessesList: [],
      autoCompleteOptions: [],
      pokemonTypes: buildPokemonTypesList(),
    });
  },
  dispatchGuess: (guessValue) => {
    if (!!guessValue) {
      const pokemonFromGuess = getPokemonByName(guessValue);
      const currentGuessesList = get().guessesList;
      const currentPokemonTypes = get().pokemonTypes;
      const currentTargetPokemon = get().targetPokemon;
      const guessesListWithoutUndefined = currentGuessesList.filter((pokemon) => pokemon !== undefined);
      const tratedPokemonTypes = handlePokemonTypeDispatch(currentPokemonTypes, pokemonFromGuess, currentTargetPokemon);
      const playerGuessedRight = pokemonAreEqual(pokemonFromGuess, currentTargetPokemon);

      set({
        guessesList: [...guessesListWithoutUndefined, pokemonFromGuess],
        pokemonTypes: tratedPokemonTypes,
        gameIsOver: playerGuessedRight,
      });
    }
  },
}));
