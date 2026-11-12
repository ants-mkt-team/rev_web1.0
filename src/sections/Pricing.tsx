import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { Curve, Highlight, Section, SectionHeading } from "@/components/revoluce/primitives";
import { howItWorksSteps, site } from "@/content";

const formula = [
  {
    label: "Prezzo",
    title: "Tutto incluso",
    text: "Un prezzo al kWh chiaro, con dentro tutti gli oneri della bolletta.",
  },
  {
    label: "Consumi",
    title: "Reali, ogni giorno",
    text: "Dal tuo credito scaliamo solo quello che hai consumato davvero, giorno per giorno.",
  },
  {
    label: "Totale",
    title: "Da pagare",
    text: "Questo è quello che ti facciamo pagare. Senza asterischi, senza sorprese.",
  },
] as const;

const operators = ["×", "="] as const;

export function Pricing() {
  return (
    <Section id="prezzo" labelledBy="prezzo-title">
      <Curve className="-right-[38%] top-[2%] w-[95%] rotate-[16deg]" />
      <div className="flex flex-col gap-12">
        <SectionHeading
          id="prezzo-title"
          kicker="Il prezzo"
          intro="Il tuo totale è un prezzo tutto incluso moltiplicato per i tuoi consumi reali quotidiani. Semplice e chiaro, come piace a noi."
        >
          Andiamo al sodo,
          <br />
          parliamo del <Highlight>prezzo.</Highlight>
        </SectionHeading>

        <div className="flex flex-wrap items-stretch gap-x-5 gap-y-4">
          {formula.map((item, index) => {
            const isTotal = index === formula.length - 1;
            return (
              <div key={item.label} className="contents">
                <Card
                  variant="surface"
                  padding="lg"
                  rounded="3xl"
                  shadow={false}
                  className={`flex min-w-0 flex-[1_1_17rem] flex-col gap-3.5 border-0 ${
                    isTotal ? "bg-balsa-primary text-balsa-surface" : "bg-balsa-surface text-balsa-primary"
                  }`}
                >
                  <span className="text-sm font-bold uppercase tracking-[0.08em]">{item.label}</span>
                  <span className="text-[clamp(1.875rem,2.8vw,2.5rem)] font-extrabold leading-[1.02]">
                    {item.title}
                  </span>
                  <span className="text-[1.0625rem] leading-relaxed">{item.text}</span>
                </Card>
                {index < operators.length ? (
                  <span
                    aria-hidden="true"
                    className="flex-none self-center px-1 text-7xl font-light leading-none"
                  >
                    {operators[index]}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
        <p className="-mt-4 mb-0 max-w-[52rem] text-[0.9375rem] font-medium leading-relaxed">
          Restano esclusi solo il canone RAI e i costi per aumento di potenza, voltura e subentro.
          Formula pensata per le utenze Domestico Residente: la tua utenza ha altre caratteristiche?{" "}
          <a href={site.notResident} className="font-bold text-balsa-primary underline underline-offset-4">
            Consulta la pagina dedicata
          </a>
          .
        </p>

        <h3 className="mb-0 mt-8 text-[clamp(1.625rem,2.6vw,2.375rem)] font-extrabold leading-tight">
          Energia ricaricabile: come funziona in pratica.
        </h3>
        <ol className="m-0 flex list-none flex-wrap gap-x-12 gap-y-10 p-0">
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
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <p className="m-0 rounded-2xl bg-balsa-surface px-5 py-4 text-[1.0625rem] font-medium leading-snug">
            <strong className="font-bold">Niente bollette cartacee:</strong> preferiamo investire in
            un'assistenza che c'è quando ti serve.
          </p>
          <Link href={site.howItWorks} variant="text" color="primary" size="lg" suffixIcon={ArrowRight} className="px-0 text-lg font-extrabold">
            Guarda il video di un minuto
          </Link>
        </div>
      </div>
    </Section>
  );
}
