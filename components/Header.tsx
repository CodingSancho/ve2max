import { ThemeButton } from "./ui/theme-button";

export function Header() {
  return (
    <div className="flex flex-row mt-6 items-center">
      <div className="basis-3/4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Remnant Protocol
        </h1>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          In the ashes of tomorrow, every completed task is a spark of hope.
        </blockquote>
      </div>
      <div className="basis-1/4">
        <ThemeButton />
      </div>
    </div>
  );
}
