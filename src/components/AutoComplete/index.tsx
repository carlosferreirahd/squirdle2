import { AutoCompleteRow } from "@components";

export function AutoComplete() {

  return (
    <div className="bg-[#FFFFFF] max-h-80 overflow-auto p-4 rounded flex flex-col gap-2">
      <AutoCompleteRow
        name="Lugia"
        gen={2}
        type1="Psychic"
        type2="Flying"
        height={5.2}
        weight={216}
        showBottomDivider={true}
      />
      <AutoCompleteRow
        name="Lugia"
        gen={2}
        type1="Psychic"
        type2="Flying"
        height={5.2}
        weight={216}
        showBottomDivider={true}
      />
      <AutoCompleteRow
        name="Lugia"
        gen={2}
        type1="Psychic"
        type2="Flying"
        height={5.2}
        weight={216}
        showBottomDivider={true}
      />
      <AutoCompleteRow
        name="Zamazenta Hero of Many Battles"
        gen={2}
        type1="Psychic"
        type2=""
        height={5.2}
        weight={216}
        showBottomDivider={false}
      />
    </div>
  );
}
