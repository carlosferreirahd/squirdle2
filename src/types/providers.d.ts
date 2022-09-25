declare module '@squirtle2/providers' {

  interface ZustandStore {
    targetPokemon: PokemonInfo;
    guessingInputValue: string;
    autoCompleteOptions: PokemonInfo[];
    guessesList: (PokemonInfo | undefined)[];
    directSetGuessingInputValue: (newInputValue: string) => void;
    handleAutoCompleteOptions: (currentInputValue: string) => void;
    pickRandomPokemon: () => void;
    dispatchGuess: (guessValue: string) => void;
  }

}
