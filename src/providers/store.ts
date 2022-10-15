import create from "zustand";
import { ZustandStore } from "@squirtle2/providers";
import {
  buildPokemonTypesList,
  filterAutoCompleteOptions,
  getFromLocalStorageByKey,
  getPokemonByIndex,
  getPokemonByName,
  getPokemonFromDataSrc,
  handlePokemonTypeDispatch,
  pokemonAreEqual,
  setToLocalStorageWithKey,
} from "@utils";

export const usePokemonStore = create<ZustandStore>((set, get) => ({
  targetPokemon: undefined,
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
  startNewGame: () => {

    function setUpNewGame() {
      const randomPokemonValues = getPokemonFromDataSrc();
      const randomPokemonIndex = randomPokemonValues[0];
      const randomPokemon = randomPokemonValues[1];

      setToLocalStorageWithKey("gameIsOver", JSON.stringify(false));
      setToLocalStorageWithKey("secretIndex", JSON.stringify(randomPokemonIndex));

      set({
        targetPokemon: randomPokemon,
        gameIsOver: false,
        guessingInputValue: "",
        guessesList: [],
        autoCompleteOptions: [],
        pokemonTypes: buildPokemonTypesList(),
      });
    }

    function setUpGameWithPreviousData() {
      const secretIndex = getFromLocalStorageByKey("secretIndex");

      if (secretIndex) {
        const targetPokemon = getPokemonByIndex(parseInt(secretIndex));

        set({
          targetPokemon: targetPokemon,
        });
      }
    }

    const lastGameIsOver = getFromLocalStorageByKey("gameIsOver");

    if (lastGameIsOver && lastGameIsOver === "false") {
      setUpGameWithPreviousData();
    } else {
      setUpNewGame();
    }
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
