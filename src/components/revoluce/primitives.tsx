import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";

/*
 * Small layout pieces for the Revoluce homepage. Colours come from Balsa's
 * palette roles (bg-balsa-*, text-balsa-*) and the Revoluce service tokens
 * (bg-rv-luce / gas / fibra) declared in index.css.
 */

type Tone = "light" | "brand";

/** Which corners of a band are rounded (rounded-rv-section, 30px). */
type Corners = "top" | "bottom" | "all";

/**
 * What shows through the rounded corners. The page is white, so a band
 * between white bands needs nothing; a band next to a lilac one shows that
 * lilac instead of white specks.
 */
type Behind = "light" | "light-below";

const cornerClasses: Record<Corners, string> = {
  top: "rounded-t-rv-section",
  bottom: "rounded-b-rv-section",
  all: "rounded-rv-section",
};

const behindClasses: Record<Behind, string> = {
  light: "bg-balsa-background",
  "light-below":
    "bg-[linear-gradient(to_bottom,var(--color-balsa-surface)_50%,var(--color-balsa-background)_50%)]",
};

/**
 * A full-width band with the page's content column inside it.
 *
 * - `rounded` turns the band into a panel on the white page.
 * - `inset` keeps a white margin around a fully rounded panel (the quote band).
 */
export function Section({
  id,
  tone = "light",
  surface = false,
  rounded,
  behind,
  inset = false,
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  surface?: boolean;
  rounded?: Corners;
  behind?: Behind;
  inset?: boolean;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  const ground =
    tone === "brand"
      ? "bg-balsa-primary text-balsa-surface"
      : surface
        ? "bg-balsa-surface text-balsa-foreground"
        : "bg-balsa-background text-balsa-foreground";
  const content = <div className="relative z-10 mx-auto w-full max-w-7xl">{children}</div>;

  if (inset) {
    return (
      <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-24 bg-balsa-surface p-3 sm:p-5 ${className}`}>
        <div className={`relative isolate overflow-hidden rounded-rv-section px-5 py-20 sm:px-8 md:py-40 lg:px-12 ${ground}`}>
          {content}
        </div>
      </section>
    );
  }

  const band = (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate overflow-hidden scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 lg:px-12 ${ground} ${rounded ? cornerClasses[rounded] : ""} ${className}`}
    >
      {content}
    </section>
  );
  return behind ? <div className={behindClasses[behind]}>{band}</div> : band;
}

/** Highlight box behind a word or phrase, as in the Revoluce social and web visuals. */
export function Highlight({
  children,
  tone = "surface",
}: {
  children: ReactNode;
  tone?: "surface" | "background" | "luce" | "accent";
}) {
  const box = {
    surface: "bg-balsa-surface text-balsa-primary",
    background: "bg-balsa-background text-balsa-primary",
    luce: "bg-rv-luce text-balsa-primary",
    accent: "bg-balsa-accent text-balsa-primary",
  }[tone];
  return (
    <span
      className={`mt-[0.08em] inline-block px-[0.15em] pb-[0.07em] pt-[0.03em] font-extrabold [box-decoration-break:clone] ${box}`}
    >
      {children}
    </span>
  );
}

/**
 * Kicker label above a section title, built on Balsa's Badge. White box on
 * violet and lilac grounds, lilac box on white grounds.
 */
export function Kicker({ children, onSurface = false }: { children: ReactNode; onSurface?: boolean }) {
  return (
    <Badge
      variant="solid"
      size="lg"
      rounded="none"
      className={`${onSurface ? "bg-balsa-background" : "bg-balsa-surface"} px-3 py-2 text-sm font-bold italic uppercase tracking-wide text-balsa-primary sm:text-base`}
    >
      {children}
    </Badge>
  );
}

export function SectionHeading({
  id,
  kicker,
  children,
  intro,
  onBrand = false,
  onSurface = false,
  align = "split",
}: {
  id: string;
  kicker: string;
  children: ReactNode;
  intro?: ReactNode;
  onBrand?: boolean;
  onSurface?: boolean;
  align?: "split" | "stack";
}) {
  return (
    <div
      className={
        align === "split"
          ? "flex flex-wrap items-end justify-between gap-x-16 gap-y-6"
          : "flex flex-col items-start gap-6"
      }
    >
      <div
        className={`flex min-w-0 flex-col items-start gap-5 ${align === "split" ? "flex-[1_1_32rem]" : ""}`}
      >
        <Kicker onSurface={onSurface}>{kicker}</Kicker>
        <h2
          id={id}
          className="m-0 text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.04] tracking-[-0.015em]"
        >
          {children}
        </h2>
      </div>
      {intro ? (
        <p
          className={`m-0 max-w-[30rem] flex-[1_1_20rem] text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-relaxed ${
            onBrand ? "text-balsa-background" : ""
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/**
 * The "r" curve of the Revoluce mark, used as a large decorative path.
 *
 * It sits behind the text (-z-10 inside the content column), and its tone
 * keeps the text above it at WCAG AA:
 * - on violet bands, 10% white: white text stays at 5.6:1, but lilac text
 *   drops to 3.7:1, so body text the curve crosses on violet is white;
 * - on lilac bands, 40% white (violet text 5.4:1); a violet tint would drop it to 4.0:1;
 * - on white bands, a 10% violet tint (violet text 5.8:1).
 */
const curveTones = {
  brand: "text-balsa-surface/10",
  light: "text-balsa-surface/40",
  surface: "text-balsa-primary/10",
} as const;

export function Curve({ className = "", tone = "light" }: { className?: string; tone?: keyof typeof curveTones }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 2278.39 721.7"
      className={`pointer-events-none absolute -z-10 h-auto ${curveTones[tone]} ${className}`}
      fill="currentColor"
    >
      <path d="M30.02,416c246.15,231.41,624.08,327.05,913.58,19.11l264.04-280.87c34.93-37.16,33.13-95.78-4.01-130.69-35.63-33.5-94.73-30.94-129.06,5.58l-264.04,280.87c-193,205.29-475.79,141.76-655.4-27.09-37.15-34.93-95.78-33.13-130.67,3.99-34.65,36.88-32.22,93.58,5.56,129.1" />
      <path d="M2248.36,305.7c-246.15-231.41-624.08-327.05-913.58-19.11l-264.04,280.87c-34.93,37.16-33.13,95.78,4.01,130.69,35.63,33.5,94.72,30.94,129.06-5.58l264.04-280.87c192.99-205.29,475.79-141.76,655.4,27.09,37.16,34.93,95.78,33.13,130.67-3.99,34.65-36.88,32.22-93.58-5.56-129.1" />
    </svg>
  );
}
