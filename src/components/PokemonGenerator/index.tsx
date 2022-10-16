import { useEffect, useRef } from "react";
import { PokemonGeneratorInput } from "@components";
import { usePokemonStore } from "@providers";
import { toast } from "react-toastify";
import { getFromLocalStorageByKey } from "@utils";

export function PokemonGenerator() {

  const startGenRef = useRef<HTMLInputElement>(null);
  const endGenRef = useRef<HTMLInputElement>(null);

  const startGenValueFromLS = getFromLocalStorageByKey("startGen") ?? 1;
  const endGenValueFromLS = getFromLocalStorageByKey("endGen") ?? 8;
  console.log('executin this');

  const defaultStartGenValue
    = isNaN(parseInt(startGenValueFromLS)) ? 1 : isValidInputRange(startGenValueFromLS) ? startGenValueFromLS : 1;

  const defaultEndGenValue
    = isNaN(parseInt(endGenValueFromLS)) ? 1 : isValidInputRange(endGenValueFromLS) ? endGenValueFromLS : 8;

  const handleGameState = usePokemonStore((state) => state.handleCurrentGameState);
  const startNewGame = usePokemonStore((state) => state.setUpNewGame);
  const targetPokemon = usePokemonStore((state) => state.targetPokemon);
  console.log('target', targetPokemon);

  useEffect(() => {
    handleGameState();
  }, [handleGameState]);

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
            startNewGame(startGenValue, endGenValue);
          } else {
            startGenRef.current.value = endGenValue.toString();
            endGenRef.current.value = startGenValue.toString();
            startNewGame(endGenValue, startGenValue);
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

      if (inputValue === '') {
        ref.current.value = '';
        return;
      }

      const numericValue = parseInt(inputValue.replace(/[^\d]/g, ""), 10);

      if (isNaN(numericValue)) {
        ref.current.value = '';
        return;
      }

      if (!isValidInputRange(numericValue)) {
        ref.current.value = '';
        return;
      }

      ref.current.value = numericValue.toString();
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
          defaultValue={defaultStartGenValue}
          onChange={handleFirstInputChange}
        />
        &nbsp;to&nbsp;
        <PokemonGeneratorInput
          ref={endGenRef}
          defaultValue={defaultEndGenValue}
          onChange={handleSecondInputChange}
        />
      </p>
      <button
        className="mt-4 p-2 pr-4 rounded-xl text-[#000000] bg-link font-bold"
        type="button"
        onClick={onNewGameButtonClick}
      >
        <i className="fa fa-play p-2" /> New Game
      </button>
    </div>
  );
}
