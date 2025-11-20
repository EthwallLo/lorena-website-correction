import "./globals.css";
import Header from "./header";
import Footer from "./footer"; 
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Lorena - Au mot juste",
  description: "Correction, relecture et réécriture professionnelle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} bg-white text-gray-900`}>
        <Header />

        <main> 
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
