import create from "zustand";
import { pokemonService } from "@services";
import { ZustandStore } from "@squirtle2/providers";

export const usePokemonStore = create<ZustandStore>((set) => ({
  loading: false,
  pokemon: [],
  rawPokemonData: [],
  getRawPokemonData: () => {
    set({ loading: true });
    pokemonService.getAllPokemon()
      .then((res) => {
        const { results } = res;
        set({ rawPokemonData: results });
      })
      .catch((err) => console.log('error on getAllPokemon service', err))
      .finally(() => set({ loading: false }));
  }
}));
