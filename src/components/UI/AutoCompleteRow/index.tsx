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

  const infoIsShown = usePokemonStore((state) => state.infoIsShown);
  const guessingInputValue = usePokemonStore((state) => state.guessingInputValue);
  const directSetGuessingInputValue = usePokemonStore((state) => state.directSetGuessingInputValue);

  function renderName() {
    const nameValue = name.toLowerCase();
    const trimmedValue = guessingInputValue.toLowerCase().trim();
    const indexOfTrimmedValue = nameValue.indexOf(trimmedValue);
    const trimmedValueLength = trimmedValue.length;
    const nameLenght = name.length;

    const beforePart = name.substring(0, indexOfTrimmedValue);
    const boldPart = name.substring(indexOfTrimmedValue, indexOfTrimmedValue + trimmedValueLength);
    const afterPart = name.substring(indexOfTrimmedValue + trimmedValueLength, nameLenght);

    return (
      <>
        {beforePart}<strong>{boldPart}</strong>{afterPart}
      </>
    );
  }

  return (
    <>
      <div
        className="rounded text-center p-2 cursor-pointer hover:bg-[#E9E9E9]"
        onClick={() => directSetGuessingInputValue(name)}
      >
        <h1 className="text-xl mb-1">
          {renderName()}
        </h1>
        {infoIsShown && (
          <span className="text-[#444444]">
            Gen {gen}, {type1}/{type2 === '' ? 'None' : type2}, {height}m, {weight}kg
          </span>
        )}
      </div>
      {showBottomDivider && <hr className="w-full text-[#D4D4D4]" />}
    </>
  );
}
