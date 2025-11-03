## Architecture Overview

Conversions Calc is a single-page application (SPA) built with React and Vite, packaged as a Progressive Web App (PWA) for offline usage. There is no backend; all logic executes client-side in the browser.

### High-Level Components
- App shell: `index.html` + `src/main.tsx` + `src/App.tsx`
- Routing: `react-router-dom` with routes for `/` and catch-all `*`
- Core feature: `src/components/BaseConverter.tsx`
- UI primitives: `src/components/ui/*` (shadcn/ui, Radix UI)
- State/utilities: `src/hooks/*`, `src/lib/utils.ts`
- PWA: `vite-plugin-pwa` configured in `vite.config.ts`

### Data and Control Flow
1. User selects input base (Bin/Oct/Dec/Hex) and output base.
2. User types input value or uses the on-screen keypad (valid keys depend on input base).
3. Component validates input against the selected base.
4. On valid input and differing bases, value is parsed via `parseInt(value, radix)` and converted using `Number.prototype.toString(radix)`.
5. Result is displayed with errors shown inline when validation fails.

### Providers and Cross-Cutting Concerns
- `@tanstack/react-query` client is initialized in `App.tsx` (reserved for future data fetching; not actively used).
- Toast and tooltip providers (`shadcn/ui`) are registered in `App.tsx`.
- Global styles: Tailwind CSS via `index.css` and `App.css`.

### PWA Behavior
- Manifest and Workbox settings are defined in `vite.config.ts` via `VitePWA`.
- Assets `icon-192.png`, `icon-512.png`, and `robots.txt` are included.
- Runtime caching strategy for Google Fonts is configured via Workbox.

### Routing Diagram (Conceptual)

```
BrowserRouter
 └─ Routes
    ├─ "/"            → <Index> → <BaseConverter>
    └─ "*"            → <NotFound>
```

### Build & Runtime
- Dev server: Vite on port 8080 (IPv6 host `::`)
- Alias `@` → `./src`
- Production build emits static assets suitable for static hosting and PWA installation

### Assumptions
- ⚠️ Possible assumption: `react-query` is included for potential future features; the current app does not perform network requests.

