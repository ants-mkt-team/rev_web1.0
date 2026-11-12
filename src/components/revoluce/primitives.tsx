import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";

/*
 * Small layout pieces for the Revoluce homepage. Colours come from Balsa's
 * palette roles (bg-balsa-*, text-balsa-*) and the Revoluce service tokens
 * (bg-rv-luce / gas / fibra) declared in index.css.
 */

type Tone = "light" | "brand";

/** A full-width band with the page's content column inside it. */
export function Section({
  id,
  tone = "light",
  surface = false,
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  surface?: boolean;
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
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate overflow-hidden scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 lg:px-12 ${ground} ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
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

/** The "r" curve of the Revoluce mark, used as a large decorative path. */
export function Curve({ className = "", onBrand = false }: { className?: string; onBrand?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 2278.39 721.7"
      className={`pointer-events-none absolute z-0 h-auto ${onBrand ? "text-balsa-surface/10" : "text-balsa-primary/10"} ${className}`}
      fill="currentColor"
    >
      <path d="M30.02,416c246.15,231.41,624.08,327.05,913.58,19.11l264.04-280.87c34.93-37.16,33.13-95.78-4.01-130.69-35.63-33.5-94.73-30.94-129.06,5.58l-264.04,280.87c-193,205.29-475.79,141.76-655.4-27.09-37.15-34.93-95.78-33.13-130.67,3.99-34.65,36.88-32.22,93.58,5.56,129.1" />
      <path d="M2248.36,305.7c-246.15-231.41-624.08-327.05-913.58-19.11l-264.04,280.87c-34.93,37.16-33.13,95.78,4.01,130.69,35.63,33.5,94.72,30.94,129.06-5.58l264.04-280.87c192.99-205.29,475.79-141.76,655.4,27.09,37.16,34.93,95.78,33.13,130.67-3.99,34.65-36.88,32.22-93.58-5.56-129.1" />
    </svg>
  );
}
