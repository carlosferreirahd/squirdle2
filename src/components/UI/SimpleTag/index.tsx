import { ISimpleTag } from "@squirtle2/general";

export function SimpleTag({
  text = '',
  color = '',
  size = 'large',
}: ISimpleTag) {
  return (
    <div
      className={`py-1 px-2 rounded-lg w-fit text-[#000000] font-bold tracking-wider text-xl my-2 inline-block ${size === 'small' ? 'text-sm m-0' : ''}`}
      style={{ backgroundColor: color === '' ? '#5EBDFC' : color }} /* link color */
    >
      {text}
    </div>
  );
}
