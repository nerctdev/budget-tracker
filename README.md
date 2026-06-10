# Budget Tracker

Personal budget tracker — tracks income vs expenses with multi-currency support, i18n translations, dark/light theme, and localStorage persistence.

## Features

- **Income & Expense Tracking** — log transactions with date, description, and amount
- **Running Balance** — see your current balance, total income, and total expenses
- **Budget Progress Bar** — visual indicator of how much of your income you've spent
- **Multi-Currency** — 17 major world currencies (USD, EUR, GBP, JPY, CNY, AUD, CAD, INR, BRL, MXN, KRW, SGD, MYR, IDR, PHP, THB, VND)
- **i18n** — 7 languages: English, Spanish, French, Arabic, Japanese, Chinese, Indonesian
- **RTL Support** — full right-to-left layout for Arabic
- **Dark/Light Theme** — toggle between modes
- **localStorage** — all data persists in the browser
- **Mobile-First** — works from 320px to 1280px+, 44px touch targets, responsive layout

## Tech Stack

- Vite 6
- Vanilla JavaScript (no framework)
- CSS Custom Properties for theming
- `Intl.NumberFormat` for locale-aware currency display

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Currency Display

Uses `Intl.NumberFormat` with the appropriate locale for each currency. Zero-decimal currencies (JPY, KRW, VND, IDR) show no fractional digits.

## License

MIT

---

Built by [nerct.dev](https://nerct.dev)
