import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Highlight, Section, SectionHeading } from "@/components/revoluce/primitives";
import { services, type ServiceId } from "@/content";

const ground: Record<ServiceId, string> = {
  luce: "bg-rv-luce",
  gas: "bg-rv-gas",
  fibra: "bg-rv-fibra",
};

export function Services() {
  return (
    <Section id="servizi" surface labelledBy="servizi-title">
      <div className="flex flex-col gap-14">
        <SectionHeading
          id="servizi-title"
          kicker="Il mondo Revoluce"
          onSurface
          intro="Siamo nati per togliere complessità all'energia. Oggi portiamo la stessa trasparenza, lo stesso controllo e la stessa assistenza a tutti i servizi essenziali della casa."
        >
          Luce, gas e fibra:
          <br />
          <Highlight tone="background">stessa semplicità.</Highlight>
        </SectionHeading>

        <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.id} className="flex">
              <a
                href={service.href}
                className={`group flex min-h-[27.5rem] w-full flex-col justify-between gap-12 rounded-[2rem] p-8 text-balsa-primary no-underline ${ground[service.id]}`}
              >
                <span className="flex items-start justify-between gap-4">
                  <Badge
                    variant="solid"
                    rounded="none"
                    className="bg-balsa-surface font-bold italic uppercase tracking-wide text-balsa-primary"
                  >
                    {service.category}
                  </Badge>
                  <span className="flex size-20 flex-none items-center justify-center rounded-full bg-balsa-primary">
                    <img src={service.icon} alt="" className="h-10 w-auto" />
                  </span>
                </span>
                <span className="flex flex-col gap-3.5">
                  <span className="font-balsa-title text-[clamp(3.25rem,4.8vw,4.5rem)] font-extrabold leading-none">
                    {service.name}
                  </span>
                  <span className="text-2xl leading-snug">{service.long}</span>
                  <span className="mt-2 inline-flex items-center gap-2 text-xl font-extrabold underline underline-offset-[6px] group-hover:no-underline">
                    {service.cta}
                    <ArrowRight aria-hidden="true" className="size-5" strokeWidth={2.5} />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
