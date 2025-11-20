import "./globals.css";
import Header from "./Header";

export const metadata = {
  title: "Lorena - Au mot juste",
  description: "Correction, relecture et réécriture professionnelle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        <Header />

        <main> 
          {children}
        </main>
      </body>
    </html>
  );
}
