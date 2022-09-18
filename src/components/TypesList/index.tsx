import { TypeTag } from "@components";
import { types, mapTypeToColors } from "@utils";

export function TypesList() {
  return (
    <div
      className="mt-5 p-1 w-full max-w-lg flex gap-2 flex-wrap text-center items-center justify-center z-20 absolute"
    >
      {types.map((type) => (
        <TypeTag
          key={type}
          type={type}
          backgroundColor={mapTypeToColors[type]}
        />
      ))}
    </div>
  );
}
