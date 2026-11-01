import { ArrowRight, BookUser, Dices, ScrollText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TableMark } from "@/components/table-mark";
import { useTableStore } from "@/lib/game/store";

export function Landing() {
  const tables = useTableStore((s) => s.tables);
  const newQuickTable = useTableStore((s) => s.newQuickTable);
  const beginSetup = useTableStore((s) => s.beginSetup);
  const resume = useTableStore((s) => s.resume);
  const deleteTable = useTableStore((s) => s.deleteTable);
  const list = Object.values(tables).sort((a, b) => b.updatedAt - a.updatedAt);

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in oklab, var(--color-fg) 7%, transparent), transparent 70%)",
        }}
      />
      <main className="relative mx-auto flex w-full max-w-5xl flex-col px-5 pb-16 pt-10 sm:px-8 sm:pt-16">
        <p className="ash-enter font-sans text-xs tracking-[0.28em] text-muted uppercase">
          Tabletop · Human & Agent
        </p>
        <h1 className="ash-enter ash-enter-delay-1 mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl">
          灰烬圆桌
        </h1>
        <p className="ash-enter ash-enter-delay-2 mt-2 font-display text-xl italic text-muted sm:text-2xl">
          ASHCIRCLE
        </p>
        <p className="ash-enter ash-enter-delay-3 mt-6 max-w-xl text-base leading-relaxed text-muted">
          地下城主与每一名小队成员，都可以由人类或智体入座。智体先套指令卡（声口、战术、驱力、习惯、边界）；规则版可调；场景可用文字、字符图或像素呈现。
        </p>

        <div className="ash-enter ash-enter-delay-4 mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={newQuickTable} className="min-h-12">
            立刻开桌
            <ArrowRight />
          </Button>
          <Button size="lg" variant="secondary" onClick={beginSetup} className="min-h-12">
            布置新桌
          </Button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <TableMark className="mx-auto w-full max-w-md text-fg" />
          <ul className="grid gap-3">
            {[
              {
                icon: Users,
                title: "席位自由",
                body: "DM 与每名队员单独选择人类或智体。可热座，可观剧。",
              },
              {
                icon: BookUser,
                title: "智体指令卡",
                body: "声口、战术、驱力、习惯、边界。灰羽、盐灯、灯芯等模板直接写进扮演提示。",
              },
              {
                icon: ScrollText,
                title: "三套规则",
                body: "余烬 5e、帷幕 2d6、灰灯三围。致命度与难度可滑。",
              },
              {
                icon: Dices,
                title: "连载场景",
                body: "智体 DM 推进剧情；骰子在本地掷出，从不暗箱。",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]"
              >
                <item.icon className="mt-0.5 size-5 text-primary" strokeWidth={1.6} />
                <div>
                  <p className="font-medium text-fg">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {list.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-display text-2xl text-fg">未散的桌子</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {list.map((t) => (
                <li
                  key={t.id}
                  className="flex items-start justify-between gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]"
                >
                  <button
                    type="button"
                    onClick={() => resume(t.id)}
                    className="min-w-0 flex-1 text-left"
                  >
                    <p className="truncate font-medium text-fg">{t.name}</p>
                    <p className="mt-1 text-xs text-muted">
                      {t.campaignTitle} · {t.party.length} 人小队 · {t.presentation}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <Badge>{t.edition}</Badge>
                      <Badge>{t.phase === "ended" ? "已终局" : "进行中"}</Badge>
                    </div>
                  </button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteTable(t.id)}
                    className="shrink-0 text-subtle"
                  >
                    撤桌
                  </Button>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </div>
  );
}
