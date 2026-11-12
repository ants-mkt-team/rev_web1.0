import { ArrowRight, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { Separator } from "@/components/ui/Separator";
import { Highlight, Section, SectionHeading } from "@/components/revoluce/primitives";
import { guarantees, pressOutlets, site, testimonials } from "@/content";

export function Guarantees() {
  return (
    <Section id="garanzie" surface labelledBy="garanzie-title">
      <div className="flex flex-col gap-14">
        <SectionHeading id="garanzie-title" kicker="Perché fidarti" onSurface align="stack">
          Non è tanto per dire:
          <br />
          <Highlight tone="background">sono garanzie.</Highlight>
        </SectionHeading>
        <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-3">
          {guarantees.map((item) => (
            <li key={item.title} className="flex">
              <Card
                variant="surface"
                padding="lg"
                rounded="3xl"
                shadow={false}
                className="flex w-full flex-col gap-4 border-0 bg-balsa-background text-balsa-primary"
              >
                <span className="font-balsa-title text-[clamp(3.5rem,5vw,5rem)] font-extrabold leading-none tracking-[-0.02em]">
                  {item.figure}
                </span>
                <h3 className="m-0 text-[1.625rem] font-extrabold leading-tight">{item.title}</h3>
                <p className="m-0 text-[1.0625rem] leading-relaxed">{item.text}</p>
              </Card>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-8">
          <Separator size="md" className="border-balsa-background" />
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <h3 className="m-0 text-sm font-bold uppercase tracking-[0.08em]">Scrivono di noi</h3>
            <p className="m-0 min-w-0 flex-[1_1_32rem] font-balsa-title text-[clamp(1.125rem,1.6vw,1.375rem)] font-bold leading-relaxed">
              {pressOutlets.join(" · ")}
            </p>
            <Link href={site.press} variant="text" color="primary" size="md" suffixIcon={ArrowRight} className="px-0 text-base font-extrabold">
              Leggi tutti gli articoli
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonianze" labelledBy="testimonianze-title">
      <div className="flex flex-col gap-16">
        <SectionHeading
          id="testimonianze-title"
          kicker="La community dei revoluzionari"
          intro="Piacciamo tanto che ci presentano agli amici. Leggi cosa dice chi ci ha scelto: secondo noi è la miglior pubblicità possibile."
        >
          Chiedi a loro
          <br />
          cosa ne <Highlight>pensano.</Highlight>
        </SectionHeading>
        <ul className="m-0 grid list-none gap-x-6 gap-y-10 p-0 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.name} className="flex">
              <Card
                variant="surface"
                padding="lg"
                rounded="3xl"
                shadow={false}
                className="relative flex w-full flex-col gap-4 overflow-visible border-0 bg-balsa-surface pt-11 text-balsa-primary"
              >
                <figure className="m-0 flex h-full flex-col gap-4">
                  <span className="absolute -top-4 left-6 -rotate-[5deg] bg-balsa-primary px-3.5 py-2.5 text-base font-extrabold leading-none text-balsa-surface">
                    {item.since}
                  </span>
                  <p className="m-0 flex items-center gap-1">
                    <span className="sr-only">Valutazione: 5 stelle su 5</span>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} aria-hidden="true" className="size-5 fill-current" strokeWidth={1.5} />
                    ))}
                  </p>
                  <blockquote className="m-0 text-lg font-medium leading-relaxed">“{item.quote}”</blockquote>
                  <figcaption className="mt-auto font-balsa-title text-[1.375rem] font-extrabold leading-tight">
                    {item.name}
                  </figcaption>
                </figure>
              </Card>
            </li>
          ))}
        </ul>
        <Link href={site.testimonials} variant="text" color="primary" size="lg" suffixIcon={ArrowRight} className="self-start px-0 text-lg font-extrabold">
          Leggi tutte le testimonianze
        </Link>
      </div>
    </Section>
  );
}
