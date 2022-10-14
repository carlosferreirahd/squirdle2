import { TypeTag } from "@components";
import { usePokemonStore } from "@providers";

export function TypesList() {

  const pokemonTypes = usePokemonStore((state) => state.pokemonTypes);

  return (
    <div
      className="p-1 mb-8 w-full max-w-lg flex gap-2 flex-wrap text-center items-center justify-center"
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
