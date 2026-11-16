import { useRef, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Select } from "@/components/ui/Select";
import { useAvvisi } from "@/components/revoluce/avvisi-context";
import { isEmail, restoreSubmitFocus } from "@/components/revoluce/forms";
import { Curve, Highlight, Kicker, Section } from "@/components/revoluce/primitives";
import { formMessages, site } from "@/content";

const utenze = [
  { label: "Domestico Residente", value: "domestico-residente" },
  { label: "Domestico Non Residente", value: "domestico-non-residente" },
  { label: "Altri Usi", value: "altri-usi" },
] as const;

const potenze = ["1,5", "3", "4,5", "6", "10", "15"].map((kw) => ({
  label: `${kw} kW`,
  value: kw.replace(",", "."),
}));

const pagamenti = [
  { label: "Carta di credito", value: "carta" },
  { label: "Conto corrente", value: "conto" },
] as const;

const steps = ["Inserisci i tuoi dati", "Attendi il calcolo", "Ricevi il tuo video"] as const;

type QuoteField = "nome" | "email" | "kwh" | "spesa";

interface QuoteRequest {
  nome: string;
  /** Where the quote video is sent. */
  email: string;
  utenza: string;
  potenza: string;
  kwh: number | null;
  spesa: number | null;
  pagamento: string;
}

// TODO: connect to Revoluce's quote service, which emails the personalised video.
// Until then every request fails, so the visitor sees the "invio non riuscito" popup
// with the phone number instead of a confirmation for a request nobody received.
async function sendQuote(request: QuoteRequest): Promise<void> {
  void request;
  throw new Error("The quote service is not connected yet.");
}

/** "12,5" and "12.5" are both accepted; empty means not given. */
function readAmount(value: FormDataEntryValue | null): number | null | "invalid" {
  const text = String(value ?? "").trim().replace(",", ".");
  if (!text) return null;
  const amount = Number(text);
  return Number.isFinite(amount) && amount > 0 ? amount : "invalid";
}

