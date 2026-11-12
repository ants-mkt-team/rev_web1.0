import { ArrowRight } from "lucide-react";
import badgeLuce from "@/assets/revoluce/badge-luce.svg";
import { Link } from "@/components/ui/Link";
import { Curve, Kicker, Section } from "@/components/revoluce/primitives";
import { articles, site } from "@/content";

const features = [
  "Consulta spesa e prezzo dell'energia per giorno, mese e anno.",
  "Controlla i tuoi consumi e scarica le tue fatture.",
  "Verifica saldo, ricariche e movimenti in un tap.",
] as const;

// Illustrative bar heights for the phone mock-up; not real consumption data.
const bars = [46, 62, 38, 72, 54, 88, 64] as const;
const days = ["L", "M", "M", "G", "V", "S", "D"] as const;

function PhoneMockup() {
  return (
    <div aria-hidden="true" className="relative flex min-h-[38.75rem] items-center justify-center">
      <span className="absolute aspect-square w-[min(28.75rem,92%)] rounded-full bg-rv-luce" />
      <div className="relative flex h-[36.875rem] w-[18.125rem] -rotate-6 flex-col gap-3.5 rounded-[3rem] border-[10px] border-balsa-primary bg-balsa-surface px-[1.125rem] py-[1.375rem] text-balsa-primary">
        <span className="h-2 w-[5.25rem] self-center rounded-full bg-balsa-background" />
        <span className="flex items-baseline justify-between">
          <span className="font-balsa-title text-[1.625rem] font-extrabold leading-none">enrica</span>
          <span className="text-xs font-semibold">Ciao!</span>
        </span>
        <span className="flex flex-col gap-1.5 rounded-[1.25rem] bg-balsa-background p-4">
          <span className="text-xs font-semibold">Il tuo saldo energia</span>
          <span className="font-balsa-title text-[2rem] font-extrabold leading-none">€ ••,••</span>
          <span className="mt-1.5 self-start rounded-full bg-balsa-primary px-3.5 py-2 text-xs font-bold text-balsa-surface">
            Ricarica
          </span>
        </span>
        <span className="flex gap-1 rounded-full bg-balsa-background p-1 text-xs font-bold">
          <span className="flex-1 rounded-full bg-balsa-primary py-2 text-center text-balsa-surface">Giorno</span>
          <span className="flex-1 py-2 text-center">Mese</span>
          <span className="flex-1 py-2 text-center">Anno</span>
        </span>
        <span className="flex h-[7.5rem] items-end gap-2 px-1">
          {bars.map((height, index) => (
            <span
              key={index}
              style={{ height: `${height}%` }}
              className={`flex-1 rounded-t-md ${index === bars.length - 1 ? "bg-balsa-primary" : "bg-balsa-background"}`}
            />
          ))}
        </span>
        <span className="flex justify-between px-2 text-[0.6875rem] font-semibold">
          {days.map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </span>
        <span className="mt-1 flex flex-col text-[0.8125rem] font-semibold">
          {["Movimenti", "Consumi", "Fatture"].map((row) => (
            <span key={row} className="flex justify-between border-t-2 border-balsa-background px-1 py-3">
              <span>{row}</span>
              <span>›</span>
            </span>
          ))}
        </span>
      </div>
      <img
        src={badgeLuce}
        alt=""
        className="absolute left-[calc(50%-14.5rem)] top-[44%] hidden w-24 -rotate-10 sm:block"
      />
    </div>
  );
}

export function Enrica() {
  return (
    <Section id="enrica" labelledBy="enrica-title">
      <Curve className="-left-[30%] top-[18%] w-full -rotate-[24deg]" />
      <div className="flex flex-wrap items-center gap-x-18 gap-y-14">
        <div className="min-w-0 flex-[1_1_26rem]">
          <PhoneMockup />
        </div>
        <div className="flex min-w-0 flex-[1_1_30rem] flex-col items-start gap-6">
          <Kicker>L'app di Revoluce</Kicker>
          <h2 id="enrica-title" className="m-0">
            <span className="block text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-tight">ciao, sono</span>
            <span className="block text-[clamp(5.25rem,10vw,9.25rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
              enrica
            </span>
          </h2>
          <p className="m-0 font-balsa-title text-[clamp(1.5rem,2.4vw,2.125rem)] font-light leading-[1.15]">
            l'app per tenere sotto controllo <strong className="font-extrabold">i tuoi consumi.</strong>
          </p>
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0 text-lg font-medium leading-relaxed">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3.5">
                <span aria-hidden="true" className="mt-2 size-3 flex-none rounded-full bg-balsa-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="m-0 mt-2 font-balsa-title text-[1.625rem] font-light leading-tight">
            disponibile su <strong className="font-extrabold">Android</strong> e{" "}
            <strong className="font-extrabold">iOS</strong>
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={site.enricaWebApp}
              variant="solid"
              color="primary"
              size="lg"
              rounded="full"
              suffixIcon={ArrowRight}
              className="h-12 px-6 text-base font-bold"
            >
              Vai alla WebApp
            </Link>
            <Link href={articles[1].href} variant="text" color="primary" size="md" className="px-0 text-base font-bold">
              Leggi la novità sugli store
            </Link>
          </div>
          <p className="m-0 text-sm font-medium">Enrica viene da ENergia RICAricabile.</p>
        </div>
      </div>
    </Section>
  );
}
