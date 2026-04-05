import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Du er offline – Formelmat",
  description: "Ingen internetforbindelse. Besøg siderne først online for at bruge dem offline.",
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <div className="text-6xl mb-6" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-20 h-20 mx-auto text-amber-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-3">Du er offline</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Denne side er ikke gemt på din enhed endnu. Besøg den, mens du har
          internetforbindelse, for at bruge den offline bagefter.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          Sider du allerede har besøgt, er tilgængelige offline.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          Gå til forsiden
        </Link>
      </div>
    </div>
  );
}
