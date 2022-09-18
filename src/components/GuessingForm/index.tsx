import { AutoComplete, TypesList } from "@components";
import { usePokemonStore } from "@providers";

export function GuessingForm() {

  const guessingInputValue = usePokemonStore((state) => state.guessingInputValue);
  const inputChangeHandler = usePokemonStore((state) => state.handleAutoCompleteOptions);

  function handleGuessSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('value', guessingInputValue);
  }

  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const inputValue = e.target.value;
    inputChangeHandler(inputValue);
  }

  return (
    <form
      className="flex flex-col w-full gap-2"
      onSubmit={handleGuessSubmit}
    >

      <div className="w-full relative">
        <input
          className="h-14 w-full border border-solid border-[#DCDCDC] rounded p-4 text-xl outline-none pr-24"
          type="text"
          placeholder="Who's that Pokémon?"
          value={guessingInputValue}
          onChange={handleInputOnChange}
        />
        <button
          className="bg-foreground rounded-r p-4 text-base font-semibold absolute right-0 z-10 top-0 hover:bg-opacity-70"
          type="submit"
        >
          Submit
        </button>

        <TypesList />
      </div>

      <AutoComplete />
    </form>
  );
}
