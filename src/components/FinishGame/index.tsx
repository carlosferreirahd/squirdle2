import { usePokemonStore } from "@providers";
import { pokemonAreEqual } from "@utils";

export function FinishGame() {

  const targetPokemon = usePokemonStore((state) => state.targetPokemon);
  const guessesList = usePokemonStore((state) => state.guessesList);
  const guessesLimit = usePokemonStore((state) => state.guessesLimit);

  const guessesListWithoutUndefined = guessesList.filter(guess => !!guess);
  const listWithoutUndefinedLength = guessesListWithoutUndefined.length;
  const lastPokemon = listWithoutUndefinedLength > 0
    ? guessesListWithoutUndefined[listWithoutUndefinedLength - 1]
    : undefined;

  const playerLost = (listWithoutUndefinedLength >= guessesLimit) && !pokemonAreEqual(lastPokemon, targetPokemon);

  return (
    <div className="flex justify-center fade-in mb-2">
      <div className="text-foreground text-center w-fit border rounded p-4">
        <p>{playerLost ? "You lost!" : "You won!"}</p>
        <p>The secret Pokémon was <strong>{targetPokemon.name}</strong>!</p>
      </div>
    </div>
  );
}
