export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-12 gap-10">

        <div className="hidden md:flex flex-col items-start">
          <img src="/logo-moderne.svg" alt="Lorena - Au mot juste" className="h-20 w-auto" />
        </div>

        <div className="text-[#333333] flex flex-col items-start">
          <h4 className="font-semibold mb-2 text-[#B76E79]">Contact</h4>
          <p>
            Téléphone :
            <a href="tel:+33769358103" className="hover:underline"> +33 7 69 35 81 03</a>
          </p>
          <p>
            Email :
            <a href="mailto:lorena.correction@gmail.com" className="hover:underline"> lorena.correction@gmail.com</a>
          </p>
        </div>

        <div className="text-[#333333] flex flex-col items-start">
          <h4 className="font-semibold mb-2 text-[#B76E79]">Informations</h4>
          <ul className="space-y-1">
            <li><a href="/confidentialite" className="hover:underline">Politique de confidentialité</a></li>
            <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto text-center text-sm text-gray-500 mt-8 px-4 leading-relaxed">
        © {new Date().getFullYear()} Lorena - Au mot juste  
        <br className="md:hidden" />
        Tous droits réservés  
        <br className="md:hidden" />
        Fait avec ♥ par Lorena Guedouani
      </div>
    </footer>
  );
}
