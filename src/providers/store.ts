import create from "zustand";
import { ZustandStore } from "@squirtle2/providers";
import {
  filterAutoCompleteOptions,
  getRandomPokemonFromDataSrc,
} from "@utils";

export const usePokemonStore = create<ZustandStore>((set) => ({
  targetPokemon: null,
  guessingInputValue: "",
  autoCompleteOptions: [],
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
  }
}));
