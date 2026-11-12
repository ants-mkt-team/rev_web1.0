import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BalsaThemeProvider } from "@/components/ui/BalsaThemeProvider";
import { myDesignSystemTheme } from "@/themes/my-design-system";
import App from "./App.tsx";

/*
 * Theme registration. Balsa's createDesignThemeStore is part of its Vue
 * package only; in React the theme is registered by scoping the app in
 * BalsaThemeProvider, which applies the theme's tokens (fonts, borders,
 * shape, motion) to everything inside it. The palette is activated on
 * <html data-palette="my-design-system"> in index.html.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BalsaThemeProvider theme={myDesignSystemTheme}>
      <App />
    </BalsaThemeProvider>
  </StrictMode>,
);
