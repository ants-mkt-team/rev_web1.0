import { ArrowRight, ArrowUpRight } from "lucide-react";
import lavatrice from "@/assets/revoluce/lavatrice-adesivo.svg";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { Highlight, Kicker, Section } from "@/components/revoluce/primitives";
import { articles, blogCategories, site } from "@/content";

export function Blog() {
  return (
    <Section id="blog" labelledBy="blog-title">
      <div className="flex flex-col gap-14">
        <div className="flex flex-wrap items-center justify-between gap-x-16 gap-y-6">
          <div className="flex min-w-0 flex-[1_1_32rem] flex-col items-start gap-5">
            <Kicker>Dal blog</Kicker>
            <h2
              id="blog-title"
              className="m-0 text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.04] tracking-[-0.015em]"
            >
              Raccontiamo
              <br />
              <Highlight>l'energia.</Highlight>
            </h2>
            <p className="m-0 max-w-[30rem] text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-relaxed">
              Consigli per risparmiare, notizie dal settore e il dietro le quinte di Revoluce.
            </p>
            <Link href={site.blog} variant="text" color="primary" size="lg" suffixIcon={ArrowRight} className="px-0 text-lg font-extrabold">
              Vai al blog
            </Link>
          </div>
          <div aria-hidden="true" className="relative mr-6 hidden h-80 w-[21.25rem] flex-none md:block">
            <span className="absolute right-0 top-0 size-[18.75rem] rounded-full bg-rv-luce" />
            <img src={lavatrice} alt="" className="absolute left-0 top-8 w-[17rem]" />
          </div>
        </div>

        <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-3">
          {articles.map((article) => (
            <li key={article.href} className="flex">
              <Card
                variant="surface"
                padding="lg"
                rounded="3xl"
                shadow={false}
                className="relative flex min-h-64 w-full flex-col gap-4 border-0 bg-balsa-surface text-balsa-primary"
              >
                <Badge variant="soft" color="primary" rounded="full" className="self-start font-bold uppercase tracking-[0.06em]">
                  {article.date}
                </Badge>
                <h3 className="m-0 text-2xl font-bold leading-snug">
                  <a href={article.href} className="text-balsa-primary no-underline after:absolute after:inset-0 after:rounded-[inherit] hover:underline">
                    {article.title}
                  </a>
                </h3>
                <span aria-hidden="true" className="mt-auto inline-flex items-center gap-2 text-lg font-extrabold underline underline-offset-[6px]">
                  Leggi
                  <ArrowRight className="size-5" strokeWidth={2.5} />
                </span>
              </Card>
            </li>
          ))}
        </ul>

        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {blogCategories.map((category) => (
            <li key={category.href} className="flex">
              <a
                href={category.href}
                className="flex w-full flex-col gap-2.5 rounded-3xl border-2 border-balsa-primary p-6 text-balsa-primary no-underline transition-colors hover:bg-balsa-surface"
              >
                <span className="flex items-center gap-1.5 font-balsa-title text-[1.375rem] font-extrabold leading-tight">
                  {category.title}
                  <ArrowUpRight aria-hidden="true" className="size-5" strokeWidth={2.5} />
                </span>
                <span className="text-[0.9375rem] leading-relaxed">{category.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
