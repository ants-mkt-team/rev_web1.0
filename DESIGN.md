---
name: Revoluce
description: Luce, gas e fibra con un prezzo tutto incluso, raccontati come un manifesto viola.
colors:
  viola-revoluce: "#5e39da"
  viola-revoluce-hover: "#684cde"
  lilla-ricarica: "#dbcdfc"
  bianco-carta: "#ffffff"
  lilla-campo: "#f5f1ff"
  lilla-bordo: "#8a7bea"
  viola-attenuato: "#6d55e1"
  giallo-luce: "#fcecb8"
  arancio-gas: "#f9ca90"
  azzurro-fibra: "#b5e5f9"
  rosso-errore: "#b91c1c"
typography:
  display:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "5.125rem"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  numeral:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "6.25rem"
    fontWeight: 800
    lineHeight: 0.9
  title:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "2.625rem"
    fontWeight: 800
    lineHeight: 1
  body-lead:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.625
  body-small:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.025em"
rounded:
  none: "0px"
  control: "8px"
  surface: "14px"
  panel: "18px"
  card: "24px"
  service: "32px"
  phone: "48px"
  section: "30px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "24px"
  xl: "56px"
  2xl: "64px"
  gutter: "20px"
  gutter-desktop: "48px"
  section: "80px"
  section-desktop: "112px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.viola-revoluce}"
    textColor: "{colors.lilla-ricarica}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.viola-revoluce-hover}"
  button-on-brand:
    backgroundColor: "{colors.bianco-carta}"
    textColor: "{colors.viola-revoluce}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 28px"
  button-on-brand-hover:
    backgroundColor: "{colors.lilla-ricarica}"
  input:
    backgroundColor: "{colors.lilla-campo}"
    textColor: "{colors.viola-revoluce}"
    rounded: "{rounded.control}"
  card-form:
    backgroundColor: "{colors.bianco-carta}"
    textColor: "{colors.viola-revoluce}"
    rounded: "{rounded.card}"
    padding: "32px"
  card-servizio-luce:
    backgroundColor: "{colors.giallo-luce}"
    textColor: "{colors.viola-revoluce}"
    rounded: "{rounded.service}"
    padding: "32px"
  etichetta:
    backgroundColor: "{colors.bianco-carta}"
    textColor: "{colors.viola-revoluce}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  evidenziatore:
    backgroundColor: "{colors.bianco-carta}"
    textColor: "{colors.viola-revoluce}"
    rounded: "{rounded.none}"
  avviso:
    backgroundColor: "{colors.bianco-carta}"
    textColor: "{colors.viola-revoluce}"
    rounded: "{rounded.panel}"
    padding: "16px"
---

# Design System: Revoluce

## Overview

**Creative North Star: "Il manifesto viola"**

Revoluce parla come un manifesto. Grandi campi di colore pieno, titoli enormi in un peso leggero e, dentro, poche parole chiave in grassetto pieno dentro un riquadro bianco, come se qualcuno ci fosse passato sopra con l'evidenziatore. Il nome dice rivoluzione e la grafica lo prende sul serio, ma con il sorriso. L'ironia dei testi ("niente lag, niente drammi") si ritrova negli elementi ruotati come adesivi, nella curva della "r" che attraversa le sezioni e nei colori dei servizi.

L'atmosfera è insieme diretta, calda, giocosa ed energica. Diretta perché tutto è in vista: un prezzo, un numero di telefono, nessuna nota a piè di pagina. Calda perché parla con il tu e mette in primo piano persone vere. Giocosa ed energica perché usa colori saturi e contrasti netti a un ritmo vivace, che si alterna tra viola, lilla e bianco.

Due cose che Revoluce non deve mai sembrare. La prima è **il grande gestore**: blu istituzionale, foto stock di famiglie sorridenti, tono distaccato. La seconda è **il volantino aggressivo**: prezzi urlati, offerte lampeggianti, asterischi e scritte piccole.

**Key Characteristics:**
- Una pagina Bianco Carta su cui le fasce viola e lilla si appoggiano come pannelli con gli angoli arrotondati a 30 px.
- Titoli in Epilogue Light molto grandi, con le parole chiave in ExtraBold dentro un riquadro evidenziatore.
- Nessuna ombra: la profondità nasce dal contrasto tra i fondi e dai bordi pieni di 2 px.
- Azioni a pillola, contenitori arrotondati, etichette ed evidenziatori ad angolo vivo.
- Elementi ruotati di pochi gradi, come adesivi, e la curva della "r" come firma decorativa.

