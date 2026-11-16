import { createContext, useContext } from "react";

/*
 * On-screen popups for form status messages. The provider and the popup
 * itself live in Avvisi.tsx; this file only holds the shared contract, so
 * that the component file exports components alone.
 */

/** successo = sent, errore = sending failed, campi = missing or invalid fields, invio = sending. */
export type TipoAvviso = "successo" | "errore" | "campi" | "invio";

export interface Avviso {
  id: number;
  tipo: TipoAvviso;
  titolo: string;
  testo?: string;
  /** One line per field to fix, shown as a list. */
  voci?: readonly string[];
  /** A way out, such as calling: shown as a link under the text. */
  azione?: { etichetta: string; href: string };
}

export interface AvvisiApi {
  /** Shows a popup and returns its id. */
  mostra: (avviso: Omit<Avviso, "id">) => number;
  chiudi: (id: number) => void;
}

export const AvvisiContext = createContext<AvvisiApi | null>(null);

export function useAvvisi(): AvvisiApi {
  const api = useContext(AvvisiContext);
  if (!api) throw new Error("useAvvisi must be used inside <AvvisiProvider>.");
  return api;
}
