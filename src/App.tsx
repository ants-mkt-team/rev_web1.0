import { Blog } from "@/sections/Blog";
import { Closing, SiteFooter } from "@/sections/Closing";
import { Contact } from "@/sections/Contact";
import { Enrica } from "@/sections/Enrica";
import { Faq } from "@/sections/Faq";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Pricing } from "@/sections/Pricing";
import { Quote } from "@/sections/Quote";
import { Services } from "@/sections/Services";
import { Guarantees, Testimonials } from "@/sections/Trust";

export default function App() {
  return (
    <>
      <Header />
      <main id="contenuto" className="font-balsa-body">
        <Hero />
        <Pricing />
        <Quote />
        <Services />
        <Enrica />
        <Guarantees />
        <Testimonials />
        <Faq />
        <Contact />
        <Blog />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}
