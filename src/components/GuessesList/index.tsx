import { GuessesListRow } from "@components";
import {
  up,
  down,
  sides,
  right,
  wrong,
} from "@assets";

export function GuessesList() {
  return (
    <div className="w-full p-2 flex flex-col gap-2 my-4">
      <GuessesListRow
        name="Lugia"
        genImgSrc={up}
        type1ImgSrc={sides}
        type2ImgSrc={down}
        heightImgSrc={right}
        weightImgSrc={wrong}
      />
      <GuessesListRow
        name="Lugia"
        genImgSrc={up}
        type1ImgSrc={sides}
        type2ImgSrc={down}
        heightImgSrc={right}
        weightImgSrc={wrong}
      />
      <GuessesListRow
        name="Lugia"
        genImgSrc={up}
        type1ImgSrc={sides}
        type2ImgSrc={down}
        heightImgSrc={right}
        weightImgSrc={wrong}
      />
      <GuessesListRow
        name="Zamazenta Hero of Many Battles"
        genImgSrc={up}
        type1ImgSrc={sides}
        type2ImgSrc={down}
        heightImgSrc={right}
        weightImgSrc={wrong}
      />
      <GuessesListRow
        name="Lugia"
        genImgSrc={up}
        type1ImgSrc={sides}
        type2ImgSrc={down}
        heightImgSrc={right}
        weightImgSrc={wrong}
      />
      <GuessesListRow
        name="Lugia"
        genImgSrc={up}
        type1ImgSrc={sides}
        type2ImgSrc={down}
        heightImgSrc={right}
        weightImgSrc={wrong}
      />
      <GuessesListRow
        name="Lugia"
        genImgSrc={up}
        type1ImgSrc={sides}
        type2ImgSrc={down}
        heightImgSrc={right}
        weightImgSrc={wrong}
      />
      <GuessesListRow
        name="Lugia"
        genImgSrc={up}
        type1ImgSrc={sides}
        type2ImgSrc={down}
        heightImgSrc={right}
        weightImgSrc={wrong}
      />
    </div>
  );
}
