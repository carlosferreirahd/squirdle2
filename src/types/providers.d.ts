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
    handleCurrentGameState: () => void;
    setUpNewGame: (startGen?: number, endGen?: number) => void;
    dispatchGuess: (guessValue: string) => void;
  }

}
