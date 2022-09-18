import { ITypeTag } from "@squirtle2/general";

export function TypeTag({
  type = "",
  backgroundColor = "",
}: ITypeTag) {
  return (
    <span
      className="px-2 py-1 rounded-md text-[#ffffff]"
      style={{ backgroundColor: backgroundColor }}
    >
      {type}
    </span>
  );
}
