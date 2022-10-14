import {
  AutoComplete,
  TypesList,
  FinishGame,
  PokemonGenerator,
} from "@components";
import { usePokemonStore } from "@providers";

export function GuessingForm() {

  const guessingInputValue = usePokemonStore((state) => state.guessingInputValue);
  const inputChangeHandler = usePokemonStore((state) => state.handleAutoCompleteOptions);
  const dispatchGuess = usePokemonStore((state) => state.dispatchGuess);
  const gameIsOver = usePokemonStore((state) => state.gameIsOver);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const inputValue = e.target.value;
    inputChangeHandler(inputValue);
  }

  function handleSubmitButton(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatchGuess(guessingInputValue);
  }

  return (
    <form
      className="flex flex-col w-full gap-2"
      onSubmit={handleFormSubmit}
    >

      <div className="w-full relative">
        {gameIsOver ? (
          <FinishGame />
        ) : (
          <>
            <input
              className="h-14 w-full border border-solid border-[#DCDCDC] rounded p-4 text-xl outline-none pr-24"
              type="text"
              placeholder="Who's that Pokémon?"
              value={guessingInputValue}
              onChange={handleInputOnChange}
              autoFocus
            />
            <button
              className="bg-foreground rounded-r p-4 text-base font-semibold absolute right-0 z-10 top-0 hover:bg-opacity-70"
              type="button"
              onClick={handleSubmitButton}
            >
              Submit
            </button>
          </>
        )}

        <div className="z-20 absolute mt-5">
          <TypesList />
          <PokemonGenerator />
        </div>
      </div>

      <AutoComplete />
    </form>
  );
}
