import { useRef } from "react";

export function GuessingForm() {

  const inputRef = useRef<HTMLInputElement>(null);

  function handleGuessSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('value', inputRef.current?.value);
  }

  return (
    <form
      className="flex w-full gap-2"
      onSubmit={handleGuessSubmit}
    >
      <input
        className="h-14 w-full border border-solid border-[#DCDCDC] rounded p-4 text-xl"
        type="text"
        placeholder="Who's that Pokémon?"
        ref={inputRef}
      />
      <button
        className="bg-foreground rounded p-4 text-base font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
