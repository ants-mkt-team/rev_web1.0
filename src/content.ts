/*
 * Homepage copy and links, taken from www.revoluce.it and the Revoluce
 * homepage design. Every external URL here exists on the current site.
 */
import iconFibra from "@/assets/revoluce/icon-fibra.svg";
import iconGas from "@/assets/revoluce/icon-gas.svg";
import iconLuce from "@/assets/revoluce/icon-luce.svg";

export const site = {
  home: "https://www.revoluce.it/",
  howItWorks: "https://www.revoluce.it/come-funziona/",
  about: "https://www.revoluce.it/chi-siamo/",
  testimonials: "https://www.revoluce.it/testimonianze/",
  blog: "https://www.revoluce.it/blog/",
  press: "https://www.revoluce.it/scrivono-di-noi/",
  forms: "https://www.revoluce.it/modulistica/",
  accessibility: "https://www.revoluce.it/accessibilita",
  privacy: "https://www.revoluce.it/privacy-policy/",
  cookies: "https://www.iubenda.com/privacy-policy/25237510/cookie-policy",
  notResident: "https://www.revoluce.it/residente-no/",
  promo: "https://www.revoluce.it/salernitana/",
  customerArea: "https://revoluce.crmzeus.it/",
  enricaWebApp: "https://my.revoluce.it/enrica/",
  ireneNews: "https://www.revoluce.it/revoluce-da-enrica-a-irene/",
  phone: "089 0977647",
  phoneHref: "tel:+390890977647",
  email: "info@revoluce.it",
  pec: "revoluce@pec.it",
  address: "Via Tommaso Prudenza, 9 · 84131 Salerno",
  hours: "Lun–Ven 09.30–13.00 e 14.30–17.30",
} as const;

export type ServiceId = "luce" | "gas" | "fibra";

export interface Service {
  id: ServiceId;
  name: string;
  category: string;
  icon: string;
  short: string;
  long: string;
  cta: string;
  href: string;
}

export const services: readonly Service[] = [
  {
    id: "luce",
    name: "Luce",
    category: "Energia elettrica",
    icon: iconLuce,
    short: "Ricaricabile, con prezzo tutto incluso.",
    long: "Energia ricaricabile con prezzo tutto incluso: paghi solo quello che consumi.",
    cta: "Scopri come funziona",
    href: site.howItWorks,
  },
  {
    id: "gas",
    name: "Gas",
    category: "Gas naturale",
    icon: iconGas,
    short: "Il calore di casa, zero sorprese.",
    long: "Perché fermarsi a metà? Il calore di casa con la stessa trasparenza della luce.",
    cta: "Chiedi l'offerta gas",
    href: "#contatti",
  },
  {
    id: "fibra",
    name: "Fibra",
    category: "Connessione internet",
    icon: iconFibra,
    short: "Irene: niente lag, niente drammi.",
    long: "Tu la conosci Irene? È la fibra di Revoluce: niente lag, niente buffering, niente drammi.",
    cta: "Conosci Irene",
    href: site.ireneNews,
  },
];

export const navItems = [
  { title: "Luce", link: "#servizi" },
  { title: "Gas", link: "#servizi" },
  { title: "Fibra", link: "#servizi" },
  { title: "Come funziona", link: "#prezzo" },
  { title: "Testimonianze", link: "#testimonianze" },
  { title: "Contatti", link: "#contatti" },
] as const;

export const trustPoints = [
  "Soddisfatti o rimborsati",
  "Premio Le Fonti 2020 · Startup dell'anno",
  "Certificati da Il Salvagente",
] as const;

export const howItWorksSteps = [
  {
    lead: "Come il credito del telefono:",
    strong: "ricarica il saldo.",
    text: "Con carta di credito, carta ricaricabile, PayPal, Postepay o addebito su conto corrente.",
  },
  {
    lead: "Ogni giorno scaliamo i consumi reali:",
    strong: "tu controlli tutto dal cellulare.",
    text: "Spesa, prezzo, saldo e movimenti sempre aggiornati nell'app Enrica.",
  },
  {
    lead: "Il credito è finito?",
    strong: "Non resti al buio.",
    text: "Non interrompiamo la fornitura: finché il saldo è negativo applichiamo un prezzo leggermente più alto, poi con la nuova ricarica torna tutto come prima.",
  },
] as const;

