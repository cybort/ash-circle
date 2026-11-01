import type { ReactNode } from "react";
import { Portrait } from "@/components/portrait";
import {
  CLASS_DEFAULT_TEMPLATE,
  DM_TEMPLATES,
  PARTY_TEMPLATES,
  dmTemplate,
  partyTemplate,
  type DmTemplate,
  type PartyTemplate,
} from "@/lib/game/agent-templates";
import { CLASS_LABEL } from "@/lib/game/types";
import { cn } from "@/lib/utils";

export function PartyTemplatePicker({
  value,
  onPick,
  dossier = true,
}: {
  value: string;
  onPick: (id: string) => void;
  dossier?: boolean;
}) {
  const selected = partyTemplate(value);
  return (
    <div>
      <ul className="flex gap-2 overflow-x-auto pb-1">
        {PARTY_TEMPLATES.map((t) => (
          <li key={t.id} className="shrink-0">
            <TemplateCard
              templateId={t.id}
              active={value === t.id}
              onClick={() => onPick(t.id)}
              portrait={<Portrait ancestry={t.ancestry} classId={t.classId} size={36} />}
              name={t.name}
              meta={`${t.title} · ${CLASS_LABEL[t.classId]}`}
              blurb={t.mind.tell || t.blurb}
            />
          </li>
        ))}
      </ul>
      {dossier && selected ? (
        <MindDossier
          name={selected.name}
          title={`${selected.title} · ${CLASS_LABEL[selected.classId]}`}
          rows={[
            { label: "声口", value: selected.mind.voice },
            { label: "战术", value: selected.mind.tactics },
            { label: "驱力", value: selected.mind.drive },
            { label: "习惯", value: selected.mind.tell },
            { label: "边界", value: selected.mind.boundary },
          ]}
        />
      ) : null}
    </div>
  );
}

export function DmTemplatePicker({
  value,
  onPick,
  dossier = true,
}: {
  value: string;
  onPick: (id: string) => void;
  dossier?: boolean;
}) {
  const selected = dmTemplate(value);
  return (
    <div>
      <ul className="flex gap-2 overflow-x-auto pb-1">
        {DM_TEMPLATES.map((t) => (
          <li key={t.id} className="shrink-0">
            <TemplateCard
              templateId={t.id}
              active={value === t.id}
              onClick={() => onPick(t.id)}
              name={t.name}
              meta={t.title}
              blurb={t.blurb}
            />
          </li>
        ))}
      </ul>
      {dossier && selected ? (
        <MindDossier
          name={selected.name}
          title={selected.title}
          rows={[
            { label: "声口", value: selected.voice },
            { label: "节奏", value: selected.pacing },
            { label: "边界", value: selected.boundary },
          ]}
        />
      ) : null}
    </div>
  );
}

export function MindDossier({
  name,
  title,
  rows,
}: {
  name: string;
  title: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="mt-3 rounded-xl bg-inset p-4 shadow-[var(--shadow-border)]">
      <p className="font-display text-lg leading-tight text-fg">{name}</p>
      <p className="mt-0.5 text-xs tracking-wide text-muted">{title}</p>
      <dl className="mt-3 space-y-2.5">
        {rows
          .filter((r) => r.value)
          .map((r) => (
            <div key={r.label}>
              <dt className="text-xs tracking-wide text-subtle">{r.label}</dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-fg">{r.value}</dd>
            </div>
          ))}
      </dl>
    </div>
  );
}

function TemplateCard({
  templateId,
  active,
  onClick,
  portrait,
  name,
  meta,
  blurb,
}: {
  templateId: string;
  active: boolean;
  onClick: () => void;
  portrait?: ReactNode;
  name: string;
  meta: string;
  blurb: string;
}) {
  return (
    <button
      type="button"
      data-template={templateId}
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "flex min-h-24 w-48 flex-col rounded-lg p-3 text-left shadow-[var(--shadow-border)]",
        active ? "bg-elevated" : "bg-inset hover:bg-elevated",
      )}
    >
      <span className="flex items-center gap-2">
        {portrait}
        <span className="min-w-0">
          <span className="block truncate font-display text-base leading-tight text-fg">{name}</span>
          <span className="mt-0.5 block truncate text-xs text-muted">{meta}</span>
        </span>
      </span>
      <span className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">{blurb}</span>
    </button>
  );
}

export function suggestTemplateId(classId: PartyTemplate["classId"]) {
  return CLASS_DEFAULT_TEMPLATE[classId];
}

export type { PartyTemplate, DmTemplate };
