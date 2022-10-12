declare module '@squirtle2/general' {

  type Children = {
    children: React.ReactNode
  };

  interface IAutoCompleteRow {
    name: string;
    gen: number;
    type1: string;
    type2: string;
    height: number;
    weight: number;
    showBottomDivider: boolean;
  };

  interface ITypeTag {
    type: string;
    backgroundColor: string;
  }

  interface IGuessesListRow {
    name: string | undefined;
    genImgSrc: string | undefined;
    type1ImgSrc: string | undefined;
    type2ImgSrc: string | undefined;
    heightImgSrc: string | undefined;
    weightImgSrc: string | undefined;
  }

}
