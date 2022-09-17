import create from "zustand";
import { ZustandStore } from "@squirtle2/providers";

export const usePokemonStore = create<ZustandStore>((set) => ({
  loading: false,
  pokemon: [],
}));
