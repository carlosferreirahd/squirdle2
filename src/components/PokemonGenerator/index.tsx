import { useEffect, useRef } from "react";
import { PokemonGeneratorInput } from "@components";
import { usePokemonStore } from "@providers";
import { toast } from "react-toastify";

export function PokemonGenerator() {

  const startGenRef = useRef<HTMLInputElement>(null);
  const endGenRef = useRef<HTMLInputElement>(null);

  const startNewGame = usePokemonStore((state) => state.startNewGame);
  const targetPokemon = usePokemonStore((state) => state.targetPokemon);
  console.log('target', targetPokemon);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  function showErrorToast(message: string) {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function isValidInputRange(value: number) {
    return value >= 1 && value <= 8;
  }

  function onNewGameButtonClick() {
    if (startGenRef.current && endGenRef.current) {
      const startGenValue = parseInt(startGenRef.current.value);
      const endGenValue = parseInt(endGenRef.current.value);

      if (startGenValue && endGenValue) {
        if (isValidInputRange(startGenValue) && isValidInputRange(endGenValue)) {
          console.log('values', startGenValue, endGenValue);
          if (startGenValue <= endGenValue) {
            // startNewGame(start, end);
          } else {
            startGenRef.current.value = endGenValue.toString();
            endGenRef.current.value = startGenValue.toString();
            // startNewGame(end, start);
          }
          // save startValue and endValue inside localStorage
          // save pokemon id inside localStorage
          toast.dismiss();
          return;
        }
      }
    }

    showErrorToast('Invalid generation values, please try again');
  }

  function handleInvalidInput(
    e: React.ChangeEvent<HTMLInputElement>,
    ref: React.RefObject<HTMLInputElement>,
  ) {
    if (ref.current) {
      const inputValue = e.target.value;
      const numericValue = parseInt(inputValue.replace(/[^\d]/g, ""), 10);

      ref.current.value = numericValue.toString();

      if (!isValidInputRange(numericValue)) {
        ref.current.value = '';
      }
    }
  }

  function handleFirstInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleInvalidInput(e, startGenRef);
  }

  function handleSecondInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleInvalidInput(e, endGenRef);
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
      <button
        className="mt-4 p-2 pr-4 rounded-xl text-[#000000] bg-link font-bold"
        onClick={onNewGameButtonClick}
      >
        <i className="fa fa-play p-2" /> New Game
      </button>
    </div>
  );
}
