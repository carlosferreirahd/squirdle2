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

  return (
    <>
      <div className="rounded text-center p-2 cursor-pointer hover:bg-[#E9E9E9]">
        <h1 className="text-xl font-bold mb-1">
          {name}
        </h1>
        <span className="text-[#444444]">
          Gen {gen}, {type1}/{type2 === '' ? 'None' : type2}, {height}m, {weight}kg
        </span>
      </div>
      {showBottomDivider && <hr className="w-full text-[#D4D4D4]" />}
    </>
  );
}