export const guarantees = [
  {
    figure: "6 mesi",
    title: "Soddisfatti o rimborsati",
    text: "Il servizio non è quello che ti aspettavi? Invia il recesso entro 10 giorni dal termine del sesto mese di fornitura: ti restituiamo l'importo speso fino a quel momento.",
  },
  {
    figure: "2020",
    title: "Startup dell'anno",
    text: "Premiati perché innovatori: abbiamo ricevuto il Premio Le Fonti 2020. Le promesse le manteniamo coi fatti.",
  },
  {
    figure: "100%",
    title: "Certificati da Il Salvagente",
    text: "Il portale italiano delle aziende virtuose ha verificato kit contrattuale, recensioni e soddisfazione dei clienti.",
  },
] as const;

export const pressOutlets = [
  "Il Tempo",
  "Avvenire",
  "Fortune",
  "La Gazzetta del Mezzogiorno",
  "Libero",
  "Milano Finanza",
  "la Repubblica",
  "Staffetta Quotidiana",
  "StartupItalia",
] as const;

export const testimonials = [
  {
    name: "Giovanni Rivieccio",
    since: "Recensione del 01/05/2021",
    quote:
      "Azienda molto seria e trasparente, gli operatori esprimono professionalità e contemporaneamente gentilezza. Prezzi fortemente concorrenziali. Consigliatissima!",
  },
  {
    name: "Nicola Massimo",
    since: "Revoluzionario dal 01/04/2021",
    quote:
      "Entrato in Revoluce grazie a un amico. Ad oggi pienamente soddisfatto. Contratto e fatture chiare. Assistenza al top, rispondono sempre e senza troppi giri di parole risolvi la questione.",
  },
  {
    name: "Andrea Ghiori",
    since: "Revoluzionario dal 01/03/2021",
    quote:
      "Ho parlato con l'operatrice Flavia ed è stata molto carina e gentile nel rispondere a tutte le mie domande. Grandi ragazzi, buon lavoro!",
  },
] as const;

export const faqs = [
  {
    id: "prezzo",
    title: "Il prezzo include tutte le voci della bolletta?",
    content:
      "Sì, comprende tutti gli oneri della bolletta, senza costi extra. Restano fuori solo il canone RAI e i costi per aumento di potenza, voltura e subentro.",
  },
  {
    id: "credito",
    title: "Se finisco il credito rimango senza energia?",
    content:
      "No! Se il credito finisce non interrompiamo la fornitura. Per i consumi con saldo negativo applichiamo un prezzo leggermente più alto, finché non fai una nuova ricarica e il saldo torna positivo.",
  },
  {
    id: "canone",
    title: "Come funziona con il canone TV?",
    content:
      "Ogni mese fatturiamo l'importo richiesto dall'Agenzia delle Entrate, con un documento separato dalla fornitura. Per te non cambia niente: lo paghi con la ricarica, come l'energia.",
  },
  {
    id: "pagamento",
    title: "Posso pagare con carta di credito?",
    content:
      "Sì. Puoi scegliere l'addebito su conto corrente oppure, per goderti la comodità dell'energia ricaricabile, carta di credito, carta ricaricabile, PayPal o Postepay.",
  },
] as const;

export const articles = [
  {
    date: "26 ottobre 2026",
    title:
      "Stop alle truffe, in bolletta e al telefono: con Revoluce arrivano l'energia ricaricabile e Devia in omaggio!",
    href: "https://www.revoluce.it/stop-alle-truffe-in-bolletta-e-al-telefono-con-revoluce-arrivano-lenergia-ricaricabile-e-devia-in-omaggio/",
  },
  {
    date: "16 ottobre 2026",
    title:
      "L'energia a portata di tap: l'App Enrica di Revoluce è ufficialmente tornata disponibile su tutti gli store!",
    href: "https://www.revoluce.it/lenergia-a-portata-di-tap-lapp-enrica-di-revoluce-e-ufficialmente-tornata-disponibile-su-tutti-gli-store/",
  },
  {
    date: "18 marzo 2026",
    title: "Revoluce festeggia 10 anni di innovazione e semplicità",
    href: "https://www.revoluce.it/revoluce-festeggia-10-anni-di-innovazione-e-semplicita/",
  },
] as const;

export const blogCategories = [
  {
    title: "Economia in casa",
    text: "Ottimizzare i consumi è più facile di quello che pensi.",
    href: "https://www.revoluce.it/category/economia_revo",
  },
  {
    title: "Energia amica",
    text: "Se la conosci te la fai amica: informazioni utili e curiosità.",
    href: "https://www.revoluce.it/category/energia_amica/",
  },
  {
    title: "Notizie energia",
    text: "Le notizie che selezioniamo per te, per non perdere nessun aggiornamento.",
    href: "https://www.revoluce.it/category/notizie-energia",
  },
  {
    title: "Conosciamo Revoluce",
    text: "Approfondimenti e dietro le quinte sul nostro lavoro e sul team.",
    href: "https://www.revoluce.it/category/conosciamo_revo",
  },
] as const;
