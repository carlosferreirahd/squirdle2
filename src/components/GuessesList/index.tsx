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

  return (
    <div className="w-full p-2 flex flex-col gap-2 my-4 relative">
      {guessesList.map((pokemon: PokemonInfo | undefined, i: number) => {
        return !!pokemon ? (
          <div className="fade-in mb-4">
            <GuessesListRow
              key={i}
              name={pokemon.name}
              genImgSrc={up}
              type1ImgSrc={down}
              type2ImgSrc={sides}
              heightImgSrc={right}
              weightImgSrc={wrong}
            />
          </div>
        ) : (
          <span key={i} className="text-center text-foreground font-bold">
            Pokemon not found...
          </span>
        )
      })}
    </div>
  );
}
