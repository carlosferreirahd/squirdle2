import { Children } from "@squirtle2/general";

export function Padded({
  children,
}: Children) {
  return (
    <div className="w-full px-10 sm:px-2">
      {children}
    </div>
  );
}
