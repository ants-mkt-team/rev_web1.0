# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Famiglie in tutta Italia, residenti e non residenti, con utenze domestiche di luce, gas e fibra. Sono stanche di bollette a sorpresa e di voci che non si capiscono. Vogliono sapere in anticipo quanto pagheranno e poi tenerlo sotto controllo.

Il lavoro che vengono a fare sul sito: capire se Revoluce conviene, ottenere un preventivo calcolato sui propri consumi oppure parlare con una persona, e poi attivare la fornitura.

## Product Purpose

Revoluce fornisce luce, gas e fibra (la fibra si chiama "Irene"). Il sito presenta l'offerta e porta a due azioni:

- il **preventivo**: un video con il calcolo fatto sui consumi del visitatore, inviato via email;
- la **richiesta di essere ricontattati** da un Tutor.

C'è successo quando il visitatore capisce quanto pagherà e diventa cliente.

## Positioning

**Prezzo tutto incluso.** Un solo prezzo al kWh che contiene tutti gli oneri della bolletta: il totale è quel prezzo moltiplicato per i consumi reali, "senza asterischi, senza sorprese". L'utente l'ha confermato come la vera differenza di Revoluce.

Restano fuori dal prezzo, e vanno sempre dichiarati: canone RAI, aumento di potenza, voltura e subentro.

Energia ricaricabile, Tutor e app Enrica sono capacità che sostengono questa promessa. Non sono il posizionamento.

## Operating Context

- **Energia ricaricabile.** Il cliente ricarica il saldo come il credito del telefono, con carta di credito, carta ricaricabile, PayPal, Postepay o addebito su conto corrente. Ogni giorno vengono scalati i consumi reali. Se il credito finisce la fornitura non si interrompe: con il saldo negativo si applica un prezzo leggermente più alto, finché una nuova ricarica non lo riporta positivo.
- **Canone TV.** Viene fatturato ogni mese con un documento separato e si paga con la ricarica.
- **App Enrica**, sugli store e come web app su `my.revoluce.it/enrica`. Mostra spesa e prezzo per giorno, mese e anno, consumi, fatture, saldo, ricariche e movimenti.
- **Tutor dall'ufficio di Salerno** (Via Tommaso Prudenza 9). Orari: lunedì–venerdì 09.30–13.00 e 14.30–17.30.
  - Telefono 089 0977647, email info@revoluce.it con risposta entro 24 ore, PEC revoluce@pec.it.
  - Richiamano entro poche ore dalla richiesta.
- **Percorso verso l'attivazione:**
  1. chiamata del Tutor che spiega come funziona;
  2. invio della documentazione;
  3. attivazione solo quando il cliente è convinto.

  Servono una vecchia bolletta e nome, cognome, telefono, email e codice fiscale dell'intestatario.
- **Area clienti** su `revoluce.crmzeus.it`.

## Capabilities and Constraints

- **Servizi:**
  - Luce: ricaricabile, prezzo tutto incluso.
  - Gas: non esiste ancora una pagina dell'offerta, quindi i link portano a `#contatti`.
  - Fibra: "Irene".
- **Lingua:** solo italiano, compresi tutti i messaggi dei form.
- **Codice:** React 19, Vite 8, Tailwind CSS v4 e Balsa UI 0.8.1. I componenti in `src/components/ui/` si aggiornano solo con la CLI di Balsa, mai a mano. Le modifiche passano da tema, palette, props o `className`.
- **Figma:** il design system e la homepage sono replicati in Figma (file `7vXchdkulcDYmrcI648hvW`). Codice e Figma vanno tenuti allineati: una modifica al codice va riportata in Figma quando l'utente lo chiede.
- **Decisioni aperte:**
  - I form del preventivo e dei contatti non sono ancora collegati a un servizio. `sendQuote` e `sendContactRequest` sono provvisorie e per ora ogni invio mostra "Invio non riuscito".
  - Il prezzo al kWh in cifre non è disponibile nel progetto.

## Brand Commitments

- **Nome:** Revoluce. I clienti sono i "Revoluzionari".
- **Voce:** dà del tu ed è diretta, colloquiale e con un'ironia leggera. Esempi dal sito: "Senza asterischi, senza sorprese", "Il weekend riposiamo anche noi", "niente lag, niente buffering, niente drammi", "Non è un call center".
- **Nomi propri:** Enrica (l'app), Irene (la fibra), Devia (servizio anti-truffe telefoniche dato in omaggio).
- **Asset esistenti** in `src/assets/revoluce/`:
  - logo viola e logo bianco: il sito usa la versione corta, solo "revoluce";
  - la scritta "energia ricaricabile™" e le lettere grandi del lettering (e, p, c);
  - icone di luce, gas e fibra;
  - curva della "r";
  - decoro e badge della luce;
  - adesivo della lavatrice.

  Il font è Epilogue, in `public/fonts/`.

## Evidence on Hand

Tutti i contenuti sono presi da www.revoluce.it e si trovano in `src/content.ts`:

- **Recensioni reali:** Giovanni Rivieccio, Nicola Massimo, Andrea Ghiori.
- **Garanzia "Soddisfatti o rimborsati" per 6 mesi.** Il recesso va inviato entro 10 giorni dalla fine del sesto mese di fornitura e viene restituito l'importo speso.
- **Premio Le Fonti 2020**, "Startup dell'anno".
- **Certificazione Il Salvagente:** verificati kit contrattuale, recensioni e soddisfazione dei clienti.
- **Stampa:** Il Tempo, Avvenire, Fortune, La Gazzetta del Mezzogiorno, Libero, Milano Finanza, la Repubblica, Staffetta Quotidiana, StartupItalia.
- **Dieci anni di attività**, festeggiati a marzo 2026, e gli articoli del blog con i loro link.

Cose che mancano e **non vanno inventate**:

- numero di clienti;
- prezzo al kWh;
- percentuali di risparmio;
- altre recensioni;
- uno screenshot reale dell'app Enrica (quello attuale è un mock-up da sostituire);
- la pagina dell'offerta gas.

## Product Principles

1. **Il prezzo si capisce subito.** Tutto incluso, nessun asterisco: ogni pagina rende evidente che il totale è il prezzo per i consumi.
2. **Nessuna sorpresa.** Ciò che resta fuori dal prezzo si dice chiaramente, e non si fanno promesse che non si possono verificare.
3. **Una persona vera è sempre raggiungibile.** Si può parlare con un Tutor prima di decidere, senza pressione: si attiva solo quando si è convinti.
4. **Il controllo resta al cliente.** Saldo e consumi sono visibili ogni giorno.

## Accessibility & Inclusion

Obiettivo **WCAG 2.2 AA**, confermato dall'utente. Il telefono resta sempre un'alternativa visibile ai form.
