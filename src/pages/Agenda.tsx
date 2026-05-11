import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { agendaMockData, type AgendaItem } from "@/data/agendaMockData";

type MainType = "opleidingen" | "events";
type StatusType = "upcoming" | "archief";
type ViewMode = "grid" | "kalender";

const SUBTYPES: Record<MainType, { value: string; label: string }[]> = {
  opleidingen: [
    { value: "dagopleiding", label: "Dagopleiding" },
    { value: "meerdaagse", label: "Meerdaagse" },
    { value: "op-maat", label: "Op maat" },
  ],
  events: [
    { value: "activiteit", label: "Activiteit" },
    { value: "award", label: "Award" },
    { value: "congres", label: "Congres" },
  ],
};

const SUBTYPE_LABEL: Record<string, string> = {
  dagopleiding: "Dagopleiding",
  meerdaagse: "Meerdaagse",
  "op-maat": "Op maat",
  activiteit: "Activiteit",
  award: "Award",
  congres: "Congres",
};

const NL_MONTHS = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const NL_DAYS = ["zo", "ma", "di", "wo", "do", "vr", "za"];

function formatShortDate(iso: string) {
  const d = new Date(iso);
  return `${d.getDate()} ${NL_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
function formatLongDate(iso: string) {
  const d = new Date(iso);
  return `${NL_DAYS[d.getDay()]} ${d.getDate()} ${NL_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
function formatPrice(n: number) {
  return n === 0 ? "Gratis" : `€ ${n.toLocaleString("nl-BE")}`;
}

function dateSummary(item: AgendaItem) {
  if (item.sessies.length === 1) {
    const s = item.sessies[0];
    return `${formatLongDate(s.datum)} — ${s.starttijd}–${s.eindtijd}`;
  }
  const sorted = [...item.sessies].sort((a, b) => a.datum.localeCompare(b.datum));
  return `${item.sessies.length} sessies — ${formatShortDate(sorted[0].datum)} t.e.m. ${formatShortDate(
    sorted[sorted.length - 1].datum,
  )}`;
}

function AgendaCard({ item, onInteresse }: { item: AgendaItem; onInteresse: (item: AgendaItem) => void }) {
  const navigate = useNavigate();
  const earlyBirdActive =
    item.early_bird_vervaldatum &&
    item.early_bird_lid !== undefined &&
    new Date(item.early_bird_vervaldatum) > new Date();

  const goDetail = () => {
    if (item.slug === "marketingstrategie-2026") {
      navigate("/event");
      return;
    }
    const base = item.type === "opleiding" ? "/agenda/opleidingen" : "/agenda/events";
    navigate(`${base}/${item.slug}`);
  };

  return (
    <article
      className="group flex cursor-pointer flex-col overflow-hidden rounded border border-neutral-300 bg-white transition-colors hover:bg-neutral-50"
      onClick={goDetail}
    >
      <div className="relative flex aspect-video w-full items-center justify-center border-b border-dashed border-neutral-400 bg-neutral-200 text-xs text-neutral-500">
        Card image
        <span className="absolute left-3 top-3 rounded border border-neutral-300 bg-white px-2 py-0.5 text-[11px] uppercase tracking-wider text-neutral-600">
          {SUBTYPE_LABEL[item.subtype] ?? item.subtype}
        </span>
        {item.is_archived && (
          <span className="absolute right-3 top-3 rounded border border-neutral-300 bg-white px-2 py-0.5 text-[11px] uppercase tracking-wider text-neutral-600">
            Archief
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold leading-snug text-neutral-900">{item.titel}</h3>
        <p className="text-sm text-neutral-500">{dateSummary(item)}</p>
        <p className="text-sm text-neutral-500">
          {item.locatie_naam}, {item.adres_gemeente}
        </p>

        {!item.is_archived && (
          <div className="text-sm">
            {earlyBirdActive ? (
              <>
                <div className="font-semibold text-neutral-900">{formatPrice(item.early_bird_lid!)} (lid)</div>
                <div className="text-xs text-neutral-500">
                  Early bird t.e.m. {formatShortDate(item.early_bird_vervaldatum!)}
                </div>
              </>
            ) : (
              <div className="text-neutral-600">
                Lid: <span className="font-medium text-neutral-900">{formatPrice(item.prijs_lid ?? 0)}</span>
                {" · "}
                Niet-lid:{" "}
                <span className="font-medium text-neutral-900">{formatPrice(item.prijs_niet_lid ?? 0)}</span>
              </div>
            )}
          </div>
        )}

        <div className="mt-auto pt-2" onClick={(e) => e.stopPropagation()}>
          {!item.is_archived && (
            <button
              onClick={goDetail}
              className="w-full rounded bg-neutral-700 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Inschrijven ›
            </button>
          )}
          {item.is_archived && item.interesse_email_actief && (
            <button
              onClick={() => onInteresse(item)}
              className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
            >
              Houd me op de hoogte
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded border px-4 py-1.5 text-sm transition-colors ${
        active
          ? "border-neutral-700 bg-neutral-700 text-white"
          : "border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100"
      }`}
    >
      {children}
    </button>
  );
}

export default function Agenda() {
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [interesseItem, setInteresseItem] = useState<AgendaItem | null>(null);

  const type = (params.get("type") as MainType) || "opleidingen";
  const status = (params.get("status") as StatusType) || "upcoming";
  const view = (params.get("view") as ViewMode) || "grid";
  const subtypeParam = params.get("subtype");
  const allSubtypes = SUBTYPES[type].map((s) => s.value);
  const selectedSubtypes = subtypeParam ? subtypeParam.split(",").filter(Boolean) : allSubtypes;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  const updateParams = (next: Record<string, string | null>) => {
    const p = new URLSearchParams(params);
    Object.entries(next).forEach(([k, v]) => {
      if (v === null || v === "") p.delete(k);
      else p.set(k, v);
    });
    setParams(p, { replace: true });
  };

  const setType = (t: MainType) => {
    const p = new URLSearchParams(params);
    p.set("type", t);
    p.delete("subtype");
    setParams(p, { replace: true });
  };

  const toggleSubtype = (value: string) => {
    const current = new Set(selectedSubtypes);
    if (current.has(value)) current.delete(value);
    else current.add(value);
    const arr = Array.from(current);
    if (arr.length === 0 || arr.length === allSubtypes.length) {
      updateParams({ subtype: null });
    } else {
      updateParams({ subtype: arr.join(",") });
    }
  };

  const filtered = useMemo(() => {
    const firstDate = (item: AgendaItem) =>
      [...item.sessies].sort((a, b) => a.datum.localeCompare(b.datum))[0]?.datum ?? "";
    return agendaMockData
      .filter((item) => {
        if (type === "opleidingen" && item.type !== "opleiding") return false;
        if (type === "events" && item.type !== "event") return false;
        if (status === "upcoming" && item.is_archived) return false;
        if (status === "archief" && !item.is_archived) return false;
        if (!selectedSubtypes.includes(item.subtype)) return false;
        return true;
      })
      .sort((a, b) => {
        const cmp = firstDate(a).localeCompare(firstDate(b));
        return status === "archief" ? -cmp : cmp;
      });
  }, [type, status, selectedSubtypes]);

  const clearFilters = () => {
    const p = new URLSearchParams();
    p.set("type", type);
    setParams(p, { replace: true });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <MainNavigation />

      {/* Sticky filter sub-nav */}
      <div className="sticky top-0 z-30 border-b border-dashed border-neutral-400 bg-neutral-100">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-3 md:flex-row md:flex-wrap md:items-center md:gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Type</span>
            <FilterButton active={type === "opleidingen"} onClick={() => setType("opleidingen")}>
              Opleidingen
            </FilterButton>
            <FilterButton active={type === "events"} onClick={() => setType("events")}>
              Events
            </FilterButton>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Status</span>
            <FilterButton active={status === "upcoming"} onClick={() => updateParams({ status: "upcoming" })}>
              Upcoming
            </FilterButton>
            <FilterButton active={status === "archief"} onClick={() => updateParams({ status: "archief" })}>
              Archief
            </FilterButton>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Subtype</span>
            {SUBTYPES[type].map((s) => (
              <FilterButton
                key={s.value}
                active={selectedSubtypes.includes(s.value)}
                onClick={() => toggleSubtype(s.value)}
              >
                {s.label}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-[1200px] px-4 py-10">
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded border border-neutral-300">
                <Skeleton className="aspect-video w-full" />
                <div className="space-y-3 p-5">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-9 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <p className="text-neutral-500">Geen resultaten voor deze filters.</p>
            <button onClick={clearFilters} className="text-sm font-medium text-neutral-700 underline underline-offset-4">
              Filters wissen
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            <CalendarView
              items={filtered}
              onSelect={(item) => {
                const base = item.type === "opleiding" ? "/agenda/opleidingen" : "/agenda/events";
                window.location.href = `${base}/${item.slug}`;
              }}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <AgendaCard key={item.id} item={item} onInteresse={setInteresseItem} />
              ))}
            </div>
          </div>
        )}
      </main>

      <InteresseModal item={interesseItem} onClose={() => setInteresseItem(null)} />
    </div>
  );
}

function InteresseModal({ item, onClose }: { item: AgendaItem | null; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (item) {
      setEmail("");
      setSubmitted(false);
    }
  }, [item]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Blijf op de hoogte</DialogTitle>
          <DialogDescription>
            Laat je e-mailadres achter en we laten je weten wanneer{" "}
            {item?.type === "opleiding" ? "deze opleiding" : "dit event"} opnieuw gepland wordt.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="space-y-4">
            <p className="text-sm">Bedankt! We houden je op de hoogte.</p>
            <Button onClick={onClose} className="w-full">
              Sluiten
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              required
              placeholder="jij@voorbeeld.be"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Verstuur
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function CalendarView({ items, onSelect }: { items: AgendaItem[]; onSelect: (item: AgendaItem) => void }) {
  // Anchor to the earliest visible session date so the calendar matches the items below.
  const earliest = useMemo(() => {
    const dates = items.flatMap((i) => i.sessies.map((s) => s.datum)).sort();
    return dates[0] ? new Date(dates[0]) : new Date();
  }, [items]);
  const [anchor, setAnchor] = useState(new Date(earliest.getFullYear(), earliest.getMonth(), 1));

  useEffect(() => {
    setAnchor(new Date(earliest.getFullYear(), earliest.getMonth(), 1));
  }, [earliest]);

  // Build map: yyyy-mm-dd -> AgendaItem[]
  const dateMap = useMemo(() => {
    const m = new Map<string, AgendaItem[]>();
    items.forEach((item) => {
      item.sessies.forEach((s) => {
        const arr = m.get(s.datum) ?? [];
        arr.push(item);
        m.set(s.datum, arr);
      });
    });
    return m;
  }, [items]);

  const months = [0, 1, 2].map((offset) => new Date(anchor.getFullYear(), anchor.getMonth() + offset, 1));

  const prev = () => setAnchor(new Date(anchor.getFullYear(), anchor.getMonth() - 1, 1));
  const next = () => setAnchor(new Date(anchor.getFullYear(), anchor.getMonth() + 1, 1));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={prev} className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100">
          ← Vorige
        </button>
        <div className="text-sm font-medium text-neutral-500">3-maanden overzicht</div>
        <button onClick={next} className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100">
          Volgende →
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {months.map((m) => (
          <MonthGrid key={`${m.getFullYear()}-${m.getMonth()}`} month={m} dateMap={dateMap} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

const NL_MONTH_LONG = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
const NL_DAY_SHORT = ["ma", "di", "wo", "do", "vr", "za", "zo"];

function MonthGrid({
  month,
  dateMap,
  onSelect,
}: {
  month: Date;
  dateMap: Map<string, AgendaItem[]>;
  onSelect: (item: AgendaItem) => void;
}) {
  const year = month.getFullYear();
  const m = month.getMonth();
  const firstDay = new Date(year, m, 1);
  // ISO Monday=0
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, m + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, m, d));
  while (cells.length % 7 !== 0) cells.push(null);

  const todayKey = new Date().toISOString().slice(0, 10);

  return (
    <div className="rounded border border-neutral-300 bg-white p-4">
      <div className="mb-3 text-center text-sm font-semibold text-neutral-900">
        {NL_MONTH_LONG[m]} {year}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-medium uppercase text-neutral-500">
        {NL_DAY_SHORT.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((c, i) => {
          if (!c) return <div key={i} className="aspect-square" />;
          const key = `${c.getFullYear()}-${String(c.getMonth() + 1).padStart(2, "0")}-${String(c.getDate()).padStart(2, "0")}`;
          const dayItems = dateMap.get(key) ?? [];
          const has = dayItems.length > 0;
          const isToday = key === todayKey;
          return (
            <div
              key={i}
              className={`relative flex aspect-square flex-col items-center justify-start rounded border p-1 text-[11px] ${
                has
                  ? "border-neutral-400 bg-neutral-100 cursor-pointer hover:bg-neutral-200 text-neutral-800"
                  : "border-transparent text-neutral-400"
              } ${isToday ? "ring-1 ring-neutral-700" : ""}`}
              onClick={() => has && dayItems.length === 1 && onSelect(dayItems[0])}
              title={has ? dayItems.map((i) => i.titel).join("\n") : undefined}
            >
              <span className="font-medium">{c.getDate()}</span>
              {has && (
                <div className="mt-auto flex w-full flex-wrap justify-center gap-0.5">
                  {dayItems.slice(0, 3).map((it, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 w-1.5 rounded-full ${it.type === "opleiding" ? "bg-neutral-700" : "bg-neutral-400"}`}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
