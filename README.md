# Conversions Calc

Fast, offline programmer's calculator for converting between Binary, Octal, Decimal, and Hexadecimal number systems. Ships as a PWA for instant mobile install.

## Tech Stack
- **Vite** (React + SWC)
- **TypeScript**
- **React 18** with **React Router**
- **shadcn/ui** + **Radix UI** primitives
- **Tailwind CSS**
- **@tanstack/react-query**
- **vite-plugin-pwa** (offline support)

## Folder Structure

```
root/
├── public/                 # Static assets (icons, robots.txt)
├── src/
│   ├── components/
│   │   ├── BaseConverter.tsx  # Core conversion UI and logic
│   │   └── ui/                # Reusable UI primitives (shadcn/ui)
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities (e.g., className merger)
│   ├── pages/                 # Route-level components (Index, NotFound)
│   ├── App.tsx                # Router, providers, toasters
│   └── main.tsx               # App entry
├── index.html                 # HTML entry, meta/SEO
├── vite.config.ts             # Vite + PWA configuration
├── tailwind.config.ts         # Tailwind config
├── package.json               # Scripts and dependencies
└── docs/                      # Project documentation (this repo)
```

## Key Features
- **Base conversions**: Bin ↔ Oct ↔ Dec ↔ Hex
- **Validation**: Inline validation based on selected input base
- **Responsive UI**: Mobile-friendly keypad
- **Offline-ready**: PWA with caching

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Running the App (Dev)
```bash
npm run dev
# Default: http://localhost:8080
```

### Build for Production
```bash
npm run build
npm run preview
```

## How It Works (Overview)
- Routing lives in `App.tsx` using `react-router-dom` with routes for `/` and a catch-all `NotFound`.
- `BaseConverter.tsx` handles selection of input/output bases, validates input per base, converts via `parseInt(value, radix)` and `Number.prototype.toString(radix)`.
- Global providers: `@tanstack/react-query` client, tooltip provider, and toast systems are wired in `App.tsx`.
- PWA config and caching strategy are defined in `vite.config.ts` via `vite-plugin-pwa`.

## Contributing
See `docs/contributing.md` for coding standards, local dev, and PR workflow.

## Configuration
See `docs/configuration.md` for environment variables and build settings.

## License
No license is currently specified. ⚠️ Possible assumption: consider adopting **MIT License** for open-source distribution, or add a proprietary license as needed.

## Further Reading
- Architecture: `docs/architecture.md`
- Modules: `docs/modules.md`
- API/Routes: `docs/api.md`
