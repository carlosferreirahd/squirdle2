import {
  HeaderInfo,
  Padded,
  GuessingForm,
} from "@components";

export function Game() {
  return (
    <main className="flex flex-col items-center gap-4">
      <HeaderInfo />
      <Padded>
        <GuessingForm />
      </Padded>
    </main>
  );
}
