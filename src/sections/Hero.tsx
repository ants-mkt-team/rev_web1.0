import { ArrowRight, ArrowUpRight } from "lucide-react";
import decoroLuce from "@/assets/revoluce/decoro-luce.svg";
import { Link } from "@/components/ui/Link";
import { Curve, Highlight, Kicker, Section } from "@/components/revoluce/primitives";
import { services, site, trustPoints, type ServiceId } from "@/content";

const serviceGround: Record<ServiceId, string> = {
  luce: "bg-rv-luce",
  gas: "bg-rv-gas",
  fibra: "bg-rv-fibra",
};

// The three cards sit as a loose, hand-placed stack.
const stackPlacement: Record<ServiceId, string> = {
  luce: "z-20 -rotate-3",
  gas: "z-10 -mt-3 ml-8 rotate-[2.5deg]",
  fibra: "z-20 -mt-2.5 mr-4 ml-1.5 -rotate-[1.5deg]",
};

export function Hero() {
  return (
    <Section tone="brand" labelledBy="hero-title" className="!pt-14 md:!pt-24">
      <Curve onBrand className="-left-[22%] top-[38%] w-[135%] -rotate-12" />
      <img
        src={decoroLuce}
        alt=""
        className="pointer-events-none absolute -right-36 top-10 z-0 hidden w-[34rem] lg:block"
      />

      <div className="flex flex-wrap items-center gap-x-16 gap-y-14">
        <div className="flex min-w-0 flex-[1.3_1_32rem] flex-col items-start gap-7">
          <Kicker>Energia ricaricabile</Kicker>
          <h1
            id="hero-title"
            className="m-0 text-[clamp(2.5rem,5.6vw,5.125rem)] font-light leading-[1.02] tracking-[-0.015em] text-balsa-surface"
          >
            Fuori semplice,
            <br />
            dentro
            <br />
            <Highlight tone="luce">revoluzionaria.</Highlight>
          </h1>
          <p className="m-0 max-w-[35rem] text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-relaxed text-balsa-background">
            Siamo la fornitura di energia che ricarichi come un cellulare e che paghi con un prezzo
            tutto incluso moltiplicato per quello che consumi. Sì, è semplice così come lo leggi.{" "}
            <strong className="font-bold text-balsa-surface">
              E oggi, oltre alla luce, anche gas e fibra.
            </strong>
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href={site.howItWorks}
              variant="solid"
              color="neutral"
              size="lg"
              rounded="full"
              suffixIcon={ArrowRight}
              className="h-14 px-7 text-lg bg-balsa-surface font-bold text-balsa-primary hover:bg-balsa-background"
            >
              Scopri come funziona
            </Link>
            <Link
              href="#preventivo"
              variant="text"
              size="lg"
              className="px-0 text-lg font-bold text-balsa-surface underline decoration-balsa-surface underline-offset-[6px] hover:text-balsa-background"
            >
              Quanto spendo? Fai il preventivo
            </Link>
          </div>
          <ul className="m-0 mt-2 flex list-none flex-wrap gap-x-6 gap-y-2.5 p-0 text-[0.9375rem] font-semibold">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-rv-luce" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto flex w-full min-w-0 max-w-[30rem] flex-[1_1_21rem] flex-col">
          <span className="relative z-30 -mb-3.5 mr-3.5 self-end -rotate-6 bg-balsa-surface px-4 py-3 text-[1.1875rem] font-extrabold leading-none text-balsa-primary">
            dal 2016: 10 anni di revoluzione
          </span>
          {services.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className={`relative flex items-center gap-5 rounded-[1.75rem] px-6 py-6 text-balsa-primary no-underline transition-transform hover:-translate-y-0.5 ${serviceGround[service.id]} ${stackPlacement[service.id]}`}
            >
              <span className="flex size-14 flex-none items-center justify-center rounded-full bg-balsa-primary sm:size-[4.25rem]">
                <img src={service.icon} alt="" className="h-7 w-auto sm:h-9" />
              </span>
              <span className="flex min-w-0 flex-col gap-1.5">
                <span className="font-balsa-title text-3xl font-extrabold leading-none sm:text-4xl">{service.name}</span>
                <span className="text-lg leading-tight sm:text-2xl">{service.short}</span>
              </span>
              <ArrowUpRight aria-hidden="true" className="ml-auto size-7 flex-none" strokeWidth={2.5} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
