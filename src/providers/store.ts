import create from "zustand";
import { ZustandStore } from "@squirtle2/providers";
import {
  applyFilters,
  buildPokemonTypesList,
  clearLocalStorage,
  detectFilter,
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
  guessesLimit: 6,
  guessingInputValue: "",
  autoCompleteOptions: [],
  guessesList: [],
  pokemonTypes: buildPokemonTypesList(),
  gameIsOver: false,
  infoIsShown: getFromLocalStorageByKey("infoVisibility") ?? true,
  filterIsShown: false,
  toggleInfoVisibility: () => {
    const infoVisibility = get().infoIsShown;
    setToLocalStorageWithKey("infoVisibility", JSON.stringify(!infoVisibility));

    set({
      infoIsShown: !infoVisibility,
    });
  },
  handleAutoCompleteOptions: (currentInputValue) => {
    const theresFilter = detectFilter(currentInputValue);

    if (theresFilter) {
      const filteredOptions = applyFilters(currentInputValue);
      set({
        autoCompleteOptions: filteredOptions,
        filterIsShown: true,
        guessingInputValue: currentInputValue,
      });
    } else {
      const filteredOptions = filterAutoCompleteOptions(currentInputValue);
      set({
        autoCompleteOptions: filteredOptions,
        guessingInputValue: currentInputValue,
        filterIsShown: false,
      });
    }
  },
  directSetGuessingInputValue: (newInputValue) => set({
    guessingInputValue: newInputValue,
    autoCompleteOptions: [],
  }),
  setUpNewGame: (startGen, endGen) => {
    clearLocalStorage();

    if (startGen && endGen) {
      setToLocalStorageWithKey("startGen", JSON.stringify(startGen));
      setToLocalStorageWithKey("endGen", JSON.stringify(endGen));
    } else {
      setToLocalStorageWithKey("startGen", "1");
      setToLocalStorageWithKey("endGen", "8");
    }

    const startGenValue: number = getFromLocalStorageByKey("startGen");
    const endGenValue: number = getFromLocalStorageByKey("endGen");
    const infoVisibility: boolean = get().infoIsShown ?? true;

    const randomPokemonValues = getPokemonFromDataSrc(startGenValue, endGenValue);
    const randomPokemonIndex = randomPokemonValues[0];
    const randomPokemon = randomPokemonValues[1];

    setToLocalStorageWithKey("secretIndex", JSON.stringify(randomPokemonIndex));
    setToLocalStorageWithKey("gameIsOver", JSON.stringify(false));
    setToLocalStorageWithKey("infoVisibility", JSON.stringify(infoVisibility));

    set({
      gameIsOver: false,
      targetPokemon: randomPokemon,
      guessingInputValue: "",
      infoIsShown: infoVisibility,
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
      const treatedGuessesListWithoutUndefined = treatedGuessesList.filter((guess) => !!guess);
      const playerLost = treatedGuessesListWithoutUndefined.length >= get().guessesLimit;
      const gameIsOver = playerGuessedRight || playerLost;

      setToLocalStorageWithKey("gameIsOver", JSON.stringify(gameIsOver));
      setToLocalStorageWithKey("guessesList", JSON.stringify(treatedGuessesList));
      setToLocalStorageWithKey("typesCurrentState", JSON.stringify(treatedPokemonTypes));

      set({
        guessesList: treatedGuessesList,
        pokemonTypes: treatedPokemonTypes,
        gameIsOver: gameIsOver,
      });
    }
  },
}));
