import React, { useEffect } from 'react';
import { Game } from '@pages';
import { usePokemonStore } from '@providers';

function App() {

  const pickRandomPokemon = usePokemonStore((state) => state.pickRandomPokemon);

  useEffect(() => {
    pickRandomPokemon();
  }, [pickRandomPokemon]);

  return (
    <div className="flex justify-center min-h-screen bg-background p-8 sm:px-1">
      <Game />
    </div>
  );
}

export default App;
