# Formelmat

**Matematiske formler og fagord** – en interaktiv, webbaseret formelsamling til matematik i 7.-10. klasse.

Formelmat gør den statiske PDF *"Matematiske formler og fagord"* (Børne- og Undervisningsministeriet, 2. udgave 2017) om til et levende læringsværktøj, hvor eleven kan slå formler op, forstå fagord og lege med interaktive visualiseringer – det hele samlet ét sted.

---

## Formål og vision

Rigtig mange elever i udskolingen får udleveret en formelsamling som PDF eller på papir. Den er svær at søge i, kedelig at læse, og formlerne står som tør tekst uden forklaring. Formelmat vil løse det ved at:

- Gøre formelsamlingen **søgbar og hurtig** at slå op i.
- Forklare hvert emne i et **elevvenligt, opmuntrende sprog** – skrevet direkte til eleven.
- Lade eleven **røre ved matematikken** gennem interaktive visualiseringer (træk i en trekant, flyt en graf, byg et diagram) i stedet for kun at læse om den.

Visionen er, at en elev der sidder fast i en opgave, kan finde både formlen, forklaringen og et interaktivt eksempel på under et minut.

## Slutmål

Det langsigtede mål er en samlet, gratis matematikportal, der:

- Dækker hele folkeskolens pensum med formler, fagord og interaktive eksempler.
- Understøtter personlig brug (noter, favoritter) og lærer/elev-samarbejde.
- Kan udvides til flere uddannelsesniveauer (fx gymnasiet).
- Drives med **høj grad af autonomi** – indhold og komponenter vedligeholdes og udvides løbende af AI-agenter efter faste standarder (se `AGENTS.md`).

Forretningsmæssigt er planen en gratis tjeneste finansieret af reklamer, med mulighed for senere at klone konceptet til et engelsksproget marked.

## Nuværende status

**Fase 1 (Fundament) er færdig, og Fase 2 (Interaktiv udvidelse) er i gang.** MVP'en er implementeret, og alt kernehindhold fra PDF'en er digitaliseret.

Det virker i dag:

- **Tre hovedemner** med i alt ~30 underemnesider:
  - *Tal og algebra* (tal, regnestrategier, formler og udtryk, ligninger, uligheder, funktioner, procent og promille, økonomi, potenser og rødder, forhold og proportionalitet, mængdelære, talfølger)
  - *Geometri og måling* (areal og omkreds, polygoner og trekanter, firkanter og cirkler, rumlige figurer, rumfang, Pythagoras, trigonometri, koordinatsystem, linjer og vinkler, måleenheder, flytninger og symmetri, vektorer, ligedannethed)
  - *Statistik og sandsynlighed* (datasæt, deskriptorer, diagrammer, sandsynlighed, kombinatorik)
- **Søgefunktion (Ctrl+K)** på tværs af emner og fagord.
- **Fagordsordbog** med 80+ opslag fra stikordsregistret.
- **Interaktive komponenter:** interaktiv trekant, enhedscirkel, trigonometrigrafer, lineær funktion, Pythagoras-beregner, brøkvisualisering, tallinje, procentberegner, ligningsvægt, søjlediagram-bygger og "hverdagsforklaringer".
- **GeoGebra-integration** (indlejring/links) på relevante geometri- og grafsider.
- **PWA-understøttelse** med service worker og offline-side, så siden kan bruges uden net.
- **Temaer** så eleven kan personliggøre sine eksempler.
- **Mobilvenligt, responsivt design** og krydsreferencer mellem beslægtede emner.

## Planlægning og faser

Projektet kører i fire faser (se `.planning/STATE.md` for den løbende status):

1. **Fase 1 – Fundament** ✅ *(færdig)*
   Struktur, navigation, søgning, alle emnesider, fagordsordbog og de første interaktive komponenter.
2. **Fase 2 – Interaktiv udvidelse** 🔨 *(i gang)*
   Flere interaktive komponenter, bedre søgning, animationer og PWA/offline (PWA er på plads).
3. **Fase 3 – Personlig brug** 🔜
   Kontooprettelse, noter og favoritter.
4. **Fase 4 – Udvidelse** 🔜
   Flere uddannelsesniveauer og lærer/elev-samarbejde.

Planlægningsdokumenterne ligger i `.planning/` (`PROJECT.md`, `STATE.md`), og arbejdsreglerne for AI-agenter i `AGENTS.md`.

## Mangler på kort sigt (Fase 2)

- Flere interaktive komponenter til de sider, der stadig er mest tekstbaserede.
- Forbedret søgning med fuzzy matching (fx tolerance over for stavefejl).
- Præsentationsvisning målrettet lærerbrug.
- Animationer og overgange, der gør visualiseringerne mere levende.

## Mangler på lang sigt (Fase 3-4)

- Brugerkonti med noter og favoritter (Fase 3).
- Lærer/elev-samarbejde og deling af opgaver (Fase 4).
- Flere uddannelsesniveauer, fx gymnasiet (Fase 4).
- Engelsksproget klon af portalen til et internationalt marked.
- Reklamefinansiering og drift.

## Teknik

| Område | Valg |
|--------|------|
| Framework | Next.js 16 (App Router, `src/`) |
| Sprog | TypeScript (strict) |
| UI | React 19 client components med SVG-visualiseringer |
| Styling | Tailwind CSS v4 |
| Data | Statisk i `src/data/topics.ts` |
| Build | Statisk generering (SSG) |
| Offline | PWA med service worker |
| Lint | ESLint (`eslint-config-next`) |

### Kom i gang

```bash
# Installér afhængigheder
npm install

# Start udviklingsserver på http://localhost:3000
npm run dev

# Byg til produktion (statisk generering)
npm run build

# Kør lint
npm run lint
```

### Mappestruktur

```
src/
├── app/          # Sider (Next.js App Router)
│   ├── emner/    # Emnesider: tal-og-algebra, geometri, statistik
│   ├── fagord/   # Fagordsordbog
│   ├── offline/  # Offline-side (PWA)
│   └── page.tsx  # Forside
├── components/   # Genbrugelige React-komponenter (interaktive SVG'er, header, søgning m.m.)
└── data/         # Datamodel: emner, underemner, fagord, temaer, hverdagsforklaringer
```

### Konventioner

- Brugervendt tekst er på **dansk** og skrevet direkte til eleven; kode (variabel- og komponentnavne) er på **engelsk**.
- Server components som standard; `"use client"` kun ved interaktive elementer.
- Alle sider skal være mobilvenlige, og hver indholdsside skal have mindst ét interaktivt element.
- Se `AGENTS.md` for de fulde arbejds- og kodestandarder.

## Links

- **GitHub-repo:** https://github.com/qvisty/Formelmat
- **Kilde (PDF):** *Matematiske formler og fagord*, Børne- og Undervisningsministeriet, 2. udgave 2017
- **Arbejdsstandarder:** `AGENTS.md`
- **Projektbeskrivelse:** `.planning/PROJECT.md`
- **Løbende status:** `.planning/STATE.md`
- **GeoGebra:** https://www.geogebra.org
