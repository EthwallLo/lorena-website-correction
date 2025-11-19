import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Lorena - Au mot juste",
  description: "Correction, relecture et réécriture professionnelle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        <header className="w-full border-b py-4 bg-white">
          <nav className="max-w-4xl mx-auto flex justify-between items-center px-4">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo Lorena - Au mot juste" width={150} height={100}/>
            </Link>
            <div className="flex space-x-6 text-gray-900">
              <Link href="/" className="hover:text-blue-600">Accueil</Link>
              <Link href="/prestations" className="hover:text-blue-600">Prestations</Link>
              <Link href="/a-propos" className="hover:text-blue-600">À propos</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          {children}
        </main>

        <footer>
        </footer>
      </body>
    </html>
  );
}
