# Revoluce · sito web

Homepage di [Revoluce](https://www.revoluce.it/) in React, costruita sul design system Balsa UI `my-design-system` e sugli asset del design system Revoluce.

## Avvio

```sh
npm install
npm run dev      # sviluppo su http://localhost:5173
npm run build    # controllo dei tipi + build di produzione in dist/
npm run preview  # serve la build
```

Stack: Vite 8, React 19, TypeScript, Tailwind CSS v4, componenti [Balsa UI](https://balsa-ui.com) 0.8.1 installati come sorgente in `src/components/ui/`.

## Design system

| Cosa | Dove |
| --- | --- |
| Tema Balsa (opzioni, font Epilogue) | `src/themes/my-design-system.ts` |
| Palette Balsa (7 colori) | `src/styles/my-design-system-palette.css` |
| Fondamenta Balsa | `src/styles/balsa-foundation.css`, `balsa-theme.css`, `balsa-shadcn-bridge.css` |
| Colori dei servizi Revoluce (luce, gas, fibra) | `@theme` in `src/index.css` (`bg-rv-luce`, `bg-rv-gas`, `bg-rv-fibra`) |
| Logo, icone, illustrazioni | `src/assets/revoluce/` |
| Font Epilogue | `public/fonts/` |

Collegamento:

- `src/index.css` importa le fondamenta Balsa e, per ultima, la palette `my-design-system-palette.css`.
- `src/main.tsx` registra il tema avvolgendo l'app in `<BalsaThemeProvider theme={myDesignSystemTheme}>`.
- `index.html` attiva palette e tema con `<html data-palette="my-design-system" data-theme="my-design-system">`.

Per usare i colori nel codice: `bg-balsa-primary`, `text-balsa-foreground`, `bg-balsa-surface`, `bg-balsa-background`, `bg-balsa-accent` e così via. I colori dei servizi servono solo a indicare il loro servizio.

## Struttura

- `src/content.ts`: testi e link della homepage, presi da www.revoluce.it.
- `src/sections/`: le sezioni della pagina (hero, prezzo, preventivo, servizi, app Enrica, garanzie, testimonianze, FAQ, contatti, blog, chiusura e footer).
- `src/components/revoluce/primitives.tsx`: piccoli pezzi di layout (sezione, titolo con evidenziatore, curva della "r").
- `src/components/ui/`: sorgente dei componenti Balsa. Aggiornali con la CLI di Balsa, non a mano.

## Note su Balsa UI 0.8.1

- **`npx balsa-ui@latest …` esce senza fare nulla.** Il controllo d'avvio in `bin/balsa.mjs` confronta il percorso con cui viene lanciato con quello reale, e via `npx` passa da un collegamento simbolico. Lancia il file direttamente: `node "$(npm config get cache)/_npx/<hash>/node_modules/balsa-ui/bin/balsa.mjs" <comando>`, oppure installa `balsa-ui` come dipendenza di sviluppo e usa `node node_modules/balsa-ui/bin/balsa.mjs`.
- **`design-system create` installa i file del tema per Vue anche in un progetto React.** Dopo il comando lancia `balsa add balsa-theme --framework react --force` e rimuovi `BalsaThemeProvider.vue` e `src/theme/theme-store.ts`.
- **`createDesignThemeStore` esiste solo per Vue.** In React il tema si registra con `BalsaThemeProvider`.
- Per aggiungere componenti: `balsa add <nome> --framework react`.

## Da completare

- I form "Il tuo preventivo" e "Ne parliamo?" non inviano ancora nulla. Vanno collegati al preventivatore e al servizio contatti di Revoluce (vedi i `TODO` in `src/sections/Quote.tsx` e `src/sections/Contact.tsx`).
- Lo schermo dell'app Enrica è un mock-up illustrativo: sostituiscilo con uno screenshot reale.
- La card Gas porta a `#contatti` perché sul sito non c'è ancora una pagina dell'offerta gas.
