import { ArrowRight } from "lucide-react";
import logoBianco from "@/assets/revoluce/logo-bianco.svg";
import { Footer } from "@/components/ui/Footer";
import { Link } from "@/components/ui/Link";
import { Curve, Highlight } from "@/components/revoluce/primitives";
import { services, site } from "@/content";

export function Closing() {
  return (
    <section
      aria-labelledby="chiusura-title"
      className="relative isolate overflow-hidden bg-balsa-primary px-5 pb-20 pt-20 text-balsa-surface sm:px-8 md:pt-28 lg:px-12"
    >
      <Curve onBrand className="-right-[30%] -top-[6%] w-[85%] rotate-[14deg]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-x-16 gap-y-10">
        <div className="flex min-w-0 flex-[1_1_35rem] flex-col items-start gap-6">
          <h2
            id="chiusura-title"
            className="m-0 text-[clamp(2.5rem,5vw,4.75rem)] font-light leading-[1.06] tracking-[-0.015em]"
          >
            Una fornitura
            <br />
            <Highlight>semplice</Highlight> e <Highlight>trasparente.</Highlight>
          </h2>
          <p className="m-0 text-[1.1875rem] leading-relaxed text-balsa-background">
            Scopri come funziona Revoluce e le nostre offerte:
          </p>
          <ul className="m-0 flex list-none flex-wrap items-center gap-x-10 gap-y-4 p-0">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href={service.href}
                  className="flex items-center gap-3.5 font-balsa-title text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-none text-balsa-surface no-underline hover:underline"
                >
                  <img src={service.icon} alt="" className="h-11 w-auto" />
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="#contatti"
          variant="solid"
          color="neutral"
          size="lg"
          rounded="full"
          suffixIcon={ArrowRight}
          className="h-14 px-7 text-lg bg-balsa-surface font-bold text-balsa-primary hover:bg-balsa-background"
        >
          Attiva la tua fornitura
        </Link>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <Footer
      variant="inverse"
      className="border-t-balsa-surface/25 text-balsa-surface"
      legalLogo={{ src: logoBianco, alt: "Revoluce, energia ricaricabile", href: site.home }}
      description="Energia ricaricabile dal 2016. Luce, gas e fibra con un prezzo chiaro e un'assistenza fatta da persone vere, a Salerno."
      leadTitle="Revoluce"
      navigationLabel="Link del sito"
      sections={[
        {
          title: "Revoluce",
          links: [
            { title: "Come funziona", link: site.howItWorks },
            { title: "Chi siamo", link: site.about },
            { title: "Testimonianze", link: site.testimonials },
            { title: "Scrivono di noi", link: site.press },
            { title: "Blog", link: site.blog },
            { title: "Scopri le promo", link: site.promo },
          ],
        },
        {
          title: "Documenti",
          links: [
            { title: "Modulistica", link: site.forms },
            { title: "Accessibilità", link: site.accessibility },
            { title: "Privacy policy", link: site.privacy },
            { title: "Cookie policy", link: site.cookies },
          ],
        },
        {
          title: "Clienti",
          links: [
            { title: "Area clienti", link: site.customerArea },
            { title: "WebApp Enrica", link: site.enricaWebApp },
          ],
        },
      ]}
      contactGroups={[
        {
          title: "Contatti",
          items: [
            { label: site.phone, link: site.phoneHref, detail: site.hours },
            { label: site.email, link: `mailto:${site.email}`, detail: "Rispondiamo entro 24 ore" },
          ],
        },
        {
          title: "Sede",
          items: [{ label: site.address, detail: "Qui lavorano i nostri Tutor" }],
        },
      ]}
      copyright="Revoluce S.r.l. · P.IVA / CF 03788060048 · CCIAA 484598 · SDI M5UXCR1"
      legalText={`PEC ${site.pec}`}
    />
  );
}
