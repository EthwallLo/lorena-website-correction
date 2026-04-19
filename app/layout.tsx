import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/header";
import Footer from "./components/footer";
import { montserrat } from "./fonts";

export const metadata = {
  title: "Au mot juste | Correctrice relectrice freelance – correction professionnelle de textes",
  description:
    "Correction professionnelle complète : orthographe, grammaire, syntaxe, cohérence et style. Je corrige, relis et réécris vos textes avec soin en respectant votre voix.",
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
