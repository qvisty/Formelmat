# STATE.md – Formelmat

## Nuværende fase

**Fase 2 – Interaktiv udvidelse** (aktiv)

## Status

MVP er implementeret med alt indhold fra PDF'en digitaliseret og interaktive komponenter bygget.
Fase 1 er afsluttet. Fase 2 fokuserer nu på at færdiggøre interaktivitet, søgning og produktionskvalitet.

### Færdige milepæle

- [x] Next.js projekt opsat med TypeScript og Tailwind CSS
- [x] Layout med header, sidebar og mobilnavigation
- [x] Søgefunktion (Ctrl+K) på tværs af emner og fagord
- [x] Tal og algebra: 8 undersider med formler og forklaringer
- [x] Geometri og måling: 12 undersider med interaktive komponenter
- [x] Statistik og sandsynlighed: 4 undersider med SVG-visualiseringer
- [x] Fagordsordbog med 80+ opslag fra stikordsregistret
- [x] Interaktive komponenter: trekant, enhedscirkel, triggrafer, lineær funktion, Pythagoras-beregner
- [x] GeoGebra-integration (links) på relevante sider
- [x] Mobilvenligt responsivt design
- [x] Krydsreferencer mellem emner og fagord

- [x] Opsætning af udviklingsstandarder (AGENTS.md, hooks, sync.sh)
- [x] GeoGebra dynamisk integration på 7 indholdssider (geometry + graphing)
- [x] Grundlæggende PWA-understøttelse med service worker og offline-side

### Næste skridt (Fase 2 – Interaktiv udvidelse)

- [x] Flere interaktive komponenter (tallinjer, brøkvisualiseringer og emnespecifikke miniøvelser)
- [x] Forbedret søgning med fuzzy matching og tilgængelig søgemodal
- [x] Præsentationsvisning til lærerbrug (global visning, tastaturgenvej og større formler)
- [x] Rolige animationer og overgange med understøttelse af reduced motion
- [ ] Udvid offline-cachen og verificér PWA-installation på målplatforme

### PWA-verifikation (QDI-43)

- [x] Alle 33 emnesider, fagordsordbogen, forsiden og offline-siden forhåndscaches efter første besøg
- [x] Versionsstyret cache (`formelmat-v3`) rydder tidligere Formelmat-caches ved aktivering
- [x] Produktionsbuild og alle precache-URL'er er verificeret automatisk
- [ ] Installation og offline-navigation skal slutverificeres på fysisk Android Chrome og iOS Safari

## Branch

`claude/interactive-math-formulas-9hoHv`
