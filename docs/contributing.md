## Contributing Guide

Thank you for considering a contribution! This project is a React + TypeScript SPA with shadcn/ui and Tailwind.

### Development Setup
1. Install Node.js 18+ and npm.
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev` (http://localhost:8080)

### Code Style
- Use TypeScript for all code.
- Prefer descriptive names and early returns.
- Keep UI logic inside components; avoid unnecessary global state.
- Follow existing patterns for shadcn/ui components and Tailwind classes.

### Linting
```bash
npm run lint
```
Fix reported issues before opening a PR.

### Testing
- No formal test suite is included. For UI changes, test manually on desktop and mobile viewports.
- Validate PWA install on supported browsers if you touch PWA settings.

### Pull Requests
- Create a feature branch: `feat/...` or `fix/...`
- Keep changes focused and small.
- Update documentation where appropriate (`README.md` or `docs/*`).
- Include screenshots or short notes for UI changes.

### Adding Components
- Add new feature components under `src/components/`.
- Reuse `src/components/ui/*` primitives for consistency and accessibility.
- Route-level pages belong in `src/pages/` and are wired in `src/App.tsx`.

### Accessibility
- Use semantic HTML via shadcn/ui primitives where possible.
- Ensure focus states and keyboard navigation work.

### Releases & Build
```bash
npm run build
npm run preview
```

### License
- ⚠️ Possible assumption: If adopting MIT, include `LICENSE` in the repo root.

