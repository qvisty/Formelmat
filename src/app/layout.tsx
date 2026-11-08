import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PwaProvider } from "@/components/PwaProvider";
import { PresentationShell } from "@/components/PresentationShell";

export const metadata: Metadata = {
  title: "Formelmat – Interaktiv formelsamling til matematik",
  description:
    "Gratis interaktiv formelsamling til matematik. Slå op i formler, fagord og forklaringer med dynamiske visualiseringer.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Formelmat",
  },
  icons: {
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <PwaProvider>
            <PresentationShell>{children}</PresentationShell>
          </PwaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
