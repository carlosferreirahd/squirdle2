import { pokedex } from "@assets";
import { PokemonInfo } from "@squirtle2/pokemon";

export function filterAutoCompleteOptions(
  currentInputValue: string,
): PokemonInfo[] {

  if (!!currentInputValue && !!currentInputValue.trim())
    return pokedex.filter((
      pokemon: PokemonInfo,
    ) => pokemon.name.toLowerCase().startsWith(currentInputValue.trim().toLowerCase()));

  return [];
}
