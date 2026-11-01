import type { ReactNode } from "react";
import { ArrowLeft, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DmTemplatePicker, PartyTemplatePicker, suggestTemplateId } from "@/components/agent-template-picker";
import { ANCESTRY_LIST, CLASS_LIST } from "@/lib/game/characters";
import { dmTemplate, partyTemplate } from "@/lib/game/agent-templates";
import { defaultDraft, useTableStore } from "@/lib/game/store";
import {
  ANCESTRY_LABEL,
  CLASS_LABEL,
  EDITION_META,
  type ClassId,
  type Controller,
  type Presentation,
  type RuleEdition,
  type AncestryId,
} from "@/lib/game/types";
import { cn } from "@/lib/utils";

const MOD_LABELS = [
  { key: "lethality" as const, name: "致命度", low: "厚血", high: "易死" },
  { key: "magic" as const, name: "魔法浓度", low: "低魔", high: "奇诡" },
  { key: "difficulty" as const, name: "检定难度", low: "宽松", high: "严苛" },
  { key: "combatFreq" as const, name: "战斗密度", low: "稀", high: "密" },
  { key: "agentVoice" as const, name: "智体主动性", low: "克制", high: "抢戏" },
];

export function Setup() {
  const draft = useTableStore((s) => s.draft);
  const setDraft = useTableStore((s) => s.setDraft);
  const setScreen = useTableStore((s) => s.setScreen);
  const materializeDraft = useTableStore((s) => s.materializeDraft);

  return (
    <div className="min-h-dvh bg-bg">
      <div className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8">
        <Button variant="ghost" size="sm" onClick={() => setScreen("landing")} className="-ml-2">
          <ArrowLeft /> 返回
        </Button>
        <h1 className="mt-4 font-display text-4xl text-fg">布置圆桌</h1>
        <p className="mt-2 text-sm text-muted">规则、呈现、席位。角色卡在下一页填写。</p>

        <section className="mt-8 space-y-3">
          <Field label="桌名">
            <Input value={draft.name} onChange={(e) => setDraft({ name: e.target.value })} />
          </Field>
          <Field label="战役种子（地点、冲突、调性）">
            <Textarea
              rows={3}
              value={draft.seed}
              onChange={(e) => setDraft({ seed: e.target.value })}
            />
          </Field>
          <Field label="叙事语气">
            <Input value={draft.tone} onChange={(e) => setDraft({ tone: e.target.value })} />
          </Field>
        </section>

        <h2 className="mt-10 font-display text-2xl text-fg">规则版</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {(Object.keys(EDITION_META) as RuleEdition[]).map((key) => {
            const m = EDITION_META[key];
            const on = draft.edition === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setDraft({ edition: key })}
                className={cn(
                  "rounded-xl p-4 text-left shadow-[var(--shadow-border)] transition-colors",
                  on ? "bg-elevated" : "bg-surface hover:bg-elevated",
                )}
              >
                <p className="font-medium text-fg">{m.name}</p>
                <p className="mt-1 text-xs text-muted">{m.dice}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.blurb}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 space-y-5 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          {MOD_LABELS.map((m) => (
            <div key={m.key}>
              <div className="mb-2 flex items-center justify-between text-xs text-muted">
                <span>{m.name}</span>
                <span className="tabular">
                  {m.low} · {draft.mods[m.key]} · {m.high}
                </span>
              </div>
              <Slider
                min={1}
                max={5}
                step={1}
                value={[draft.mods[m.key]]}
                onValueChange={([v]) =>
                  setDraft({ mods: { ...draft.mods, [m.key]: v ?? 3 } })
                }
              />
            </div>
          ))}
        </div>

        <h2 className="mt-10 font-display text-2xl text-fg">呈现</h2>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {(
            [
              ["text", "文字"],
              ["ascii", "字符图"],
              ["pixel", "像素"],
            ] as [Presentation, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setDraft({ presentation: key })}
              className={cn(
                "h-12 rounded-lg text-sm shadow-[var(--shadow-border)]",
                draft.presentation === key ? "bg-primary text-primary-fg" : "bg-surface text-fg",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <h2 className="mt-10 font-display text-2xl text-fg">席位</h2>
        <p className="mt-1 text-sm text-muted">
          小队人数 {draft.partySize}。智体席位先选指令卡；人类席位只定血统与职业。
        </p>
        <div className="mt-4">
          <Slider
            min={1}
            max={4}
            step={1}
            value={[draft.partySize]}
            onValueChange={([v]) => setDraft({ partySize: v ?? 3 })}
          />
        </div>

        <div className="mt-6 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
          <p className="text-xs font-medium tracking-wide text-muted">地下城主</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <SeatToggle
              value={draft.dmController}
              onChange={(v) =>
                setDraft({
                  dmController: v,
                  dmTemplateId: v === "agent" ? draft.dmTemplateId || "wick" : "",
                })
              }
            />
            <Input
              className="max-w-40"
              value={draft.dmName}
              onChange={(e) => setDraft({ dmName: e.target.value, dmTemplateId: "" })}
              placeholder="DM 名"
            />
          </div>
          {draft.dmController === "agent" ? (
            <div className="mt-3">
              <p className="mb-2 text-xs text-muted">指令卡：声口、节奏、边界。</p>
              <DmTemplatePicker
                value={draft.dmTemplateId}
                onPick={(id) => {
                  const t = dmTemplate(id);
                  if (!t) return;
                  setDraft({
                    dmTemplateId: id,
                    dmName: t.name,
                    dmPersona: t.persona,
                  });
                }}
              />
            </div>
          ) : null}
          <Textarea
            className="mt-3"
            rows={2}
            value={draft.dmPersona}
            onChange={(e) => setDraft({ dmPersona: e.target.value })}
            placeholder="DM 人格"
          />
        </div>

        <ul className="mt-4 space-y-3">
          {draft.seats.map((seat, i) => (
            <li key={i} className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
              <div className="flex items-center justify-between">
                <p className="text-sm text-fg">队员 {i + 1}</p>
                <Badge>{seat.controller === "human" ? "人类" : "智体"}</Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <SeatToggle
                  value={seat.controller}
                  onChange={(v) => {
                    const seats = draft.seats.map((s, j) =>
                      j === i
                        ? {
                            ...s,
                            controller: v,
                            playerLabel: v === "human" ? "你" : "智体",
                            templateId: v === "agent" ? s.templateId || suggestTemplateId(s.classId) : "",
                          }
                        : s,
                    );
                    setDraft({ seats });
                  }}
                />
              </div>
              {seat.controller === "agent" ? (
                <div className="mt-3">
                  <p className="mb-2 text-xs text-muted">指令卡：声口、战术、驱力、习惯、边界。</p>
                  <PartyTemplatePicker
                    value={seat.templateId}
                    onPick={(id) => {
                      const t = partyTemplate(id);
                      const seats = draft.seats.map((s, j) =>
                        j === i
                          ? {
                              ...s,
                              templateId: id,
                              classId: t?.classId ?? s.classId,
                              ancestry: t?.ancestry ?? s.ancestry,
                            }
                          : s,
                      );
                      setDraft({ seats });
                    }}
                  />
                </div>
              ) : (
              <div className="mt-3 grid grid-cols-2 gap-2">
                <select
                  className="h-11 rounded-md bg-inset px-3 text-sm text-fg shadow-[var(--shadow-border)]"
                  value={seat.ancestry}
                  onChange={(e) => {
                    const seats = draft.seats.map((s, j) =>
                      j === i ? { ...s, ancestry: e.target.value as AncestryId } : s,
                    );
                    setDraft({ seats });
                  }}
                >
                  {ANCESTRY_LIST.map((a) => (
                    <option key={a} value={a}>
                      {ANCESTRY_LABEL[a]}
                    </option>
                  ))}
                </select>
                <select
                  className="h-11 rounded-md bg-inset px-3 text-sm text-fg shadow-[var(--shadow-border)]"
                  value={seat.classId}
                  onChange={(e) => {
                    const seats = draft.seats.map((s, j) =>
                      j === i ? { ...s, classId: e.target.value as ClassId } : s,
                    );
                    setDraft({ seats });
                  }}
                >
                  {CLASS_LIST.map((c) => (
                    <option key={c} value={c}>
                      {CLASS_LABEL[c]}
                    </option>
                  ))}
                </select>
              </div>
              )}
            </li>
          ))}
        </ul>

        <Separator className="my-8" />
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={() => setDraft(defaultDraft())}>
            重置草案
          </Button>
          <Button onClick={materializeDraft}>
            填写角色卡
          </Button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function SeatToggle({
  value,
  onChange,
}: {
  value: Controller;
  onChange: (v: Controller) => void;
}) {
  return (
    <div className="inline-flex rounded-md bg-inset p-1 shadow-[var(--shadow-border)]">
      <button
        type="button"
        onClick={() => onChange("human")}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-sm px-3 text-sm",
          value === "human" ? "bg-elevated text-fg" : "text-muted",
        )}
      >
        <User className="size-3.5" /> 人类
      </button>
      <button
        type="button"
        onClick={() => onChange("agent")}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-sm px-3 text-sm",
          value === "agent" ? "bg-elevated text-fg" : "text-muted",
        )}
      >
        <Bot className="size-3.5" /> 智体
      </button>
    </div>
  );
}
