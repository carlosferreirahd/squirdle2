import { pokedex } from "@assets";
import { IPokemonTypes } from "@squirtle2/general";
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

export function buildPokemonTypesList(): IPokemonTypes[] {
  const mappedTypes: IPokemonTypes[] = types.map((type) => {
    const itype: IPokemonTypes = {
      type: type,
      typeColor: mapTypeToColors[type],
      rightGuessed: false,
      wrongGuessed: false,
    }
    return itype;
  });

  return mappedTypes;
}

export function filterAutoCompleteOptions(
  currentInputValue: string,
): PokemonInfo[] {

  if (!!currentInputValue && !!currentInputValue.trim()) {
    return pokedex.filter(
      (pokemon: PokemonInfo) => {
        const pokedexValue = pokemon.name.toLowerCase();
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

export function handlePokemonTypeDispatch(
  currentTypesList: IPokemonTypes[],
  currentGuess: PokemonInfo | undefined,
  targetAnswer: PokemonInfo,
): IPokemonTypes[] {

  if (!currentGuess) {
    return currentTypesList;
  }

  const { type1: ctype1, type2: ctype2 } = currentGuess;
  const { type1: ttype1, type2: ttype2 } = targetAnswer;

  const currentGuessType1 = ctype1.toLowerCase();
  const currentGuessType2 = ctype2.toLowerCase();
  const targetType1 = ttype1.toLowerCase();
  const targetType2 = ttype2.toLowerCase();

  const treatedTypesList: IPokemonTypes[] = currentTypesList.map((ptype: IPokemonTypes) => {
    const ptypeName = ptype.type === 'none' ? '' : ptype.type;

    if (currentGuessType1 === ptypeName) {
      if (currentGuessType1 === targetType1 || currentGuessType1 === targetType2) {
        return { ...ptype, rightGuessed: true };
      } else {
        return { ...ptype, wrongGuessed: true };
      }
    }
    if (currentGuessType2 === ptypeName) {
      if (currentGuessType2 === targetType1 || currentGuessType2 === targetType2) {
        return { ...ptype, rightGuessed: true };
      } else {
        return { ...ptype, wrongGuessed: true };
      }
    }
    return ptype;
  });

  return treatedTypesList;
}

export function getPokemonFromDataSrc(startGenValue?: number, endGenValue?: number): [number, PokemonInfo] {
  if ((!startGenValue || !endGenValue) || (startGenValue === 1 && endGenValue === 8)) {
    const pokemonIndex = Math.floor(Math.random() * pokedex.length);
    const randomPokemon: PokemonInfo = pokedex[pokemonIndex];
    return [pokemonIndex, randomPokemon];
  } else {
    console.log('from ls', startGenValue, endGenValue);
    const filteredPokemon = pokedex.filter((pokemon: PokemonInfo) => ((pokemon.gen >= startGenValue) && (pokemon.gen <= endGenValue)));
    const pokemonIndex = Math.floor(Math.random() * filteredPokemon.length);
    const randomPokemon: PokemonInfo = filteredPokemon[pokemonIndex];
    return [pokemonIndex, randomPokemon];
  }
}

export function getPokemonByName(pokemonName: string): PokemonInfo | undefined {
  const foundPokemon = pokedex.find(({ name }) => name.toLowerCase() === pokemonName.toLowerCase());
  return foundPokemon;
}

export function getPokemonByIndex(index: number): PokemonInfo | undefined {
  const foundPokemon = pokedex[index];
  return foundPokemon || undefined;
}

export function pokemonAreEqual(pokemon1: PokemonInfo | undefined, pokemon2: PokemonInfo): boolean {

  if (!pokemon1) {
    return false;
  }

  const equalName = pokemon1.name === pokemon2.name;
  const equalGen = pokemon1.gen === pokemon2.gen;
  const equalHeight = pokemon1.height === pokemon2.height;
  const equalWeight = pokemon1.weight === pokemon2.weight;
  const equalType1 = pokemon1.type1 === pokemon2.type1;
  const equalType2 = pokemon1.type2 === pokemon2.type2;

  return (
    equalName
    && equalGen
    && equalHeight
    && equalWeight
    && equalType1
    && equalType2
  );
}
