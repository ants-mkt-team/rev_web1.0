import { CircleAlert, CircleCheckBig, LoaderCircle, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AvvisiContext, type Avviso, type TipoAvviso } from "./avvisi-context";

/*
 * Form status popups, built on the Balsa palette and shape: white surface,
 * 2px border, panel radius, no shadow (the theme's shadows are "none").
 * Bottom-right on desktop, full width above the bottom edge on mobile.
 */

const icone = { successo: CircleCheckBig, errore: CircleAlert, campi: CircleAlert, invio: LoaderCircle };

/** How long a popup stays before closing itself; null = until closed or replaced. */
const durata: Record<TipoAvviso, number | null> = { successo: 8000, errore: null, campi: null, invio: null };

/** At most this many popups on screen; older ones leave first. */
const massimo = 3;

export function AvvisiProvider({ children }: { children: ReactNode }) {
  const [avvisi, setAvvisi] = useState<Avviso[]>([]);
  const prossimoId = useRef(1);

  const chiudi = useCallback((id: number) => {
    setAvvisi((attuali) => attuali.filter((avviso) => avviso.id !== id));
  }, []);

  const mostra = useCallback((avviso: Omit<Avviso, "id">) => {
    const id = prossimoId.current++;
    setAvvisi((attuali) => [...attuali.slice(-(massimo - 1)), { ...avviso, id }]);
    return id;
  }, []);

  const api = useMemo(() => ({ mostra, chiudi }), [mostra, chiudi]);

  return (
    <AvvisiContext.Provider value={api}>
      {children}
      <section
        aria-label="Avvisi"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col gap-3 p-5 sm:inset-x-auto sm:right-0 sm:w-[28rem] sm:p-8"
      >
        {avvisi.map((avviso) => (
          <AvvisoCard key={avviso.id} avviso={avviso} chiudi={chiudi} />
        ))}
      </section>
    </AvvisiContext.Provider>
  );
}

function AvvisoCard({ avviso, chiudi }: { avviso: Avviso; chiudi: (id: number) => void }) {
  const { id, tipo, titolo, testo, voci, azione } = avviso;
  const negativo = tipo === "errore" || tipo === "campi";
  const Icona = icone[tipo];

  useEffect(() => {
    const ms = durata[tipo];
    if (!ms) return;
    const timer = window.setTimeout(() => chiudi(id), ms);
    return () => window.clearTimeout(timer);
  }, [id, tipo, chiudi]);

  const cerchio = negativo
    ? "bg-balsa-destructive text-balsa-destructive-foreground"
    : tipo === "invio"
      ? "bg-balsa-background text-balsa-primary"
      : "bg-balsa-primary text-balsa-primary-foreground";

  return (
    <div
      role={negativo ? "alert" : "status"}
      data-avviso={tipo}
      className={`pointer-events-auto flex items-start gap-3 rounded-balsa-panel border-2 bg-balsa-surface p-4 text-balsa-primary ${
        negativo ? "border-balsa-destructive" : "border-balsa-primary"
      }`}
    >
      <span aria-hidden="true" className={`flex size-10 flex-none items-center justify-center rounded-full ${cerchio}`}>
        <Icona className={`size-5 ${tipo === "invio" ? "animate-spin" : ""}`} strokeWidth={2.5} />
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-1 pt-0.5">
        <p className="m-0 text-base font-bold leading-snug">{titolo}</p>
        {testo ? <p className="m-0 text-sm">{testo}</p> : null}
        {voci?.length ? (
          <ul className="m-0 mt-1 flex list-disc flex-col gap-1 pl-4 text-sm">
            {voci.map((voce) => (
              <li key={voce}>{voce}</li>
            ))}
          </ul>
        ) : null}
        {azione ? (
          <a
            href={azione.href}
            className="mt-1 self-start text-sm font-bold text-balsa-primary underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-balsa-focus-ring"
          >
            {azione.etichetta}
          </a>
        ) : null}
      </div>
      {tipo === "invio" ? null : (
        <button
          type="button"
          onClick={() => chiudi(id)}
          aria-label="Chiudi avviso"
          className="-mr-1 -mt-1 flex size-8 flex-none cursor-pointer items-center justify-center rounded-full text-balsa-primary transition-colors hover:bg-balsa-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-balsa-focus-ring"
        >
          <X aria-hidden="true" className="size-5" strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
