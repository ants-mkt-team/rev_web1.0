/*
 * Checks and focus handling shared by the quote and contact forms.
 */

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** 6 to 15 digits with an optional "+" or "00" prefix. */
const phonePattern = /^(\+|00)?\d{6,15}$/;

/** Drops spaces, dots, dashes, slashes and brackets: "(089) 097-7647" and "+39 333 123 4567" both pass. */
export function normalizePhone(value: string): string {
  return value.replace(/[\s./()-]/g, "");
}

export function isPhone(value: string): boolean {
  return phonePattern.test(normalizePhone(value));
}

export function isEmail(value: string): boolean {
  return emailPattern.test(value.trim());
}

/**
 * Balsa's Button disables itself while loading, which drops keyboard focus to
 * the page. Once the button is enabled again, put focus back on it so the
 * visitor can retry without hunting for the form.
 */
export function restoreSubmitFocus(form: HTMLFormElement): void {
  window.setTimeout(() => {
    const active = document.activeElement;
    if (active && active !== document.body) return;
    form.querySelector<HTMLButtonElement>('button[type="submit"]')?.focus();
  }, 0);
}
