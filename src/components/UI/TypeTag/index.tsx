import { ITypeTag } from "@squirtle2/general";

export function TypeTag({
  type = "",
  backgroundColor = "",
  rightGuessed = false,
  wrongGuessed = false,
}: ITypeTag) {
  return (
    <span
      className="px-2 py-1 rounded-md text-[#ffffff]"
      style={{
        backgroundColor: backgroundColor,
        border: rightGuessed ? 'solid #ffffff' : '',
        opacity: wrongGuessed ? '0.4' : '',
      }}
    >
      {type}
    </span>
  );
}
