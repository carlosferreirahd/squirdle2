import { AutoCompleteRow } from "@components";
import { usePokemonStore } from "@providers";
import { PokemonInfo } from "@squirtle2/pokemon";

export function AutoComplete() {

  const rowOptions = usePokemonStore((state) => state.autoCompleteOptions);

  return (
    rowOptions.length === 0 ? null : (
      <div className="bg-[#FFFFFF] max-h-80 overflow-auto p-4 rounded flex flex-col gap-2 z-50">
        {rowOptions.map((pokemon: PokemonInfo, index: number) => (
          <AutoCompleteRow
            key={pokemon.name}
            name={pokemon.name}
            gen={pokemon.gen}
            type1={pokemon.type1}
            type2={pokemon.type2}
            height={pokemon.height}
            weight={pokemon.weight}
            showBottomDivider={index !== rowOptions.length - 1}
          />
        ))}
      </div>
    )
  );
}
