export function HeaderInfo() {
  return (
    <>
      <h1 className="text-foreground text-center font-extrabold text-3xl">
        squirdle2
      </h1>

      <h2 className="text-foreground text-center font-extrabold text-xl">
        A Pokémon Wordle-like by&nbsp;
        <a
          className="text-link underline text-center"
          href="https://github.com/carlosferreirahd"
          target="_blank"
          rel="noopener noreferrer"
        >
          carlosferreirahd
        </a>
      </h2>

      <h3 className="text-foreground text-center font-extrabold text-lg">
        <p>I'm thinking of a Pokémon. Guess which! You have 7 guesses. <span className="text-center text-link underline">Emoji Key</span></p>
        <p className="text-center text-link underline">Advanced filters guide</p>
      </h3>
    </>
  );
}
