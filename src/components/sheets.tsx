import type { ReactNode } from "react";
import { ArrowLeft, Bot, Dices, PenLine, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Portrait } from "@/components/portrait";
import { DmTemplatePicker, PartyTemplatePicker } from "@/components/agent-template-picker";
import { classMindSkeleton } from "@/lib/game/agent-templates";
import { ANCESTRY_LIST, CLASS_LIST } from "@/lib/game/characters";
import { ABILITY_LABEL, ANCESTRY_LABEL, CLASS_LABEL, SKILLS, VEIL_LABEL, type Ability } from "@/lib/game/types";
import { abilityMod, modLabel } from "@/lib/game/rules";
import { useTableStore } from "@/lib/game/store";
import { cn } from "@/lib/utils";

export function Sheets() {
  const table = useTableStore((s) => (s.currentId ? s.tables[s.currentId] : null));
  const sheetIndex = useTableStore((s) => s.sheetIndex);
  const set = useTableStore.setState;
  const applyAgentTemplate = useTableStore((s) => s.applyAgentTemplate);
  const applyDmSeatTemplate = useTableStore((s) => s.applyDmSeatTemplate);
  const updateCharacter = useTableStore((s) => s.updateCharacter);
  const updateDm = useTableStore((s) => s.updateDm);
  const rerollCharacter = useTableStore((s) => s.rerollCharacter);
  const aiFillCharacter = useTableStore((s) => s.aiFillCharacter);
  const enterPlay = useTableStore((s) => s.enterPlay);
  const abandon = useTableStore((s) => s.abandon);
  const busy = useTableStore((s) => s.busy);
  const busyLabel = useTableStore((s) => s.busyLabel);

  if (!table) return null;
  const c = table.party[sheetIndex] ?? table.party[0];
  if (!c) return null;

  return (
    <div className="min-h-dvh bg-bg">
      <div className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8">
        <Button variant="ghost" size="sm" onClick={abandon} className="-ml-2">
          <ArrowLeft /> 离开
        </Button>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted uppercase">{table.name}</p>
            <h1 className="mt-1 font-display text-4xl text-fg">角色卡</h1>
          </div>
          <Badge>
            {table.dm.controller === "agent" ? "智体 DM" : "人类 DM"} · {table.dm.name}
          </Badge>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
          {table.party.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => set({ sheetIndex: i })}
              className={cn(
                "flex min-w-28 items-center gap-2 rounded-lg px-3 py-2 text-left shadow-[var(--shadow-border)]",
                i === sheetIndex ? "bg-elevated" : "bg-surface",
              )}
            >
              <Portrait ancestry={p.ancestry} classId={p.classId} size={28} />
              <span className="min-w-0">
                <span className="block truncate text-sm text-fg">{p.name}</span>
                <span className="block text-[11px] text-muted">
                  {p.controller === "human" ? "人类" : "智体"}
                  {p.agentMind?.title ? ` · ${p.agentMind.title}` : ""}
                </span>
              </span>
            </button>
          ))}
        </div>

        {c.controller === "agent" ? (
          <section className="mt-6">
            <p className="text-xs font-medium tracking-wide text-muted">智体指令卡</p>
            <p className="mt-1 text-xs text-muted">
              套用一张完整人物。声口、战术、驱力、习惯、边界会写进扮演提示。
            </p>
            <div className="mt-3">
              <PartyTemplatePicker
                value={c.agentMind?.templateId ?? ""}
                onPick={(id) => applyAgentTemplate(c.id, id)}
                dossier={false}
              />
            </div>
            <button
              type="button"
              className="mt-2 text-xs text-muted hover:text-fg"
              onClick={() => updateCharacter(c.id, { agentMind: classMindSkeleton(c.classId) })}
            >
              自拟骨架：保留姓名与职业，只填该职业的指令
            </button>
          </section>
        ) : null}

        <article className="mt-6 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
          <header className="flex gap-4">
            <Portrait ancestry={c.ancestry} classId={c.classId} size={72} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-muted">
                {c.controller === "human" ? <User className="size-3.5" /> : <Bot className="size-3.5" />}
                <span className="text-xs">{c.playerLabel}</span>
              </div>
              <Input
                className="mt-1 h-12 bg-transparent px-0 text-2xl font-display shadow-none"
                value={c.name}
                onChange={(e) => updateCharacter(c.id, { name: e.target.value })}
              />
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                <select
                  className="h-10 rounded-md bg-inset px-2 text-sm text-fg shadow-[var(--shadow-border)]"
                  value={c.ancestry}
                  onChange={(e) =>
                    updateCharacter(c.id, { ancestry: e.target.value as typeof c.ancestry })
                  }
                >
                  {ANCESTRY_LIST.map((a) => (
                    <option key={a} value={a}>
                      {ANCESTRY_LABEL[a]}
                    </option>
                  ))}
                </select>
                <select
                  className="h-10 rounded-md bg-inset px-2 text-sm text-fg shadow-[var(--shadow-border)]"
                  value={c.classId}
                  onChange={(e) =>
                    updateCharacter(c.id, { classId: e.target.value as typeof c.classId })
                  }
                >
                  {CLASS_LIST.map((cl) => (
                    <option key={cl} value={cl}>
                      {CLASS_LABEL[cl]}
                    </option>
                  ))}
                </select>
                <Input
                  value={c.background}
                  onChange={(e) => updateCharacter(c.id, { background: e.target.value })}
                  placeholder="背景"
                />
              </div>
            </div>
          </header>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {(Object.keys(c.abilities) as Ability[]).map((k) => (
              <label key={k} className="rounded-lg bg-inset p-2 text-center shadow-[var(--shadow-border)]">
                <span className="block text-[11px] text-muted">{ABILITY_LABEL[k]}</span>
                <input
                  type="number"
                  min={3}
                  max={20}
                  className="mt-1 w-full bg-transparent text-center font-display text-2xl tabular text-fg outline-none"
                  value={c.abilities[k]}
                  onChange={(e) =>
                    updateCharacter(c.id, {
                      abilities: { ...c.abilities, [k]: Number(e.target.value) },
                    })
                  }
                />
                <span className="block text-xs text-muted tabular">
                  {modLabel(abilityMod(c.abilities[k]))}
                </span>
              </label>
            ))}
          </div>

          {table.edition === "veil" ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {(Object.keys(c.veil) as (keyof typeof c.veil)[]).map((k) => (
                <Badge key={k}>
                  {VEIL_LABEL[k]} {modLabel(c.veil[k])}
                </Badge>
              ))}
            </div>
          ) : null}

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <Stat label="HP" value={`${c.hp}/${c.maxHp}`} />
            <Stat label="AC" value={String(c.ac)} />
            <Stat label="熟练" value={`+${c.proficiency}`} />
          </div>

          <div className="mt-6">
            <Label>受训技能</Label>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {SKILLS.map((s) => {
                const on = c.skillProfs.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() =>
                      updateCharacter(c.id, {
                        skillProfs: on
                          ? c.skillProfs.filter((x) => x !== s.id)
                          : [...c.skillProfs, s.id],
                      })
                    }
                    className={cn(
                      "h-8 rounded-full px-2.5 text-xs shadow-[var(--shadow-border)]",
                      on ? "bg-primary text-primary-fg" : "bg-inset text-muted",
                    )}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Field label="外形">
              <Textarea
                rows={2}
                value={c.appearance}
                onChange={(e) => updateCharacter(c.id, { appearance: e.target.value })}
              />
            </Field>
            <Field label="性格">
              <Textarea
                rows={2}
                value={c.personality}
                onChange={(e) => updateCharacter(c.id, { personality: e.target.value })}
              />
            </Field>
            <Field label="理想">
              <Input value={c.ideal} onChange={(e) => updateCharacter(c.id, { ideal: e.target.value })} />
            </Field>
            <Field label="羁绊">
              <Input value={c.bond} onChange={(e) => updateCharacter(c.id, { bond: e.target.value })} />
            </Field>
            <Field label="缺陷">
              <Input value={c.flaw} onChange={(e) => updateCharacter(c.id, { flaw: e.target.value })} />
            </Field>
            <Field label="装备（逗号分隔）">
              <Input
                value={c.inventory.join("，")}
                onChange={(e) =>
                  updateCharacter(c.id, {
                    inventory: e.target.value.split(/[，,]/).map((x) => x.trim()).filter(Boolean),
                  })
                }
              />
            </Field>
          </div>

          {c.controller === "agent" ? (
            <div className="mt-6 rounded-xl bg-inset p-4 shadow-[var(--shadow-border)]">
              <p className="text-xs font-medium tracking-wide text-muted">
                智体指令{c.agentMind?.title ? ` · ${c.agentMind.title}` : ""}
              </p>
              <p className="mt-1 text-xs text-subtle">这些字段会直接进入扮演提示，决定智体怎么说话、怎么动手、什么不做。</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Field label="声口">
                  <Textarea
                    rows={2}
                    value={c.agentMind?.voice ?? ""}
                    onChange={(e) =>
                      updateCharacter(c.id, { agentMind: { ...c.agentMind, voice: e.target.value } })
                    }
                  />
                </Field>
                <Field label="战术">
                  <Textarea
                    rows={2}
                    value={c.agentMind?.tactics ?? ""}
                    onChange={(e) =>
                      updateCharacter(c.id, { agentMind: { ...c.agentMind, tactics: e.target.value } })
                    }
                  />
                </Field>
                <Field label="驱力">
                  <Input
                    value={c.agentMind?.drive ?? ""}
                    onChange={(e) =>
                      updateCharacter(c.id, { agentMind: { ...c.agentMind, drive: e.target.value } })
                    }
                  />
                </Field>
                <Field label="习惯">
                  <Input
                    value={c.agentMind?.tell ?? ""}
                    onChange={(e) =>
                      updateCharacter(c.id, { agentMind: { ...c.agentMind, tell: e.target.value } })
                    }
                  />
                </Field>
              </div>
              <Field label="边界">
                <Textarea
                  className="mt-2"
                  rows={2}
                  value={c.agentMind?.boundary ?? ""}
                  onChange={(e) =>
                    updateCharacter(c.id, { agentMind: { ...c.agentMind, boundary: e.target.value } })
                  }
                />
              </Field>
            </div>
          ) : null}

          <Field label="往事">
            <Textarea
              className="mt-2"
              rows={3}
              value={c.backstory}
              onChange={(e) => updateCharacter(c.id, { backstory: e.target.value })}
            />
          </Field>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => rerollCharacter(c.id)}>
              <Dices /> 重掷属性
            </Button>
            <Button variant="outline" disabled={busy} onClick={() => void aiFillCharacter(c.id)}>
              <PenLine /> {busy ? busyLabel : "智体填写此卡"}
            </Button>
          </div>
        </article>

        {table.dm.controller === "agent" ? (
          <section className="mt-8 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
            <p className="text-xs font-medium tracking-wide text-muted">DM 指令卡</p>
            <p className="mt-1 text-xs text-muted">
              {table.dm.name}
              {table.dm.title ? ` · ${table.dm.title}` : ""}。声口与节奏约束智体地下城主。
            </p>
            <div className="mt-3">
              <DmTemplatePicker
                value={table.dm.templateId}
                onPick={(id) => applyDmSeatTemplate(id)}
                dossier={false}
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Field label="声口">
                <Textarea
                  rows={2}
                  value={table.dm.voice}
                  onChange={(e) => updateDm({ voice: e.target.value })}
                />
              </Field>
              <Field label="节奏">
                <Textarea
                  rows={2}
                  value={table.dm.pacing}
                  onChange={(e) => updateDm({ pacing: e.target.value })}
                />
              </Field>
            </div>
            <Field label="边界">
              <Textarea
                rows={2}
                value={table.dm.boundary}
                onChange={(e) => updateDm({ boundary: e.target.value })}
              />
            </Field>
            <Field label="人格">
              <Textarea
                rows={2}
                value={table.dm.persona}
                onChange={(e) => updateDm({ persona: e.target.value })}
              />
            </Field>
          </section>
        ) : null}

        <div className="mt-8 flex justify-end">
          <Button size="lg" onClick={() => void enterPlay()}>
            入席开灯
          </Button>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-inset px-2 py-3 shadow-[var(--shadow-border)]">
      <p className="text-[11px] text-muted">{label}</p>
      <p className="font-display text-2xl tabular text-fg">{value}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-4 space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
