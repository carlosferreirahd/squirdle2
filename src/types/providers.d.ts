declare module '@squirtle2/providers' {

  interface ZustandStore {
    targetPokemon: PokemonInfo;
    guessingInputValue: string;
    autoCompleteOptions: PokemonInfo[];
    pokemonTypes: IPokemonTypes[];
    guessesList: (PokemonInfo | undefined)[];
    gameIsOver: boolean;
    directSetGuessingInputValue: (newInputValue: string) => void;
    handleAutoCompleteOptions: (currentInputValue: string) => void;
    startNewGame: () => void;
    dispatchGuess: (guessValue: string) => void;
  }

}
