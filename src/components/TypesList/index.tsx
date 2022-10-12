import { TypeTag } from "@components";
import { usePokemonStore } from "@providers";

export function TypesList() {

  const pokemonTypes = usePokemonStore((state) => state.pokemonTypes);

  return (
    <div
      className="mt-5 p-1 pb-8 w-full max-w-lg flex gap-2 flex-wrap text-center items-center justify-center z-20 absolute"
    >
      {pokemonTypes.map((ptype) => (
        <TypeTag
          key={ptype.type}
          type={ptype.type}
          backgroundColor={ptype.typeColor}
          rightGuessed={ptype.rightGuessed}
          wrongGuessed={ptype.wrongGuessed}
        />
      ))}
    </div>
  );
}
