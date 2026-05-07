import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Agenda from "./Agenda";
import { agendaMockData, type AgendaItem } from "@/data/agendaMockData";

const NL_MONTHS = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const NL_DAYS = ["zo", "ma", "di", "wo", "do", "vr", "za"];

function formatLongDate(iso: string) {
  const d = new Date(iso);
  return `${NL_DAYS[d.getDay()]} ${d.getDate()} ${NL_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export default function AgendaEvents() {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.get("type") !== "events") {
      const p = new URLSearchParams(params);
      p.set("type", "events");
      setParams(p, { replace: true });
    }
  }, [params, setParams]);

  // Upcoming events (regardless of current filters), soonest first
  const upcoming: AgendaItem[] = agendaMockData
    .filter((i) => i.type === "event" && !i.is_archived)
    .map((i) => ({
      ...i,
      _firstDate: [...i.sessies].sort((a, b) => a.datum.localeCompare(b.datum))[0]?.datum ?? "",
    }) as AgendaItem & { _firstDate: string })
    .sort((a, b) => (a as any)._firstDate.localeCompare((b as any)._firstDate))
    .slice(0, 4);

  return (
    <>
      <Agenda />

      <section className="border-t border-dashed border-neutral-400 bg-neutral-50">
        <div className="mx-auto max-w-[1200px] px-4 py-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900">Upcoming events</h2>
              <p className="mt-1 text-sm text-neutral-500">Een greep uit de eerstvolgende events.</p>
            </div>
          </div>

          <ul className="divide-y divide-neutral-300 rounded border border-neutral-300 bg-white">
            {upcoming.map((item) => {
              const first = [...item.sessies].sort((a, b) => a.datum.localeCompare(b.datum))[0];
              return (
                <li
                  key={item.id}
                  onClick={() => navigate(`/agenda/events/${item.slug}`)}
                  className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-col items-center justify-center rounded border border-dashed border-neutral-400 bg-neutral-100 text-center">
                      <span className="text-[10px] uppercase text-neutral-500">
                        {NL_MONTHS[new Date(first.datum).getMonth()]}
                      </span>
                      <span className="text-sm font-semibold text-neutral-900 leading-none">
                        {new Date(first.datum).getDate()}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">{item.titel}</div>
                      <div className="text-xs text-neutral-500">
                        {formatLongDate(first.datum)} · {item.locatie_naam}, {item.adres_gemeente}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-neutral-700">Bekijken ›</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
