import { forwardRef } from "react";
import { IGeneratorInput } from "@squirtle2/general";

export const PokemonGeneratorInput = forwardRef<HTMLInputElement, IGeneratorInput>(({
  defaultValue,
  onChange,
}, ref) => {

  return (
    <input
      ref={ref}
      className="max-w-[40px] rounded px-1 text-[#000000]"
      type="number"
      inputMode="numeric"
      min="1"
      max="8"
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
});
