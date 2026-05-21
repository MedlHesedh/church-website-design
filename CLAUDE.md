# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

> No test suite is configured. `next.config.mjs` ignores TypeScript build errors — run `pnpm build` to surface them manually.

## Stack

- **Next.js 15 (App Router)** with React Server Components — pages default to server components; add `'use client'` only when needed (interactivity, hooks, browser APIs)
- **shadcn/ui (new-york style)** — pre-built accessible components live in `components/ui/`. Add new ones via `pnpm dlx shadcn@latest add <component>`
- **TailwindCSS v4** — no `tailwind.config.ts`; theme is defined entirely via CSS custom properties in `app/globals.css` using `@theme inline`
- **next-themes** — dark mode via `<ThemeProvider>` in `app/layout.tsx`; all colors reference CSS vars that swap at the `:root`/`.dark` boundary

## Architecture

### Routing

Pages live in `app/<route>/page.tsx`. The root layout (`app/layout.tsx`) wraps everything with the theme provider and sets global metadata. There is no `src/` directory.

### Styling conventions

- Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) whenever combining conditional class names
- Headings use `font-serif` (Source Serif 4); body uses Inter; mono uses Geist Mono — all loaded via `next/font/google` in `globals.css`
- Color tokens (`--primary`, `--accent`, `--muted`, etc.) are defined in `globals.css` and must be used instead of hardcoded colors so dark mode works correctly

### Components

- `components/ui/` — untouched shadcn primitives; modify by overriding at the call site, not inside the file
- `components/header.tsx` — client component; owns mobile menu state
- `components/footer.tsx` — server component
- `hooks/use-toast.ts` — custom toast hook; limit is 1 toast at a time

### Dummy content

All pages are populated with realistic dummy content for **Truth and Life Christian Church** (Orion, Bataan). Names, addresses, phone numbers, emails, sermon data, events, and leader bios are fictional stand-ins ready to swap out. The contact form's `handleSubmit` has a `// TODO` comment for wiring in a real email service (Resend, SendGrid, etc.).
