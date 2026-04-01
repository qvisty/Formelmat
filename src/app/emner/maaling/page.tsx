import Link from "next/link";

export const metadata = {
  title: "Måling og enheder – Formelmat",
  description: "Længde, areal, rumfang, tid, vægt og omregning.",
};

export default function MaalingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <div className="mb-2">
        <Link href="/" className="text-sm text-muted hover:text-primary transition-colors">← Forside</Link>
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
        <span>📏</span> Måling og enheder
      </h1>
      <p className="text-lg text-muted mb-8">Længde, areal, rumfang, tid, vægt og omregning.</p>
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="text-4xl mb-4">🚧</p>
        <h2 className="text-lg font-semibold text-foreground mb-2">Kommer snart</h2>
        <p className="text-muted">
          Vi arbejder på at tilføje interaktivt indhold. I mellemtiden kan du udforske{" "}
          <Link href="/emner/trigonometri" className="text-primary font-medium">trigonometri</Link>.
        </p>
      </div>
    </div>
  );
}
