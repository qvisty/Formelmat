import Link from "next/link";
import { GeoGebraEmbed } from "@/components/GeoGebraEmbed";
import { EverydayExplanation } from "@/components/EverydayExplanation";
import { hverdagsforklaringer } from "@/data/hverdagsforklaringer";

export const metadata = {
  title: "Flytninger og symmetri – Formelmat",
  description:
    "Spejling, drejning, parallelforskydning, symmetrityper, rosetter, friser og parketeringer.",
};

export default function FlytningerOgSymmetriPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-primary transition-colors">
          Forside
        </Link>
        <span>/</span>
        <Link
          href="/emner/geometri"
          className="hover:text-primary transition-colors"
        >
          Geometri
        </Link>
        <span>/</span>
        <span className="text-foreground">Flytninger og symmetri</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-4">
        Flytninger og symmetri
      </h1>

      <p className="text-muted mb-6 max-w-2xl">
        Flytninger er, når du flytter en figur uden at ændre dens form – du kan spejle den, dreje den eller skubbe den. Symmetri handler om, hvornår en figur ser ens ud, selvom den er blevet spejlet eller drejet.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">De tre flytninger</h2>
        <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-3">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Spejling</h3>
            <p className="text-sm text-muted mt-1">
              En figur flyttes over en <strong>spejlingsakse</strong>.
              Hvert punkt flyttes vinkelret over aksen, så afstanden til
              aksen er den samme på begge sider. Spejling vender figuren om.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Drejning</h3>
            <p className="text-sm text-muted mt-1">
              En figur drejes om et fast{" "}
              <strong>omdrejningspunkt</strong> med en bestemt{" "}
              <strong>drejningsvinkel</strong>. Positiv vinkel er mod uret.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Parallelforskydning
            </h3>
            <p className="text-sm text-muted mt-1">
              Alle punkter flyttes samme afstand i samme retning. Beskrives
              med en <strong>forskydningsvektor</strong>.
            </p>
          </div>
        </div>
      </section>

      <EverydayExplanation {...hverdagsforklaringer["flytninger-og-symmetri"][0]} />

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Symmetrityper</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Spejlingssymmetri
            </h3>
            <p className="text-sm text-muted mt-1">
              En figur har spejlingssymmetri, når en spejling i en
              symmetriakse fører figuren over i sig selv. Fx har et kvadrat
              4 symmetriakser.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Drejningssymmetri
            </h3>
            <p className="text-sm text-muted mt-1">
              En figur har drejningssymmetri, når en drejning (mindre end
              360°) om et punkt fører figuren over i sig selv. Drejningens
              orden angiver, hvor mange gange det sker.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Mønstre</h2>
        <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-3">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Rosetmønster</h3>
            <p className="text-sm text-muted mt-1">
              Et mønster, der har drejningssymmetri og evt.
              spejlingssymmetri om et centralt punkt. Fx et blomstermønster.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">Frisemønster</h3>
            <p className="text-sm text-muted mt-1">
              Et mønster, der gentages langs en linje ved
              parallelforskydning. Kan også have spejling, drejning eller
              glidespejling.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground">
              Parketering (tessellation)
            </h3>
            <p className="text-sm text-muted mt-1">
              Et mønster, der dækker hele planet uden huller eller overlap.
              Regulære parketeringer bruger ens regulære polygoner (trekant,
              kvadrat, sekskant).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Udforsk i GeoGebra</h2>
        <p className="text-muted mb-4">
          Tegn figurer og prøv at spejle, dreje og parallelforskyde dem.
          Brug værktøjslinjen til at vælge den ønskede transformation.
        </p>
        <GeoGebraEmbed
          appName="geometry"
          showToolBar={true}
          showMenuBar={false}
          height={500}
          label="Åbent GeoGebra geometriværktøj – prøv flytninger"
        />
      </section>

      <EverydayExplanation {...hverdagsforklaringer["flytninger-og-symmetri"][1]} />

      <section>
        <h2 className="text-xl font-bold mb-4">Se også</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/emner/geometri/ligedannethed"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Ligedannethed &rarr;
          </Link>
          <Link
            href="/emner/geometri/koordinatsystem"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            Koordinatsystem &rarr;
          </Link>
          <Link
            href="/fagord#spejling"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/30 hover:shadow-sm transition-all"
          >
            📖 Spejling
          </Link>
        </div>
      </section>
    </div>
  );
}
