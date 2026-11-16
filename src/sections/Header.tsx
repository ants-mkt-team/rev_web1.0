import { ArrowRight } from "lucide-react";
import logoBianco from "@/assets/revoluce/logo-bianco-breve.svg";
import { Link } from "@/components/ui/Link";
import { Navbar } from "@/components/ui/Navbar";
import { navItems, site } from "@/content";

/*
 * The navbar sits on top of the violet hero: a 10% white bar with a white
 * hairline and a rounded bottom-left corner, white logo and links. Balsa's
 * Navbar has no "on brand" variant, so the overrides below target its parts
 * from the outside (src/components/ui stays untouched):
 * - [data-balsa=navbar-surface]: the bar's material layer (no blur: the
 *   design system is flat);
 * - nav > ul a: the desktop links;
 * - nav button: the mobile menu toggle;
 * - nav + div: the mobile panel, Balsa's "surface" look (violet links on lilac)
 *   made opaque.
 */
const onBrand = [
  "absolute inset-x-0 top-0 text-balsa-surface",
  "[&>[data-balsa=navbar-surface]]:bg-balsa-surface/10",
  "[&>[data-balsa=navbar-surface]]:border-balsa-surface/30",
  "[&>[data-balsa=navbar-surface]]:rounded-bl-rv-section",
  "[&>[data-balsa=navbar-surface]]:backdrop-filter-none",
  "lg:[&>nav]:h-19",
  "[&>nav_ul_a]:text-balsa-surface",
  "[&>nav_ul_a:hover]:text-balsa-surface",
  "[&>nav_button]:text-balsa-surface",
  "[&>nav_button:hover]:bg-balsa-surface/10",
  // Mobile panel: solid lilac, so the hero title does not show through the links.
  "[&>nav+div]:bg-balsa-background",
  "[&>nav+div]:backdrop-filter-none",
].join(" ");

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
        logo={{ src: logoBianco, alt: "Revoluce: torna alla homepage", href: site.home }}
        items={navItems}
        variant="surface"
        type="bar"
        behavior="static"
        color="neutral"
        contentMaxWidth="80rem"
        itemsAlignment="right"
        className={onBrand}
        actions={
          <div className="flex items-center gap-3">
            <Link
              href="#preventivo"
              variant="solid"
              color="neutral"
              size="md"
              rounded="full"
              suffixIcon={ArrowRight}
              className="bg-balsa-surface font-bold text-balsa-primary hover:bg-balsa-background"
            >
              Passa a Revoluce
            </Link>
            <Link
              href={site.customerArea}
              variant="outline"
              color="neutral"
              size="md"
              rounded="full"
              className="border-balsa-surface font-bold text-balsa-surface hover:bg-balsa-surface/10"
            >
              Area clienti
            </Link>
          </div>
        }
      />
    </header>
  );
}
