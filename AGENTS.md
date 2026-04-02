<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md – Formelmat

Universelle instruktioner for alle AI-agenter i dette projekt.

---

## 1. SESSION START

Ved start af enhver session:

1. Læs `.planning/STATE.md` – identificér nuværende fase og status
2. Læs `.planning/PROJECT.md` – forstå arkitektur, krav og mappestruktur
3. Læs fasens kontekst og igangværende opgaver

Ingen kode skrives før disse tre filer er gennemgået.

---

## 2. TECH STACK

- **Framework:** Next.js 16 (App Router, `src/` directory)
- **Sprog:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Interaktive komponenter:** React client components med SVG
- **Data:** Statisk i `src/data/topics.ts`
- **Build:** `npm run build` (statisk generering)
- **Lint:** `npm run lint` (ESLint med eslint-config-next)
- **Package manager:** npm

### Vigtige stier

```
src/app/          → Sider (App Router)
src/components/   → Genbrugelige komponenter
src/data/         → Datamodel og søgning
.planning/        → Projektplanlægning
```

---

## 3. SYSTEMREGLER

- Læs altid eksisterende kode før ændringer
- Skriv ikke nye filer, medmindre det er nødvendigt – foretræk redigering
- Hold ændringer atomiske og fokuserede
- Test med `npm run build` efter ændringer
- Alle sider skal være mobilvenlige (responsivt design)
- Brug dansk til brugervendt indhold, engelsk til kode (variabelnavne, funktioner)
- SVG-baserede visualiseringer med `viewBox` for responsiv skalering

---

## 4. KODEKODEKS

- **Sprog i kode:** Engelske variabelnavne og komponentnavne
- **Sprog i indhold:** Dansk (alt brugervendt tekst)
- **Komponenter:** Server components som standard, `"use client"` kun når nødvendigt (interaktive elementer)
- **Styling:** Tailwind utility classes, undgå custom CSS undtagen i `globals.css`
- **Formler:** Brug `.formula-box` og `.math-formula` CSS-klasser
- **Typer:** Eksportér interfaces fra `src/data/topics.ts`
- **Links:** Brug Next.js `<Link>` til interne links, `<a>` med `target="_blank"` til eksterne
- **Metadata:** Eksportér `metadata` objekt fra alle sider

---

## 5. GIT OG GITHUB

- Push til feature-branch efter commit (kun hvis build består)
- Aldrig force-push uden eksplicit aftale
- Commit-beskeder skal være beskrivende og forklare hvad og hvorfor
- Undgå vage ord som "fix", "update", "wip"
- Brug `npm run build` som validering før push

### Branch-strategi

- Feature-branch: `claude/interactive-math-formulas-9hoHv`
- Push med: `git push -u origin claude/interactive-math-formulas-9hoHv`

---

## 6. GITHUB ISSUES

### Quality Assurance inden lukning af issue

- [ ] Koden virker som forventet
- [ ] Sikkerhed gennemgået (ingen XSS, injection etc.)
- [ ] Build består (`npm run build`)
- [ ] TypeScript kompilerer uden fejl
- [ ] Lint består (`npm run lint`)
- [ ] Atomiske commits med beskrivende beskeder
- [ ] Pushet til branch

---

## 7. PLANLÆGNINGSPROTOKOL

- Faser svarer til milestones i GitHub
- Hver fase har max 2-3 opgaver
- Hver opgave specificerer:
  - Præcise filstier der ændres/oprettes
  - Verifikationsskridt (build, visuel check, etc.)
  - Acceptkriterier

### Faser

1. **Fase 1 – Fundament:** Strukturere indhold, navigation, søgning, første emneområder ✅
2. **Fase 2 – Interaktiv udvidelse:** Flere interaktive komponenter, forbedret UX
3. **Fase 3 – Personlig brug:** Kontooprettelse, noter, favoritter
4. **Fase 4 – Udvidelse:** Flere uddannelsesniveauer, lærer/elev-samarbejde

---

## 8. IMPLEMENTERING

1. Læs og forstå eksisterende kode i de relevante filer
2. Planlæg ændringen (hvilke filer, hvilke komponenter)
3. Implementér med fokus på mobilvenligt, responsivt design
4. Brug eksisterende mønstre (se lignende sider som reference)
5. Kør `npm run build` for at verificere
6. Commit med beskrivende besked
7. Opdatér `.planning/STATE.md` hvis en milepæl er nået

### Mønster for nye emnesider

```tsx
// Breadcrumbs → Titel → Beskrivelse → Indhold → Formler → Se også
import Link from "next/link";

export const metadata = {
  title: "Emnetitel – Formelmat",
  description: "Beskrivelse af emnet.",
};
```

### Mønster for interaktive komponenter

```tsx
"use client";
// SVG med viewBox for responsivitet
// Sliders med touch-venlige targets (28px thumbs)
// Beregninger i React state
```

### Regler for nyt indhold (udvidelser, gymnasie m.m.)

Når der tilføjes nye emner, sider eller uddannelsesniveauer:

1. **Interaktive mock-elementer:** Alle indholdssider SKAL have mindst ét interaktivt element eller en `InteractivePlaceholder`-komponent, der markerer, hvad der skal bygges. Ingen side må være 100% statisk tekst.

2. **Elevvenlige tekster:** Alt brugervendt tekst skal skrives direkte til eleven i "du"-form. Brug et varmt, opmuntrende sprog. Forklar hvorfor emnet er relevant for eleven. Undgå akademisk/distanceret tone. Maks 2-3 sætninger i introduktionen.

---

## 9. DEFINITION OF DONE

En opgave er færdig når:

- [ ] Koden er implementeret og fungerer
- [ ] Siden er mobilvenlig og responsiv
- [ ] `npm run build` består uden fejl
- [ ] Krydsreferencer til relaterede emner er tilføjet
- [ ] Formler bruger `.formula-box` styling
- [ ] Commit er lavet med beskrivende besked
- [ ] `.planning/STATE.md` er opdateret
