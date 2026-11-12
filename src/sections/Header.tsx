import { ArrowRight } from "lucide-react";
import logoViola from "@/assets/revoluce/logo-viola.svg";
import { Link } from "@/components/ui/Link";
import { Navbar } from "@/components/ui/Navbar";
import { navItems, site } from "@/content";

export function Header() {
  return (
    <header>
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-balsa-surface focus:px-4 focus:py-3 focus:text-balsa-primary"
      >
        Vai al contenuto
      </a>
      <Navbar
        logo={{ src: logoViola, alt: "Revoluce, energia ricaricabile: torna alla homepage", href: site.home }}
        items={navItems}
        variant="surface"
        type="bar"
        behavior="static"
        color="primary"
        contentMaxWidth="80rem"
        actions={
          <div className="flex items-center gap-3">
            <Link href={site.customerArea} variant="outline" color="primary" size="md" rounded="full">
              Area clienti
            </Link>
            <Link
              href="#preventivo"
              variant="solid"
              color="primary"
              size="md"
              rounded="full"
              suffixIcon={ArrowRight}
            >
              Preventivo
            </Link>
          </div>
        }
      />
    </header>
  );
}