## Colors

Una palette quasi monocromatica in viola e lilla, saturata e calda, con tre colori pastello riservati ai servizi.

### Primary
- **Viola Revoluce** (#5e39da): il colore del marchio. Fa da fondo pieno per le sezioni "brand" (hero, contatti, chiusura) e da colore del testo, dei bordi e delle icone sui fondi chiari. È anche il colore dell'anello di focus. In hover i pulsanti pieni passano al **Viola Revoluce chiaro** (#684cde).

### Secondary
- **Lilla Ricarica** (#dbcdfc): il fondo chiaro principale delle sezioni e, sul viola, il colore dei testi secondari e del testo dei pulsanti pieni. Viola su lilla ha un contrasto di circa 4,6:1 e regge il testo normale in AA.

### Tertiary
Tre colori che indicano ciascuno il proprio servizio e niente altro:
- **Giallo Luce** (#fcecb8): luce.
- **Arancio Gas** (#f9ca90): gas.
- **Azzurro Fibra** (#b5e5f9): fibra Irene.

Su questi fondi il testo è sempre Viola Revoluce.

### Neutral
- **Bianco Carta** (#ffffff): fondo delle sezioni chiare alternate, delle card dei form, delle etichette e degli evidenziatori sui fondi viola e lilla.
- **Lilla Campo** (#f5f1ff): riempimento dei campi dei form.
- **Lilla Bordo** (#8a7bea): bordo dei campi dei form a riposo, 3,4:1 sul bianco.
- **Viola Attenuato** (#6d55e1): testi secondari di Balsa (risposte FAQ, suggerimenti dei campi, segnaposto), 5,2:1 sul bianco.
- **Rosso Errore** (#b91c1c): solo per campi non validi e avvisi d'errore.

### Named Rules
**La regola del campo pieno.** Ogni sezione sta su un solo fondo pieno: viola, lilla o bianco. Niente sfumature e niente immagini sotto il testo; l'unica cosa che passa dietro al testo è la curva della "r", nel tono che lo tiene leggibile (vedi Shapes).

**La regola del pannello.** La pagina è bianca. Le fasce colorate sono pannelli con gli angoli a 30 px: la hero (sotto), garanzie e testimonianze come un unico pannello lilla, contatti (tutti e quattro), chiusura (sopra). Il preventivo è un pannello viola staccato dai bordi con 12–20 px di bianco. Negli angoli si vede il colore della fascia accanto, non un ritaglio bianco.

**La regola del servizio.** Giallo Luce, Arancio Gas e Azzurro Fibra significano il loro servizio. Non diventano mai decorazione generica né colori d'accento.

## Typography

**Display Font:** Epilogue (con system-ui, sans-serif)
**Body Font:** Epilogue (con system-ui, sans-serif)

**Character:** un'unica famiglia variabile da 100 a 900, usata agli estremi del suo asse di pesi. Il Light (300) dà ai titoli giganti un tono gentile, l'ExtraBold (800) dà forza a numeri, parole evidenziate e titoli delle card.

### Hierarchy
- **Display** (300, fluido fino a 5,125 rem, interlinea 1,02, spaziatura −0,015 em): il titolo della hero e nient'altro.
- **Headline** (300, fluido fino a 4,5 rem, interlinea 1,04, spaziatura −0,015 em): i titoli di sezione. Le parole chiave dentro l'evidenziatore passano a 800.
- **Numeral** (800, 6,25 rem, interlinea 0,9): le cifre-manifesto come "6 mesi", "2020", "100%". Il numero di telefono nei contatti usa lo stesso peso, fluido fino a 3 rem.
- **Title** (800, fino a 2,625 rem, interlinea 1): titoli delle card e dei form ("Ne parliamo?") e sottotitoli interni.
- **Body lead** (400, fluido fino a 1,25 rem, interlinea 1,625): il paragrafo sotto ogni titolo di sezione, largo al massimo 30–35 rem.
- **Body** (500, 1,0625 rem, interlinea 1,625): testi di card, passi e risposte delle FAQ. Le note piccole sono 0,9375 rem.
- **Label** (700, 1 rem, spaziatura 0,025 em, maiuscolo e corsivo): le etichette sopra i titoli di sezione.

### Named Rules
**La regola dell'evidenziatore.** Un titolo è Light, e solo da una a tre parole chiave passano in ExtraBold dentro un riquadro pieno: bianco su viola e su lilla, lilla su bianco; il giallo luce è riservato al titolo della hero. Mai un titolo intero evidenziato. Le etichette sopra i titoli seguono la stessa regola: il riquadro deve sempre vedersi sul suo fondo.

**La regola dei pesi estremi.** In un titolo si usano solo 300 e 800. I pesi intermedi stanno nel corpo del testo.

## Layout

La pagina è bianca e le fasce si susseguono a tutta larghezza; quelle colorate diventano pannelli arrotondati (vedi La regola del pannello). Dentro c'è una colonna di contenuto larga al massimo 1280 px. La navbar si appoggia sopra la hero, che per questo ha 120 px di spazio in alto (180 px da 1024 px).

- **Margini laterali:** 20 px su mobile, 32 px da 640 px, 48 px da 1024 px.
- **Spazio verticale delle fasce:** 80 px, 112 px da 768 px.
- **Composizione:** quasi sempre due colonne flessibili che vanno a capo da sole, testo da un lato e card o illustrazione dall'altro. Le distanze tra colonne sono 56–72 px, quelle tra blocco titolo e contenuto 24 px.
- **Ritmo verticale interno:** 12, 20 o 24 px. Base 4 px.
- **Elementi a tutta altezza:** nessuno. La lunghezza la detta il contenuto.

I titoli di sezione sono quasi sempre "divisi": etichetta e titolo a sinistra, paragrafo introduttivo a destra, allineato in basso. Su mobile si impilano.

## Elevation & Depth

Il sistema è piatto per scelta: il tema Balsa ha l'elevazione su "none" e nessun componente porta ombre. La profondità viene da tre cose:

- il contrasto tra i fondi pieni, con una card bianca su una fascia viola;
- i bordi pieni di 2 px;
- la sovrapposizione di elementi ruotati, come gli adesivi e lo stack dei servizi nella hero.

### Named Rules
**La regola del piatto.** Nessuna ombra, nessun effetto vetro, nessun gradiente. Se un elemento deve staccarsi, cambia il fondo o prende un bordo di 2 px.

## Shapes

Tre famiglie di forme, ciascuna con il suo compito:

- **Pillole** (9999 px) per tutte le azioni: pulsanti e badge.
- **Contenitori arrotondati** per tutto ciò che contiene:
  - campi a 8 px;
  - superfici Balsa a 14 px;
  - avvisi a 18 px;
  - card dei form e del blog a 24 px;
  - card dei servizi a 32 px;
  - telefono dell'app Enrica a 48 px.
- **Angoli vivi** (0 px) per etichette ed evidenziatori, che devono sembrare ritagliati o scritti a pennarello.

I bordi sono sempre pieni e larghi 2 px. Il telefono di Enrica fa eccezione, con 10 px.

La forma firma è la **curva della "r"** del logo: un grande tracciato pieno che attraversa le fasce dietro al testo. Il tono dipende dal fondo: bianco al 10% sul viola, viola al 10% sul bianco, bianco al 40% sul lilla. Sul viola il testo che la curva attraversa è bianco, perché il lilla scenderebbe a 3,7:1.

Le lettere della scritta Revoluce ("e", "p", "c") compaiono grandi negli angoli delle card della formula del prezzo, dietro al testo e tagliate dalla card. La scritta "energia ricaricabile™" fa da titolo alla spiegazione di come funziona.

### Named Rules
**La regola della pillola.** Ciò che si clicca è una pillola, ciò che contiene è arrotondato, ciò che si legge come etichetta ha gli angoli vivi.

## Components

I componenti di base vengono da Balsa UI 0.8.1, con tema "modern-flat": forme arrotondate, misure comode, bordi forti, nessuna elevazione e movimento rapido. Si personalizzano solo con tema, palette, props o classi, mai modificando i file in `src/components/ui/`. Il carattere è **pieno e deciso**: forme piene, bordi netti, zone da toccare generose.

### Buttons
- **Shape:** pillola (9999 px).
- **Primary:** fondo Viola Revoluce, testo Lilla Ricarica, alto 40 px, testo 14 px bold. Nei form occupa tutta la larghezza e ha una freccia a destra.
- **Hover / Focus:** in hover il fondo passa a #684cde, in 90 ms lineari. Il focus è un anello pieno di 3 px Viola Revoluce, staccato 3 px.
- **Su fondo viola (hero):** pillola Bianco Carta con testo Viola Revoluce, alta 56 px, testo 18 px bold. In hover diventa Lilla Ricarica. Accanto, l'azione secondaria è un link bianco sottolineato.

### Cards / Containers
- **Corner Style:** 24 px per form e blog, 32 px per i servizi.
- **Background:** Bianco Carta sulle fasce viola e lilla. Le card dei servizi usano il colore del proprio servizio.
- **Shadow Strategy:** nessuna (vedi Elevation & Depth).
- **Border:** nessuno sulle card piene. Le card "contorno" del blog hanno un bordo viola di 2 px e in hover si riempiono di bianco.
- **Internal Padding:** 24–32 px.

### Inputs / Fields
- **Style:** riempimento Lilla Campo, bordo Lilla Bordo di 2 px, raggio 8 px, etichetta sopra in Viola Revoluce.
- **Focus:** il bordo diventa Viola Revoluce e compare l'anello di focus.
- **Error / Disabled:** in errore il bordo diventa Rosso Errore e non compare nessun messaggio sotto il campo. Il messaggio arriva in un avviso a schermo che elenca tutti i campi da correggere, in italiano.

### Navigation
Barra appoggiata sopra la hero viola: bianco al 10%, filo inferiore bianco al 30% e angolo in basso a sinistra a 30 px; alta 76 px da 1024 px (56 sotto). Logo bianco solo con la scritta "revoluce", tre voci bianche a destra (Come funziona, Chi siamo, Assistenza) e due pillole: "Passa a Revoluce" bianca con la freccia, che porta al preventivo, e "Area clienti" con il contorno bianco. È la navbar Balsa in variante "surface", adattata da fuori. Su mobile le voci finiscono in un pannello lilla pieno che si apre dall'icona hamburger.

### Etichetta (kicker)
Riquadro ad angoli vivi sopra ogni titolo di sezione: maiuscolo corsivo bold, 14–16 px, testo viola. Il fondo è bianco sulle fasce viola e lilla, lilla sulle fasce bianche.

### Evidenziatore
Riquadro pieno dietro le parole chiave dei titoli: un ritaglio poco più grande del testo, che va a capo insieme alla parola. Bianco, lilla o giallo luce.

### Card servizio
Fondo pieno nel colore del servizio, raggio 32 px, padding 32 px. Icona, nome in ExtraBold, una riga di descrizione e un link con freccia. Nella hero le tre card si sovrappongono, ruotate di pochi gradi, e in hover si alzano di 2 px.

### Avviso
Popup in basso a destra su desktop e a tutta larghezza in basso su mobile. Fondo Bianco Carta, bordo di 2 px (viola, oppure rosso in caso di errore), raggio 18 px, cerchio icona da 40 px.
- **Tipi:** successo, errore, campi mancanti, invio in corso.
- **Chiusura:** il successo si chiude da solo dopo 8 secondi, gli altri restano finché non vengono chiusi.

### Adesivi
Elementi ruotati di −1,5° a −6°, come se fossero attaccati alla pagina: l'etichetta del prezzo nella hero, la lavatrice-adesivo, il telefono di Enrica. Si usano con parsimonia, al massimo uno o due per fascia.

## Do's and Don'ts

### Do:
- **Do** tenere la pagina bianca e dare alle fasce viola e lilla gli angoli a 30 px, con il colore della fascia accanto visibile negli angoli.
- **Do** scrivere i titoli in Epilogue 300 con spaziatura −0,015 em ed evidenziare da una a tre parole chiave in 800 dentro un riquadro pieno.
- **Do** usare Epilogue 800 grande per numeri e prove concrete: "6 mesi", il numero di telefono, gli anni.
- **Do** dare forma di pillola a tutte le azioni e un bordo pieno di 2 px a ogni contorno.
- **Do** mantenere il contrasto WCAG 2.2 AA: viola su lilla circa 4,6:1, bianco su viola circa 6,8:1, e un anello di focus di 3 px sempre visibile.

### Don't:
- **Don't** aggiungere ombre, effetti vetro o gradienti: il sistema è piatto.
- **Don't** usare Giallo Luce, Arancio Gas o Azzurro Fibra fuori dal loro servizio.
- **Don't** sembrare un grande gestore: niente blu istituzionale, niente foto stock di famiglie sorridenti, niente tono distaccato.
- **Don't** sembrare un volantino aggressivo: niente prezzi urlati, offerte lampeggianti, asterischi o scritte piccole in fondo.
- **Don't** usare il Rosso Errore per decorare o per dare enfasi: compare solo negli stati di errore.
