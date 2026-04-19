import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/header";
import Footer from "./components/footer";
import { montserrat } from "./fonts";

export const metadata = {
  title: "Au mot juste | Correction, relecture et réécriture professionnelle",
  description:
    "Correctrice freelance spécialisée en relecture professionnelle et correction de textes. J’améliore l’orthographe, la grammaire, la syntaxe et le style de vos écrits : manuscrits, CV, documents professionnels et contenus web.",
  icon: "/icon.png",
  verification: {
    google: "MSUVmcbKfJXbo9LdJIxFVAE9yCsROgxazl10DETeE-w",
  },
  alternates: {
    canonical: "https://aumotjuste-correction.fr",
  },
  openGraph: {
    title: "Au mot juste | Correction, relecture et réécriture professionnelle",
    description:
      "Correctrice freelance spécialisée en relecture professionnelle et correction de textes.",
    url: "https://aumotjuste-correction.fr",
    siteName: "Au mot juste",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/icon.png" />
        <title>Au mot juste | Correction, relecture et réécriture professionnelle</title>
      </head>
      <body className={`${montserrat.className} bg-white text-gray-900`}>
        <Header />

        <main>{children}</main>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
