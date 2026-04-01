# PROJECT.md – Formelmat

## Projektbeskrivelse

Formelmat er en interaktiv, webbaseret udgave af den danske matematik-formelsamling "Matematiske formler og fagord" (Børne- og Undervisningsministeriet, 2. udgave 2017). Formålet er at gøre den statiske PDF til et levende, samlet og anvendeligt læringsværktøj for elever i 7.-10. klasse og folkeskolens prøver.

## Målgruppe

- **Primær:** Elever i udskolingen (7.-10. klasse)
- **Sekundær:** Matematiklærere i folkeskolen

## Arkitektur

- **Framework:** Next.js (App Router)
- **Sprog:** TypeScript
- **Styling:** Tailwind CSS v4
- **Interaktive komponenter:** SVG-baserede client components med React state
- **Data:** Statisk data i `src/data/topics.ts` (emner, underemner, fagord)
- **Deployment:** Statisk generering (SSG)

## Krav til v1 (MVP)

1. Webbaseret formelsamling med struktur fra PDF'en
2. Søgefunktion på tværs af emner og fagord (Ctrl+K)
3. Krydsreferencer mellem relaterede emner
4. Interaktive visualiseringer (trekant, enhedscirkel, grafer, lineær funktion, Pythagoras-beregner)
5. GeoGebra-links på relevante sider
6. Mobilvenligt responsivt design
7. Fagordsordbog med 80+ opslag

## Mappestruktur

```
src/
├── app/               # Next.js App Router sider
│   ├── emner/         # Emnesider (tal-og-algebra, geometri, statistik)
│   ├── fagord/        # Fagordsordbog
│   └── page.tsx       # Forside
├── components/        # Genbrugelige React-komponenter
│   ├── Header.tsx     # Navigation med hamburger-menu
│   ├── Sidebar.tsx    # Desktop-sidebar
│   ├── SearchModal.tsx
│   ├── InteractiveTriangle.tsx
│   ├── UnitCircle.tsx
│   ├── TrigGraphs.tsx
│   └── LinearFunctionDemo.tsx
└── data/
    └── topics.ts      # Emner, underemner og fagord
```

## Indholdsstruktur (fra PDF)

1. **Tal og algebra** (s. 15-32): 8 underemner
2. **Geometri og måling** (s. 33-58): 12 underemner
3. **Statistik og sandsynlighed** (s. 59-69): 4 underemner
