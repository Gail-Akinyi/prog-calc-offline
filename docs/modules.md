## Modules and Responsibilities

### App Shell
- `index.html`: HTML entry, meta tags, SEO, and script to `src/main.tsx`.
- `src/main.tsx`: React root bootstrap and global CSS import.
- `src/App.tsx`: Registers providers (react-query, tooltip, toasters) and application routes.

### Routing
- `src/pages/Index.tsx`: Home route that renders `BaseConverter`.
- `src/pages/NotFound.tsx`: Catch-all 404 page.

### Core Components
- `src/components/BaseConverter.tsx`
  - State: selected input base, output base, raw input, error, result.
  - Validation: restricts allowed keys based on input base.
  - Conversion: uses `parseInt(value, radix)` and `.toString(radix)`; uppercase for hex output.
  - UI: selectors for bases, input field, numeric keypad, result and error display.

### UI Library
- `src/components/ui/*`: Generated shadcn/ui primitives (accordion, dialog, button, input, select, etc.).
  - Role: Consistent, accessible building blocks. Minimal to no business logic.

### Hooks
- `src/hooks/use-mobile.tsx`: `useIsMobile()` media-query hook to detect viewport < 768px.
- `src/hooks/use-toast.ts`: Toast system state machine and API compatible with `components/ui/toast`.

### Utilities
- `src/lib/utils.ts`: `cn()` helper combining `clsx` and `tailwind-merge` for className composition.

### Configuration
- `vite.config.ts`: Dev server, alias `@`, PWA manifest/workbox, plugins.
- `tailwind.config.ts`: Tailwind presets and plugins.

### Public Assets
- `public/`: PWA icons, robots.txt, favicon.

