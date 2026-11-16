import { ArrowRight } from "lucide-react";
import energiaRicaricabile from "@/assets/revoluce/energia-ricaricabile.svg";
import letteraC from "@/assets/revoluce/lettera-c.svg";
import letteraE from "@/assets/revoluce/lettera-e.svg";
import letteraP from "@/assets/revoluce/lettera-p.svg";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { Curve, Highlight, Section, SectionHeading } from "@/components/revoluce/primitives";
import { howItWorksSteps, site } from "@/content";

/*
 * The formula reads as a progression: price on the white page, consumption on
 * lilac, total on violet. Each card carries a large letter from the Revoluce
 * lettering, behind its text and clipped by the card.
 */
const formula = [
  {
    label: "Prezzo",
    title: "Tutto incluso",
    text: "Un prezzo al kWh chiaro, con dentro tutti gli oneri della bolletta.",
    ground: "bg-balsa-surface text-balsa-primary",
    letter: letteraE,
    letterPlace: "-bottom-4 right-6 w-24",
  },
  {
    label: "Consumi",
    title: "Reali, ogni giorno",
    text: "Dal tuo credito scaliamo solo quello che hai consumato davvero, giorno per giorno.",
    ground: "bg-balsa-background text-balsa-primary",
    letter: letteraP,
    letterPlace: "-bottom-4 right-6 w-24",
  },
  {
    label: "Totale",
    title: "Da pagare",
    text: "Questo è quello che ti facciamo pagare. Senza asterischi, senza sorprese.",
    ground: "bg-balsa-primary text-balsa-surface",
    letter: letteraC,
    letterPlace: "-bottom-3 right-8 w-24",
  },
] as const;

const operators = ["×", "="] as const;

export function Pricing() {
  return (
    <Section id="prezzo" surface labelledBy="prezzo-title">
      <Curve tone="surface" className="left-[25%] top-[55%] w-[80%] -rotate-12" />
      <div className="flex flex-col gap-12 lg:gap-19">
        <SectionHeading
          id="prezzo-title"
          kicker="Il prezzo"
          onSurface
          intro="Il tuo totale è un prezzo tutto incluso moltiplicato per i tuoi consumi reali quotidiani. Semplice e chiaro, come piace a noi."
        >
          Andiamo al sodo,
          <br />
          parliamo del <Highlight tone="background">prezzo.</Highlight>
        </SectionHeading>

        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-stretch gap-x-5 gap-y-4">
            {formula.map((item, index) => (
              <div key={item.label} className="contents">
                <Card
                  variant="surface"
                  padding="lg"
                  rounded="3xl"
                  shadow={false}
                  className={`relative isolate flex min-w-0 flex-[1_1_17rem] flex-col gap-3.5 overflow-hidden border-0 ${item.ground}`}
                >
                  <img
                    src={item.letter}
                    alt=""
                    aria-hidden="true"
                    className={`pointer-events-none absolute -z-10 h-auto ${item.letterPlace}`}
                  />
                  <span className="text-sm font-bold uppercase tracking-[0.08em]">{item.label}</span>
                  <span className="text-[clamp(1.875rem,2.8vw,2.5rem)] font-extrabold leading-[1.02]">
                    {item.title}
                  </span>
                  <span className="text-[1.0625rem] leading-relaxed">{item.text}</span>
                </Card>
                {index < operators.length ? (
                  <span
                    aria-hidden="true"
                    className="flex-none self-center px-1 text-7xl font-light leading-none text-balsa-primary"
                  >
                    {operators[index]}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="m-0 max-w-[52rem] text-[0.9375rem] font-medium leading-relaxed">
            Restano esclusi solo il canone RAI e i costi per aumento di potenza, voltura e subentro.
            Formula pensata per le utenze Domestico Residente: la tua utenza ha altre caratteristiche?{" "}
            <a href={site.notResident} className="font-bold text-balsa-primary underline underline-offset-4">
              Consulta la pagina dedicata
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-7 pt-8 lg:pt-32">
          <div className="flex flex-col items-center gap-7 text-center">
            <h3 className="m-0 w-full">
              <img
                src={energiaRicaricabile}
                alt="Energia ricaricabile"
                width={740}
                height={89}
                className="mx-auto block h-auto w-[min(46.25rem,100%)]"
              />
            </h3>
            <p className="m-0 font-balsa-title text-[clamp(1.5rem,2.2vw,2rem)] font-light leading-tight">
              Come funziona in pratica.
            </p>
          </div>
          <ol className="m-0 mt-3 flex list-none flex-wrap gap-x-12 gap-y-10 p-0">
            {howItWorksSteps.map((step, index) => (
              <li key={step.strong} className="flex min-w-0 flex-[1_1_18rem] flex-col gap-3.5">
                <span aria-hidden="true" className="font-balsa-title text-[6.25rem] font-extrabold leading-[0.9]">
                  {index + 1}
                </span>
                <p className="m-0 font-balsa-title text-[clamp(1.625rem,2.3vw,2rem)] font-light leading-[1.12]">
                  {step.lead} <strong className="font-extrabold">{step.strong}</strong>
                </p>
                <p className="m-0 text-[1.0625rem] leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-4">
            <p className="m-0 rounded-2xl bg-balsa-background px-5 py-4 text-[1.0625rem] font-medium leading-snug">
              <strong className="font-bold">Niente bollette cartacee:</strong> preferiamo investire in
              un'assistenza che c'è quando ti serve.
            </p>
            <Link href={site.howItWorks} variant="text" color="primary" size="lg" suffixIcon={ArrowRight} className="px-0 text-lg font-extrabold">
              Guarda il video di un minuto
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
