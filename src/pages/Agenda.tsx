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
    const base = item.type === "opleiding" ? "/agenda/opleidingen" : "/agenda/events";
    navigate(`${base}/${item.slug}`);
  };

  return (
    <article
      className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"
      onClick={goDetail}
    >
      <div className="relative aspect-video w-full bg-muted">
        <Badge variant="secondary" className="absolute left-3 top-3">
          {SUBTYPE_LABEL[item.subtype] ?? item.subtype}
        </Badge>
        {item.is_archived && (
          <Badge variant="outline" className="absolute right-3 top-3 bg-background">
            Archief
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold leading-snug">{item.titel}</h3>
        <p className="text-sm text-muted-foreground">{dateSummary(item)}</p>
        <p className="text-sm text-muted-foreground">
          {item.locatie_naam}, {item.adres_gemeente}
        </p>

        {!item.is_archived && (
          <div className="text-sm">
            {earlyBirdActive ? (
              <>
                <div className="font-semibold">{formatPrice(item.early_bird_lid!)} (lid)</div>
                <div className="text-xs text-muted-foreground">
                  Early bird t.e.m. {formatShortDate(item.early_bird_vervaldatum!)}
                </div>
              </>
            ) : (
              <div className="text-muted-foreground">
                Lid: <span className="font-semibold text-foreground">{formatPrice(item.prijs_lid ?? 0)}</span>
                {" · "}
                Niet-lid:{" "}
                <span className="font-semibold text-foreground">{formatPrice(item.prijs_niet_lid ?? 0)}</span>
              </div>
            )}
          </div>
        )}

        <div className="mt-auto pt-2" onClick={(e) => e.stopPropagation()}>
          {!item.is_archived && (
            <Button onClick={goDetail} className="w-full">
              Inschrijven
            </Button>
          )}
          {item.is_archived && item.interesse_email_actief && (
            <Button variant="outline" className="w-full" onClick={() => onInteresse(item)}>
              Houd me op de hoogte
            </Button>
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
      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:bg-accent"
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
    return agendaMockData.filter((item) => {
      if (type === "opleidingen" && item.type !== "opleiding") return false;
      if (type === "events" && item.type !== "event") return false;
      if (status === "upcoming" && item.is_archived) return false;
      if (status === "archief" && !item.is_archived) return false;
      if (!selectedSubtypes.includes(item.subtype)) return false;
      return true;
    });
  }, [type, status, selectedSubtypes]);

  const clearFilters = () => {
    const p = new URLSearchParams();
    p.set("type", type);
    setParams(p, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavigation />

      {/* Sticky filter sub-nav */}
      <div className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-3 md:flex-row md:flex-wrap md:items-center md:gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Type</span>
            <FilterButton active={type === "opleidingen"} onClick={() => setType("opleidingen")}>
              Opleidingen
            </FilterButton>
            <FilterButton active={type === "events"} onClick={() => setType("events")}>
              Events
            </FilterButton>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</span>
            <FilterButton active={status === "upcoming"} onClick={() => updateParams({ status: "upcoming" })}>
              Upcoming
            </FilterButton>
            <FilterButton active={status === "archief"} onClick={() => updateParams({ status: "archief" })}>
              Archief
            </FilterButton>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subtype</span>
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
              <div key={i} className="overflow-hidden rounded-lg border">
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
            <p className="text-muted-foreground">Geen resultaten voor deze filters.</p>
            <button onClick={clearFilters} className="text-sm font-medium text-primary underline-offset-4 hover:underline">
              Filters wissen
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <AgendaCard key={item.id} item={item} onInteresse={setInteresseItem} />
            ))}
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
