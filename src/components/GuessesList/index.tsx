import { GuessesListRow } from "@components";
import { usePokemonStore } from "@providers";
import { PokemonInfo } from "@squirtle2/pokemon";
import {
  up,
  down,
  sides,
  right,
  wrong,
} from "@assets";

export function GuessesList() {

  const guessesList = usePokemonStore((state) => state.guessesList);
  const targetPokemon = usePokemonStore((state) => state.targetPokemon);
  console.log('target', targetPokemon)

  function handleImgSrcByProp(prop: string, guess: PokemonInfo) {
    // types -> either right or wrong
    // gen, height and weight -> can be greater or less than

    if(!targetPokemon) return undefined;

    if (prop === 'type1') {
      if (guess['type1'] === targetPokemon['type2']) {
        return sides;
      }
      if (guess[prop] !== targetPokemon[prop]) {
        return wrong;
      }
      return right;
    }

    if (prop === 'type2') {
      if (guess['type2'] === targetPokemon['type1']) {
        return sides;
      }
      if (guess[prop] !== targetPokemon[prop]) {
        return wrong;
      }
      return right;
    }

    if (prop === 'gen' || prop === 'height' || prop === 'weight') {
      if (guess[prop] > targetPokemon[prop]) {
        return down;
      }
      if (guess[prop] < targetPokemon[prop]) {
        return up;
      }
      return right;
    }

    return undefined;
  }

  return (
    <div className="w-full p-2 flex flex-col gap-2 my-4 relative">
      {guessesList.map((pokemon: PokemonInfo | undefined, i: number) => {
        return !!pokemon ? (
          <div key={i} className="fade-in mb-4">
            <GuessesListRow
              name={pokemon.name}
              genImgSrc={handleImgSrcByProp('gen', pokemon)}
              type1ImgSrc={handleImgSrcByProp('type1', pokemon)}
              type2ImgSrc={handleImgSrcByProp('type2', pokemon)}
              heightImgSrc={handleImgSrcByProp('height', pokemon)}
              weightImgSrc={handleImgSrcByProp('weight', pokemon)}
            />
          </div>
        ) : (
          <span key={i} className="fade-in text-center text-foreground font-bold">
            Pokémon not found...
          </span>
        )
      })}
    </div>
  );
}
