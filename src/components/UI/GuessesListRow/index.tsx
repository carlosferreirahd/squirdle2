import {
  up,
  down,
  sides,
  right,
  wrong,
} from "@assets";

export function GuessesListRow() {
  return (
    <ul className="flex justify-evenly">
      <li className="flex flex-col items-center justify-start">
        <p className="text-foreground font-bold text-lg">
          Gen
        </p>
        <img src={up} width={70} height={70} alt="pokeball-guess" />
      </li>
      <li className="flex flex-col items-center justify-start">
        <p className="text-foreground font-bold text-lg">
          Type 1
        </p>
        <img src={up} width={70} height={70} alt="pokeball-guess" />
      </li>
      <li className="flex flex-col items-center justify-start">
        <p className="text-foreground font-bold text-lg">
          Type 2
        </p>
        <img src={up} width={70} height={70} alt="pokeball-guess" />
      </li>
      <li className="flex flex-col items-center justify-start">
        <p className="text-foreground font-bold text-lg">
          Height
        </p>
        <img src={up} width={70} height={70} alt="pokeball-guess" />
      </li>
      <li className="flex flex-col items-center justify-start">
        <p className="text-foreground font-bold text-lg">
          Weight
        </p>
        <img src={up} width={70} height={70} alt="pokeball-guess" />
      </li>
      <li className="flex flex-col items-center justify-start">
        <p className="text-foreground font-bold text-lg text-center">
          Name
        </p>
        <p className="text-foreground font-bold text-lg max-w-[8rem] text-center h-[81.656px] leading-[81.656px]">
          Lugia
        </p>
      </li>
    </ul>
  );
}
