import {
  HeaderInfo,
  Padded,
  GuessingForm,
  GuessesList,
} from "@components";

export function Game() {
  return (
    <main className="flex flex-col items-center gap-4">
      <HeaderInfo />
      <Padded>
        <GuessesList />
        <GuessingForm />
      </Padded>
    </main>
  );
}
