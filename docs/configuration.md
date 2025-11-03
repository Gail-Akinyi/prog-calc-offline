## Configuration and Environment

### Environment Variables
- None required. The application is fully client-side.

### Vite Dev Server
- Host: `::` (IPv6)
- Port: `8080`

### Path Aliases
- `@` → `./src`

### PWA Settings (vite-plugin-pwa)
- Register type: `autoUpdate`
- Included assets: `icon-192.png`, `icon-512.png`, `robots.txt`
- Manifest:
  - `name`: Conversions Calc
  - `short_name`: Conversions Calc
  - `description`: Convert between Binary, Octal, Decimal, and Hexadecimal
  - `theme_color`: `#9d5cff`
  - `background_color`: `#1a1e2e`
  - `display`: `standalone`
  - `orientation`: `portrait`
  - `start_url`: `/`
  - Icons: 192x192 and 512x512 (maskable)
- Workbox runtime caching:
  - Google Fonts (`https://fonts.googleapis.com`) → `CacheFirst`, cache name `google-fonts-cache`, up to 10 entries, 1-year TTL.

### Tailwind CSS
- See `tailwind.config.ts` for theme and plugins (includes `@tailwindcss/typography` and `tailwindcss-animate`).

### Build
```bash
npm run build
```
Outputs static assets suitable for any static host and PWA installation.

### SEO / Meta
- See `index.html` for title, description, social preview (`og:` and `twitter:`), and Apple meta tags.

