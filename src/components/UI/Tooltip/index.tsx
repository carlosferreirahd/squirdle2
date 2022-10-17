import { ITooltip } from "@squirtle2/general";

export function Tooltip({
  content,
  children,
}: ITooltip) {
  return (
    <div
      className="relative inline-block group"
    >
      {children}
      <span
        className="invisible group-hover:visible fade-in w-36 bg-[#000000] text-[#ffffff] text-center rounded-md py-2 absolute z-50 -top-[5px] left-[105%]"
      >
        {content}
      </span>
    </div>
  );
}
