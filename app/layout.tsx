import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/header";
import Footer from "./components/footer";
import BackToTopButton from "./components/backToTopButton";
import TextSizeControls from "./components/textSizeControls";
import { montserrat } from "./fonts";

const siteTitle =
  "Au mot juste | Correction, relecture et réécriture professionnelle";

const siteDescription =
  "Correction, relecture, réécriture et traduction anglais-français pour des textes clairs, fluides et professionnels : manuscrits, CV, contenus web et documents.";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  icon: "/icon.png",
  verification: {
    google: "MSUVmcbKfJXbo9LdJIxFVAE9yCsROgxazl10DETeE-w",
  },
  alternates: {
    canonical: "https://aumotjuste-correction.fr",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
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
      </head>
      <body className={`${montserrat.className} bg-white text-gray-900`}>
        <a href="#contenu-principal" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />

        <main id="contenu-principal">{children}</main>

        <Footer />
        <TextSizeControls />
        <BackToTopButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
