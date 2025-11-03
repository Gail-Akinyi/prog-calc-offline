## Routes and Public API

This application is a client-side SPA and does not expose a network API. The following routes and components constitute the user-facing API.

### Routes
- `GET /` → Renders `pages/Index.tsx` which contains the `BaseConverter` component.
- `GET /*` → Renders `pages/NotFound.tsx` for unmatched routes.

### Components (Publicly Consumed Internally)
- `components/BaseConverter`
  - Props: none (self-contained state and UI)
  - Behavior: Validates input, converts between Bin/Oct/Dec/Hex, displays errors/results.

### Utilities
- `lib/utils#cn(...inputs)` → `string`
  - Merges class names using `clsx` + `tailwind-merge`.

### Hooks
- `hooks/use-mobile#useIsMobile()` → `boolean`
  - Returns `true` if viewport width < 768px.
- `hooks/use-toast`
  - `useToast()` → `{ toasts, toast, dismiss }`
  - `toast({...})` → `{ id, dismiss, update }`

### Assumptions
- ⚠️ Possible assumption: No external configuration is required for the converter; all computation is local.

