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
    name: string;
    genImgSrc: string;
    type1ImgSrc: string;
    type2ImgSrc: string;
    heightImgSrc: string;
    weightImgSrc: string;
  }

}
