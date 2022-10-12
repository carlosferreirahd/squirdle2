import { usePokemonStore } from "@providers";

export function FinishGame() {

  const targetPokemon = usePokemonStore((state) => state.targetPokemon);

  return (
    <div className="flex justify-center fade-in mb-2">
      <div className="text-foreground text-center w-fit border rounded p-4">
        <p>You won!</p>
        <p>The secret Pokémon was <strong>{targetPokemon.name}</strong>!</p>
      </div>
    </div>
  );
}
