
# Currency Converter

An elegant, fast, and modern currency converter built with **React**, **Vite**, and **Tailwind CSS**.

![App Screenshot](./src/assets/money.jpg)

## Features

- 🔄 Real-time currency conversion using [Fixer.io](https://fixer.io/) API
- 🌐 Supports multiple currencies
- 🔁 Swap currencies with a single click
- 💡 Clean, responsive UI with Tailwind CSS
- ⚡ Instant conversion and smooth UX

## Demo

> _Add a link or GIF here if deployed_

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/Aditya05-spec/CurrencyConverter.git
cd CurrencyConverter
npm install
```

### Running Locally

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

- `src/` — Main source code
	- `App.jsx` — Main app component
	- `components/` — Reusable UI components
	- `assets/` — Images and SVGs
	- `hooks/` — Custom React hooks
- `public/` — Static files
- `index.html` — App entry point

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fixer.io API](https://fixer.io/)

## API Key

This app uses the free tier of Fixer.io, which is EUR-based. You can update the API key in `src/components/hooks/useCurrencyInfo.js`.

## Credits

- [Fixer.io](https://fixer.io/) for currency rates
- [Vite](https://vitejs.dev/) for fast development
- [Tailwind CSS](https://tailwindcss.com/) for styling

## License

MIT
