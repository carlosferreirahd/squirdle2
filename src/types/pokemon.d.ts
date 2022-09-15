declare module '@squirtle2/pokemon' {

  interface PokemonInfo {
    gen: string;
    type1: string;
    type2: string | null;
    height: number;
    weight: number;
  }

  interface RawPokemonResponse {
    name: string;
    url: string;
  }

}
