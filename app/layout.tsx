import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/header";
import Footer from "./components/footer";
import { montserrat } from "./fonts";

export const metadata = {
  title: "Au mot juste | Correction et relecture professionnelle",
  description:
    "Je corrige, relis et réécris vos textes avec soin tout en respectant votre style et votre voix. Correction professionnelle de manuscrits, CV, documents et contenus web.",
  icon: "/icon.png",
  verification: {
    google: "MSUVmcbKfJXbo9LdJIxFVAE9yCsROgxazl10DETeE-w",
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
        <Header />

        <main>{children}</main>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
