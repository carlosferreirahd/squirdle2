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
    rightGuessed: boolean;
    wrongGuessed: boolean;
  }

  interface IGuessesListRow {
    pokemon: PokemonInfo;
    genImgSrc: string | undefined;
    type1ImgSrc: string | undefined;
    type2ImgSrc: string | undefined;
    heightImgSrc: string | undefined;
    weightImgSrc: string | undefined;
  }

  interface IPokemonTypes {
    type: string;
    typeColor: string;
    rightGuessed: boolean;
    wrongGuessed: boolean;
  }

  interface IGeneratorInput {
    defaultValue: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  interface ITooltip {
    children: React.ReactNode;
    content?: React.ReactNode;
  }

}
