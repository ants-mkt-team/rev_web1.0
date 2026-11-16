import { useRef, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { useAvvisi } from "@/components/revoluce/avvisi-context";
import { Highlight, Kicker, Section } from "@/components/revoluce/primitives";
import { formMessages, site } from "@/content";

const nextSteps = [
  "Ti chiamiamo e ti spieghiamo come funziona Revoluce, e come funzionerà per te.",
  "Ti mandiamo la documentazione, da guardare con tutta calma.",
  "Attivi la fornitura solo quando sei convinto.",
] as const;

type ContactField = "nome" | "email" | "telefono" | "privacy";

interface ContactRequest {
  nome: string;
  email: string;
  telefono: string;
}

// TODO: send the call-back request to Revoluce's lead endpoint.
// Until then every request fails, so the visitor sees the "invio non riuscito" popup
// with the phone number instead of a confirmation for a request nobody received.
async function sendContactRequest(request: ContactRequest): Promise<void> {
  void request;
  throw new Error("The lead endpoint is not connected yet.");
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** 6 to 15 digits with an optional "+" or "00" prefix, checked after removing spaces, dots, dashes and slashes. */
const phonePattern = /^(\+|00)?\d{6,15}$/;

export function Contact() {
  const { mostra, chiudi } = useAvvisi();
  const [invalid, setInvalid] = useState<Partial<Record<ContactField, boolean>>>({});
  const [privacy, setPrivacy] = useState(false);
  const [sending, setSending] = useState(false);
  const lastPopup = useRef<number | null>(null);

  const fieldStatus = (field: ContactField) => (invalid[field] ? "unvalidated" : "default");
  const clear = (field: ContactField) => {
    if (invalid[field]) setInvalid((current) => ({ ...current, [field]: false }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").replace(/[\s./-]/g, "");

    const errors: Partial<Record<ContactField, boolean>> = {};
    const lines: string[] = [];
    if (!nome) {
      errors.nome = true;
      lines.push(formMessages.fields.name);
    }
    if (!emailPattern.test(email)) {
      errors.email = true;
      lines.push(formMessages.fields.email);
    }
    if (!phonePattern.test(telefono)) {
      errors.telefono = true;
      lines.push(formMessages.fields.phone);
    }
    if (!privacy) {
      errors.privacy = true;
      lines.push(formMessages.fields.privacy);
    }

    setInvalid(errors);
    if (lastPopup.current !== null) chiudi(lastPopup.current);
    if (lines.length) {
      lastPopup.current = mostra({ tipo: "campi", titolo: formMessages.contact.missing, voci: lines });
      const first = (["nome", "email", "telefono", "privacy"] as const).find((field) => errors[field]);
      if (first) document.getElementById(`contatti-${first}`)?.focus();
      return;
    }

    setSending(true);
    const sendingPopup = mostra({ tipo: "invio", titolo: formMessages.sending.title, testo: formMessages.sending.text });
    try {
      await sendContactRequest({ nome, email, telefono });
      lastPopup.current = mostra({ tipo: "successo", titolo: formMessages.contact.sent.title, testo: formMessages.contact.sent.text });
      form.reset();
      setPrivacy(false);
    } catch {
      lastPopup.current = mostra({ tipo: "errore", titolo: formMessages.failed.title, testo: formMessages.failed.text });
    } finally {
      chiudi(sendingPopup);
      setSending(false);
    }
  }

  return (
    <Section id="contatti" tone="brand" labelledBy="contatti-title">
      <div className="flex flex-wrap items-start gap-x-18 gap-y-14">
        <div className="flex min-w-0 flex-[1_1_28rem] flex-col items-start gap-6">
          <Kicker>Non è un call center</Kicker>
          <h2
            id="contatti-title"
            className="m-0 text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.04] tracking-[-0.015em] text-balsa-surface"
          >
            Ti spieghiamo
            <br />
            <Highlight>tutto a voce.</Highlight>
          </h2>
          <p className="m-0 max-w-[31rem] text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-relaxed text-balsa-background">
            Dall'altra parte trovi i nostri Tutor, dall'ufficio di Salerno. Persone vere, che ti
            accompagnano dalla prima domanda all'attivazione.
          </p>
          <ul className="m-0 mt-3 flex list-none flex-col gap-6 p-0">
            <li className="flex flex-col gap-2">
              <a
                href={site.phoneHref}
                className="font-balsa-title text-[clamp(2.125rem,3.4vw,3rem)] font-extrabold leading-none text-balsa-surface no-underline hover:underline"
              >
                {site.phone}
              </a>
              <span className="text-base font-medium text-balsa-background">
                {site.hours}. Il weekend riposiamo anche noi.
              </span>
            </li>
            <li className="flex flex-col gap-2">
              <a
                href={`mailto:${site.email}`}
                className="font-balsa-title text-[clamp(1.5rem,2.2vw,1.875rem)] font-extrabold leading-tight text-balsa-surface no-underline hover:underline"
              >
                {site.email}
              </a>
              <span className="text-base font-medium text-balsa-background">Rispondiamo entro 24 ore.</span>
            </li>
            <li className="flex flex-col gap-2">
              <span className="font-balsa-title text-[clamp(1.25rem,1.8vw,1.5rem)] font-extrabold leading-tight">
                {site.address}
              </span>
              <span className="text-base font-medium text-balsa-background">Qui lavorano i nostri Tutor.</span>
            </li>
          </ul>
        </div>

        <Card
          variant="surface"
          padding="lg"
          rounded="3xl"
          shadow={false}
          className="mx-auto w-full min-w-0 max-w-[35rem] flex-[1_1_26rem] border-0 bg-balsa-surface text-balsa-primary"
        >
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5" aria-labelledby="contatti-form-title">
            <h3 id="contatti-form-title" className="m-0 text-[clamp(2rem,3vw,2.625rem)] font-extrabold leading-none">
              Ne parliamo?
            </h3>
            <p className="m-0 text-[1.0625rem] leading-relaxed">
              Lasciaci i tuoi dati: ti ricontattiamo entro poche ore.
            </p>
            <Input
              id="contatti-nome"
              name="nome"
              label="Nome"
              autoComplete="name"
              required
              status={fieldStatus("nome")}
              statusMessage=""
              onValueChange={() => clear("nome")}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                id="contatti-email"
                name="email"
                label="Email"
                type="email"
                autoComplete="email"
                required
                status={fieldStatus("email")}
                statusMessage=""
                onValueChange={() => clear("email")}
              />
              <Input
                id="contatti-telefono"
                name="telefono"
                label="Telefono"
                type="phone"
                autoComplete="tel"
                required
                status={fieldStatus("telefono")}
                statusMessage=""
                onValueChange={() => clear("telefono")}
              />
            </div>
            <Checkbox
              id="contatti-privacy"
              label="Accetto il trattamento dei dati personali (art. 13 Regolamento UE 679/2016)"
              hint="Leggi l'informativa privacy su revoluce.it/privacy-policy"
              required
              checked={privacy}
              onCheckedChange={(checked) => {
                setPrivacy(checked);
                if (checked) clear("privacy");
              }}
              className={invalid.privacy ? "[&_input]:border-balsa-destructive" : undefined}
            />
            <Button type="submit" size="lg" shape="pill" suffixIcon={ArrowRight} loading={sending} className="w-full font-bold">
              Ricontattami
            </Button>
            <ol className="m-0 mt-1 flex list-none flex-col gap-3 rounded-[1.25rem] bg-balsa-background p-5 text-[0.9375rem] font-medium leading-snug">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex items-baseline gap-3">
                  <span className="flex-none font-balsa-title text-[1.375rem] font-extrabold leading-none">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="m-0 text-sm font-medium leading-snug">
              Tieni a portata di mano una vecchia bolletta e nome, cognome, telefono, email e codice
              fiscale dell'intestatario.{" "}
              <a href={site.privacy} className="font-bold text-balsa-primary underline underline-offset-4">
                Informativa privacy
              </a>
              .
            </p>
          </form>
        </Card>
      </div>
    </Section>
  );
}
