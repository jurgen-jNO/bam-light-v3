import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Agenda from "./Agenda";

export default function AgendaEvents() {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (params.get("type") !== "events") {
      const p = new URLSearchParams(params);
      p.set("type", "events");
      setParams(p, { replace: true });
    }
  }, [params, setParams]);

  return <Agenda />;
}
