import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "./components/header";
import Footer from "./components/footer"; 
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Au mot juste | Correction, relecture et réécriture professionnelle",
  description: "Je corrige, relis et réécris vos textes avec soin tout en respectant votre style et votre voix. Découvrez mon approche personnalisée.",
  icon: "/icon.png",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/icon.png"/>
      </head>
      <body className={`${montserrat.className} bg-white text-gray-900`}>
        <Header />

        <main> 
          {children}
        </main>

        <Footer />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
