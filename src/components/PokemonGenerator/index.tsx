import { useRef } from "react";
import { PokemonGeneratorInput } from "@components";

export function PokemonGenerator() {

  const startGenRef = useRef<HTMLInputElement>(null);
  const endGenRef = useRef<HTMLInputElement>(null);

  function handleFirstInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue.replace(/[\W_]/g, ""), 10);

    if (startGenRef.current) {
      startGenRef.current.value = numericValue.toString();
    }

    if (numericValue < 1 || numericValue > 8) {
      if (startGenRef.current) {
        startGenRef.current.value = '';
      }
    }
  }

  function handleSecondInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue.replace(/[\W_]/g, ""), 10);

    if (endGenRef.current) {
      endGenRef.current.value = numericValue.toString();
    }

    if (numericValue < 1 || numericValue > 8) {
      if (endGenRef.current) {
        endGenRef.current.value = '';
      }
    }
  }

  return (
    <div className="w-full text-center mb-8 text-foreground">
      <p>
        Guess Pokémon from gen&nbsp;
        <PokemonGeneratorInput
          ref={startGenRef}
          defaultValue={1}
          onChange={handleFirstInputChange}
        />
        &nbsp;to&nbsp;
        <PokemonGeneratorInput
          ref={endGenRef}
          defaultValue={8}
          onChange={handleSecondInputChange}
        />
      </p>
      <button className="mt-4 p-2 pr-4 rounded-xl text-[#000000] bg-link font-bold">
        <i className="fa fa-play p-2" /> New Game
      </button>
    </div>
  );
}
