import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Highlight, Kicker, Section } from "@/components/revoluce/primitives";
import { site } from "@/content";

const nextSteps = [
  "Ti chiamiamo e ti spieghiamo come funziona Revoluce, e come funzionerà per te.",
  "Ti mandiamo la documentazione, da guardare con tutta calma.",
  "Attivi la fornitura solo quando sei convinto.",
] as const;

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  // TODO: send the call-back request to Revoluce's lead endpoint.
}

export function Contact() {
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-labelledby="contatti-form-title">
            <h3 id="contatti-form-title" className="m-0 text-[clamp(2rem,3vw,2.625rem)] font-extrabold leading-none">
              Ne parliamo?
            </h3>
            <p className="m-0 text-[1.0625rem] leading-relaxed">
              Lasciaci i tuoi dati: ti ricontattiamo entro poche ore.
            </p>
            <Input id="contatti-nome" label="Nome" autoComplete="name" required />
            <div className="grid gap-5 sm:grid-cols-2">
              <Input id="contatti-email" label="Email" type="email" autoComplete="email" required />
              <Input id="contatti-telefono" label="Telefono" type="phone" autoComplete="tel" required />
            </div>
            <Checkbox
              id="contatti-privacy"
              label="Accetto il trattamento dei dati personali (art. 13 Regolamento UE 679/2016)"
              hint="Leggi l'informativa privacy su revoluce.it/privacy-policy"
              required
            />
            <Button type="submit" size="lg" shape="pill" suffixIcon={ArrowRight} className="w-full font-bold">
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
