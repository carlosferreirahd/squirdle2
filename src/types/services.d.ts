declare module '@squirtle2/services' {

  interface IGetAllPokemon {
    count: number;
    next: string | null;
    previous: string | null;
    results: RawPokemonResponse[];
  }

}
