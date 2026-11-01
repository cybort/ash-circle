import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing";
import { PlayTable } from "@/components/play-table";
import { Setup } from "@/components/setup";
import { Sheets } from "@/components/sheets";
import { useTableStore } from "@/lib/game/store";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const screen = useTableStore((s) => s.screen);

  useEffect(() => {
    void useTableStore.persist.rehydrate();
  }, []);

  if (screen === "setup") return <Setup />;
  if (screen === "sheets") return <Sheets />;
  if (screen === "play") return <PlayTable />;
  return <Landing />;
}
