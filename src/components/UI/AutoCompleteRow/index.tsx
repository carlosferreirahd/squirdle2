import { usePokemonStore } from "@providers";
import { IAutoCompleteRow } from "@squirtle2/general";

export function AutoCompleteRow({
  name = "",
  gen = 0,
  type1 = "",
  type2 = "",
  height = 0,
  weight = 0,
  showBottomDivider = false,
}: IAutoCompleteRow) {

  const guessingInputValue = usePokemonStore((state) => state.guessingInputValue);
  const directSetGuessingInputValue = usePokemonStore((state) => state.directSetGuessingInputValue);

  const trimmedValueLength = guessingInputValue.trim().length;
  const nameBoldPart = name.substring(0, trimmedValueLength);
  const nameRestPart = name.substring(trimmedValueLength, name.length);

  return (
    <>
      <div
        className="rounded text-center p-2 cursor-pointer hover:bg-[#E9E9E9]"
        onClick={() => directSetGuessingInputValue(name)}
      >
        <h1 className="text-xl mb-1">
          <strong>{nameBoldPart}</strong>{nameRestPart}
        </h1>
        <span className="text-[#444444]">
          Gen {gen}, {type1}/{type2 === '' ? 'None' : type2}, {height}m, {weight}kg
        </span>
      </div>
      {showBottomDivider && <hr className="w-full text-[#D4D4D4]" />}
    </>
  );
}
