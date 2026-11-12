import { useState } from "react";
import { Accordion, type AccordionValue } from "@/components/ui/Accordion";
import { Highlight, Kicker, Section } from "@/components/revoluce/primitives";
import { faqs } from "@/content";

export function Faq() {
  const [open, setOpen] = useState<AccordionValue>(faqs[0].id);

  return (
    <Section id="faq" surface labelledBy="faq-title">
      <div className="flex flex-wrap items-start gap-x-18 gap-y-10">
        <div className="flex min-w-0 flex-[1_1_22rem] flex-col items-start gap-5">
          <Kicker onSurface>Domande frequenti</Kicker>
          <h2
            id="faq-title"
            className="m-0 text-[clamp(2.25rem,4.4vw,4rem)] font-light leading-[1.04] tracking-[-0.015em]"
          >
            Le domande
            <br />
            che ci fanno
            <br />
            <Highlight tone="background">sempre.</Highlight>
          </h2>
          <p className="m-0 text-lg leading-relaxed">
            Non trovi la tua?{" "}
            <a href="#contatti" className="font-bold text-balsa-primary underline underline-offset-4">
              Chiedila ai nostri Tutor
            </a>
            .
          </p>
        </div>
        <div className="min-w-0 flex-[1.6_1_32rem]">
          <Accordion
            id="faq-accordion"
            label="Domande frequenti"
            items={faqs}
            type="single"
            collapsible
            variant="underline"
            size="lg"
            headingLevel={3}
            value={open}
            onValueChange={setOpen}
            className="text-balsa-primary [&_[data-balsa=collapsible-content]]:text-lg [&_[data-balsa=collapsible-content]]:leading-relaxed [&_[data-balsa=collapsible-trigger]]:min-h-16 [&_[data-balsa=collapsible-trigger]]:text-xl [&_[data-balsa=collapsible-trigger]]:font-bold"
          />
        </div>
      </div>
    </Section>
  );
}
