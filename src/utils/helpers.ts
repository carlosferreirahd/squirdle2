import { pokedex } from "@assets";
import { PokemonInfo } from "@squirtle2/pokemon";

export const types: string[] = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
  "none",
];

export const mapTypeToColors: { [key: string]: string; } = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
  none: '#FFAB73',
};

export function filterAutoCompleteOptions(
  currentInputValue: string,
): PokemonInfo[] {

  if (!!currentInputValue && !!currentInputValue.trim()) {
    return pokedex.filter(
      (pokemon: PokemonInfo) => {
        const pokedexValue = pokemon.name.toLocaleLowerCase();
        const inputValue = currentInputValue.trim().toLowerCase();

        const wholeMatch = pokedexValue.startsWith(inputValue);

        // avoiding .includes
        const splittedDexValue = pokedexValue.split(' ');
        const partialMatch = splittedDexValue.some((namePart) => namePart.startsWith(inputValue));

        return wholeMatch || partialMatch;
      }
    );
  }

  return [];

};

export function getRandomPokemonFromDataSrc(): PokemonInfo {
  const randomPokemon: PokemonInfo = pokedex[Math.floor(Math.random() * pokedex.length)];
  return randomPokemon;
}

export function getPokemonByName(pokemonName: string): PokemonInfo | undefined {
  const foundPokemon = pokedex.find(({ name }) => name.toLowerCase() === pokemonName.toLowerCase());
  return foundPokemon;
}
