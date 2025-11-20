export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto flex justify-between items-start px-6 md:px-12 gap-40">

        <div className="flex flex-col items-start">
          <img src="/logo.svg" alt="Lorena - Au mot juste" className="h-24 w-auto" /> 
        </div>

        <div className="text-[#333333] flex flex-col items-start">
          <h4 className="font-semibold mb-2 text-gray-800">Contact</h4>
          <p>Téléphone : <a href="tel:+33612345678" className="hover:underline">+33 6 12 34 56 78</a></p>
          <p>Email : <a href="mailto:lorena@example.com" className="hover:underline">lorena@example.com</a></p>
        </div>

        <div className="text-[#333333] flex flex-col items-start">
          <h4 className="font-semibold mb-2 text-gray-800">Informations</h4>
          <ul>
            <li><a href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</a></li>
            <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Lorena - Au mot juste | Tous droits réservés | Fait avec ♥ par Lorena Guedouani
      </div>
    </footer>
  );
}
