import { Tooltip } from "@components";
import { IGuessesListRow } from "@squirtle2/general";

export function GuessesListRow({
  pokemon,
  genImgSrc = '',
  type1ImgSrc = '',
  type2ImgSrc = '',
  heightImgSrc = '',
  weightImgSrc = '',
}: IGuessesListRow) {

  const {
    name,
    gen,
    type1,
    type2,
    height,
    weight,
  } = pokemon;

  function tooltipContent() {
    return (
      <ul>
        <li>
          <strong>Gen:</strong> <span>{gen}</span>
        </li>
        <li>
          <strong>Type 1:</strong> <span>{type1}</span>
        </li>
        <li>
          <strong>Type 2:</strong> <span>{type2 === '' ? 'None' : type2}</span>
        </li>
        <li>
          <strong>Height:</strong> <span>{height}</span>
        </li>
        <li>
          <strong>Weight:</strong> <span>{weight}</span>
        </li>
      </ul>
    );
  }

  return (
    <>
      <ul className="flex justify-evenly">
        <li className="flex flex-col items-center justify-start">
          <p className="text-foreground font-bold text-lg sm:text-sm">
            Gen
          </p>
          <img src={genImgSrc} width={70} height={70} alt="pokeball-guess" />
        </li>
        <li className="flex flex-col items-center justify-start">
          <p className="text-foreground font-bold text-lg sm:text-sm">
            Type 1
          </p>
          <img src={type1ImgSrc} width={70} height={70} alt="pokeball-guess" />
        </li>
        <li className="flex flex-col items-center justify-start">
          <p className="text-foreground font-bold text-lg sm:text-sm">
            Type 2
          </p>
          <img src={type2ImgSrc} width={70} height={70} alt="pokeball-guess" />
        </li>
        <li className="flex flex-col items-center justify-start sm:text-sm">
          <p className="text-foreground font-bold text-lg sm:text-sm">
            Height
          </p>
          <img src={heightImgSrc} width={70} height={70} alt="pokeball-guess" />
        </li>
        <li className="flex flex-col items-center justify-start">
          <p className="text-foreground font-bold text-lg sm:text-sm">
            Weight
          </p>
          <img src={weightImgSrc} width={70} height={70} alt="pokeball-guess" />
        </li>
        <li className="flex flex-col justify-start">
          <p className="text-foreground font-bold text-lg text-center sm:text-sm">
            Name
          </p>
          <div className="flex flex-col h-full items-center justify-center">
            <Tooltip
              content={tooltipContent()}
            >
              <p className="text-foreground font-bold text-base text-center max-w-[70px] underline">
                {name}
              </p>
            </Tooltip>
          </div>
        </li>
      </ul>
      <hr className="text-[#ffffff]" />
    </>
  );
}
