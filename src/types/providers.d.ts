declare module '@squirtle2/providers' {

  interface ZustandStore {
    guessingInputValue: string;
    directSetGuessingInputValue: (newInputValue: string) => void;
    autoCompleteOptions: PokemonInfo[];
    handleAutoCompleteOptions: (currentInputValue: string) => void;
  }

}
