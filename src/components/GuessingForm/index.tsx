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
      <div className="w-full relative">
        <input
          className="h-14 w-full border border-solid border-[#DCDCDC] rounded p-4 text-xl outline-none pr-24"
          type="text"
          placeholder="Who's that Pokémon?"
          ref={inputRef}
        />
        <button
          className="bg-foreground rounded-r p-4 text-base font-semibold absolute right-0 z-10 top-0 hover:bg-opacity-70"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
