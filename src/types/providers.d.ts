declare module '@squirtle2/providers' {

  interface ZustandStore {
    loading: boolean;
    pokemon: PokemonInfo[];
    rawPokemonData: RawPokemonResponse[];
    getRawPokemonData: () => void;
  }

}