export function Quote() {
  const { mostra, chiudi } = useAvvisi();
  const [invalid, setInvalid] = useState<Partial<Record<QuoteField, boolean>>>({});
  const [sending, setSending] = useState(false);
  const selects = useRef({ utenza: "domestico-residente", potenza: "3" });
  const lastPopup = useRef<number | null>(null);

  const fieldStatus = (field: QuoteField) => (invalid[field] ? "unvalidated" : "default");
  const clear = (field: QuoteField) => {
    if (invalid[field]) setInvalid((current) => ({ ...current, [field]: false }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const kwh = readAmount(data.get("kwh"));
    const spesa = readAmount(data.get("spesa"));

    const errors: Partial<Record<QuoteField, boolean>> = {};
    const lines: string[] = [];
    if (!nome) {
      errors.nome = true;
      lines.push(formMessages.fields.name);
    }
    if (!isEmail(email)) {
      errors.email = true;
      lines.push(formMessages.fields.email);
    }
    if (kwh === null && spesa === null) {
      errors.kwh = errors.spesa = true;
      lines.push(formMessages.fields.usage);
    } else if (kwh === "invalid" || spesa === "invalid") {
      if (kwh === "invalid") errors.kwh = true;
      if (spesa === "invalid") errors.spesa = true;
      lines.push(formMessages.fields.positive);
    }

    setInvalid(errors);
    if (lastPopup.current !== null) chiudi(lastPopup.current);
    if (lines.length) {
      lastPopup.current = mostra({ tipo: "campi", titolo: formMessages.quote.missing, voci: lines });
      const first = (["nome", "email", "kwh", "spesa"] as const).find((field) => errors[field]);
      if (first) document.getElementById(`preventivo-${first}`)?.focus();
      return;
    }

    setSending(true);
    const sendingPopup = mostra({ tipo: "invio", titolo: formMessages.sending.title, testo: formMessages.sending.text });
    try {
      await sendQuote({
        nome,
        email,
        ...selects.current,
        kwh: kwh as number | null,
        spesa: spesa as number | null,
        pagamento: String(data.get("pagamento") ?? "carta"),
      });
      lastPopup.current = mostra({ tipo: "successo", titolo: formMessages.quote.sent.title, testo: formMessages.quote.sent.text });
      form.reset();
    } catch {
      lastPopup.current = mostra({
        tipo: "errore",
        titolo: formMessages.failed.title,
        testo: formMessages.failed.text,
        azione: formMessages.failed.action,
      });
    } finally {
      chiudi(sendingPopup);
      setSending(false);
      restoreSubmitFocus(form);
    }
  }

  return (
    <Section id="preventivo" tone="brand" labelledBy="preventivo-title">
      <Curve onBrand className="-bottom-[12%] -left-[40%] w-[110%] -rotate-20" />
      <div className="flex flex-wrap items-center gap-x-18 gap-y-14">
        <div className="flex min-w-0 flex-[1_1_30rem] flex-col items-start gap-6">
          <Kicker>Preventivo in 30 secondi</Kicker>
          <h2
            id="preventivo-title"
            className="m-0 text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.04] tracking-[-0.015em] text-balsa-surface"
          >
            Ok, ma quanto
            <br />
            <Highlight>spendo?</Highlight>
          </h2>
          <p className="m-0 max-w-[32rem] text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-relaxed text-balsa-background">
            Scopriamolo subito insieme. Inserisci pochi dati e in 30 secondi ricevi via email il tuo
            preventivo dedicato, spiegato in un video.
          </p>
          <ol className="m-0 mt-3 flex w-full list-none flex-wrap items-center gap-x-3.5 gap-y-4 p-0">
            {steps.map((step, index) => (
              <li key={step} className="flex flex-[1_1_auto] items-center gap-3">
                <span className="font-balsa-title text-5xl font-extrabold leading-none">{index + 1}</span>
                <span className="max-w-[7rem] font-balsa-title text-[1.1875rem] font-bold leading-tight">
                  {step}
                </span>
                {index < steps.length - 1 ? (
                  <span aria-hidden="true" className="ml-2 hidden min-w-6 flex-1 items-center gap-1.5 md:flex">
                    <span className="flex-1 border-t-[3px] border-dashed border-balsa-surface" />
                    <span className="text-2xl font-extrabold">»</span>
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <Card
          variant="surface"
          padding="lg"
          rounded="3xl"
          shadow={false}
          className="mx-auto w-full min-w-0 max-w-[34rem] flex-[1_1_26rem] border-0 bg-balsa-surface text-balsa-primary"
        >
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5" aria-labelledby="preventivo-form-title">
            <h3 id="preventivo-form-title" className="m-0 text-3xl font-extrabold leading-tight">
              Il tuo preventivo
            </h3>
            <Input
              id="preventivo-nome"
              name="nome"
              label="Il tuo nome"
              autoComplete="given-name"
              required
              status={fieldStatus("nome")}
              statusMessage=""
              onValueChange={() => clear("nome")}
            />
            <Input
              id="preventivo-email"
              name="email"
              label="La tua email"
              type="email"
              autoComplete="email"
              required
              hint="Ti mandiamo qui il video del preventivo."
              status={fieldStatus("email")}
              statusMessage=""
              onValueChange={() => clear("email")}
            />
            <div className="grid gap-5 sm:grid-cols-[1.4fr_1fr]">
              <Select
                id="preventivo-utenza"
                label="Tipo utenza"
                options={utenze}
                defaultValue="domestico-residente"
                onValueChange={(value) => { selects.current.utenza = String(value); }}
              />
              <Select
                id="preventivo-potenza"
                label="Potenza"
                options={potenze}
                defaultValue="3"
                onValueChange={(value) => { selects.current.potenza = String(value); }}
              />
            </div>
            <fieldset className="m-0 grid min-w-0 gap-x-5 gap-y-3 border-0 p-0 sm:grid-cols-2">
              <legend className="mb-3 p-0 text-base font-bold">
                Consumo o spesa: basta uno dei due
              </legend>
              <Input
                id="preventivo-kwh"
                name="kwh"
                label="Consumo mensile (kWh)"
                type="number"
                inputMode="numeric"
                status={fieldStatus("kwh")}
                statusMessage=""
                onValueChange={() => { clear("kwh"); clear("spesa"); }}
              />
              <Input
                id="preventivo-spesa"
                name="spesa"
                label="Spesa mensile (€)"
                type="number"
                inputMode="decimal"
                status={fieldStatus("spesa")}
                statusMessage=""
                onValueChange={() => { clear("kwh"); clear("spesa"); }}
              />
              <p className="m-0 text-sm font-medium leading-snug sm:col-span-2">
                Li trovi in bolletta. Se la tua bolletta è bimestrale, dividi per due.
              </p>
            </fieldset>
            <RadioGroup
              id="preventivo-pagamento"
              name="pagamento"
              label="Metodo di pagamento"
              options={pagamenti}
              defaultValue="carta"
              layout="row"
            />
            <Button type="submit" size="lg" shape="pill" suffixIcon={ArrowRight} loading={sending} className="mt-1 w-full font-bold">
              Calcola il preventivo
            </Button>
            <p className="m-0 text-sm font-medium leading-snug">
              Preferisci parlarne con una persona?{" "}
              <a href={site.phoneHref} className="font-bold text-balsa-primary underline underline-offset-4 hover:no-underline">
                Chiamaci allo {site.phone}
              </a>
              .
            </p>
          </form>
        </Card>
      </div>
    </Section>
  );
}
