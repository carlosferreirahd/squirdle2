import create from "zustand";
import { ZustandStore } from "@squirtle2/providers";
import {
  filterAutoCompleteOptions,
  getPokemonByName,
  getRandomPokemonFromDataSrc,
} from "@utils";

export const usePokemonStore = create<ZustandStore>((set, get) => ({
  targetPokemon: null,
  guessingInputValue: "",
  autoCompleteOptions: [],
  guessesList: [],
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
    set({
      targetPokemon: randomPokemon,
    });
  },
  dispatchGuess: (guessValue) => {
    if (!!guessValue) {
      const pokemonFromGuess = getPokemonByName(guessValue);
      const currentGuessesList = get().guessesList;
      const guessesListWithoutUndefined = currentGuessesList.filter((pokemon) => pokemon !== undefined);
      set({
        guessesList: [...guessesListWithoutUndefined, pokemonFromGuess],
      });
    }
  },
}));
