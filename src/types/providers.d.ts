declare module '@squirtle2/providers' {

  interface ZustandStore {
    targetPokemon: PokemonInfo;
    guessingInputValue: string;
    autoCompleteOptions: PokemonInfo[];
    directSetGuessingInputValue: (newInputValue: string) => void;
    handleAutoCompleteOptions: (currentInputValue: string) => void;
    pickRandomPokemon: () => void;
  }

}
