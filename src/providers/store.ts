import create from "zustand";
import { ZustandStore } from "@squirtle2/providers";
import {
  buildPokemonTypesList,
  clearLocalStorage,
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
  setUpNewGame: () => {
    const randomPokemonValues = getPokemonFromDataSrc();
    const randomPokemonIndex = randomPokemonValues[0];
    const randomPokemon = randomPokemonValues[1];

    clearLocalStorage();

    setToLocalStorageWithKey("secretIndex", JSON.stringify(randomPokemonIndex));
    setToLocalStorageWithKey("gameIsOver", JSON.stringify(false));

    set({
      gameIsOver: false,
      targetPokemon: randomPokemon,
      guessingInputValue: "",
      guessesList: [],
      autoCompleteOptions: [],
      pokemonTypes: buildPokemonTypesList(),
    });
  },
  handleCurrentGameState: () => {

    function setUpGameWithPreviousData(gameFinished: boolean) {
      const secretIndex = getFromLocalStorageByKey("secretIndex");
      const latestGuessesList = getFromLocalStorageByKey("guessesList");
      const latestPokemonTypes = getFromLocalStorageByKey("typesCurrentState");

      if (secretIndex) {
        const targetPokemon = getPokemonByIndex(parseInt(secretIndex));

        set({
          targetPokemon: targetPokemon,
          gameIsOver: gameFinished,
          guessesList: latestGuessesList ?? [],
          pokemonTypes: latestPokemonTypes ?? buildPokemonTypesList(),
        });
      }
    }

    const lastGameIsOver = getFromLocalStorageByKey("gameIsOver");

    if (lastGameIsOver === undefined) {
      get().setUpNewGame();
    } else {
      setUpGameWithPreviousData(lastGameIsOver);
    }

  },
  dispatchGuess: (guessValue) => {
    if (!!guessValue) {
      const pokemonFromGuess = getPokemonByName(guessValue);
      const currentGuessesList = get().guessesList;
      const currentPokemonTypes = get().pokemonTypes;
      const currentTargetPokemon = get().targetPokemon;
      const guessesListWithoutUndefined = currentGuessesList.filter((pokemon) => !!pokemon);
      const treatedPokemonTypes = handlePokemonTypeDispatch(currentPokemonTypes, pokemonFromGuess, currentTargetPokemon);
      const playerGuessedRight = pokemonAreEqual(pokemonFromGuess, currentTargetPokemon);
      const treatedGuessesList = [...guessesListWithoutUndefined, pokemonFromGuess];

      setToLocalStorageWithKey("gameIsOver", JSON.stringify(playerGuessedRight));
      setToLocalStorageWithKey("guessesList", JSON.stringify(treatedGuessesList));
      setToLocalStorageWithKey("typesCurrentState", JSON.stringify(treatedPokemonTypes));

      set({
        guessesList: treatedGuessesList,
        pokemonTypes: treatedPokemonTypes,
        gameIsOver: playerGuessedRight,
      });
    }
  },
}));
