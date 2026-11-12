import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Select } from "@/components/ui/Select";
import { Curve, Highlight, Kicker, Section } from "@/components/revoluce/primitives";

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

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  // TODO: connect to Revoluce's quote service, which returns the personalised video.
}

export function Quote() {
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
            Scopriamolo subito insieme. Inserisci pochi dati e in 30 secondi ricevi il tuo preventivo
            dedicato, spiegato in un video.
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-labelledby="preventivo-form-title">
            <h3 id="preventivo-form-title" className="m-0 text-3xl font-extrabold leading-tight">
              Il tuo preventivo
            </h3>
            <Input id="preventivo-nome" label="Il tuo nome" autoComplete="given-name" variant="outline" />
            <div className="grid gap-5 sm:grid-cols-[1.4fr_1fr]">
              <Select
                id="preventivo-utenza"
                label="Tipo utenza"
                options={utenze}
                defaultValue="domestico-residente"
              />
              <Select id="preventivo-potenza" label="Potenza" options={potenze} defaultValue="3" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input id="preventivo-kwh" label="Consumo mensile (kWh)" type="number" inputMode="numeric" />
              <Input id="preventivo-spesa" label="Spesa mensile (€)" type="number" inputMode="decimal" />
            </div>
            <RadioGroup
              id="preventivo-pagamento"
              name="pagamento"
              label="Metodo di pagamento"
              options={pagamenti}
              defaultValue="carta"
              layout="row"
            />
            <Button type="submit" size="lg" shape="pill" suffixIcon={ArrowRight} className="mt-1 w-full font-bold">
              Calcola il preventivo
            </Button>
            <p className="m-0 text-sm font-medium leading-snug">
              Ricevi un video con il calcolo fatto sui tuoi consumi.
            </p>
          </form>
        </Card>
      </div>
    </Section>
  );
}
