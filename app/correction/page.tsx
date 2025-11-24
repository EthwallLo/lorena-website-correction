export default function CorrectionPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section id="phototitre"
        className="relative w-full h-[45vh] flex justify-center items-center"
        style={{ backgroundImage: "url('/image-carnet-2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-600 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-600 after:mt-3 after:mx-auto">La correction</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"></div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/50 text-gray-700 text-[10px] italic px-1 py-0.5 rounded rotate-90 origin-left">
          Photo : Jess Bailey / Unsplash
        </div>
      </section>

      <section id="corps" className="relative justify-center items-center bg-white">
        <section
          className="py-20 bg-cover bg-center">
          <h2 className="text-center text-3xl font-bold text-[#B76E79] mb-16 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-[#B76E79] after:mt-3 after:mx-auto">
            Pour quels types de documents ?
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 px-6">
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <img src="web.svg" className="w-20 mx-auto mb-6" alt="Correction web" />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">Contenus web</h3>
              <p className="text-gray-700 leading-relaxed">
                Articles, pages de site, newsletters, descriptions produits ou contenus SEO.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <img src="script.svg" className="w-20 mx-auto mb-6" alt="Manuscrits" />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">Manuscrits</h3>
              <p className="text-gray-700 leading-relaxed">
                Romans, nouvelles, essais, autofictions ou tout autre projet littéraire.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <img src="travaux.svg" className="w-20 mx-auto mb-6" alt="Travaux universitaires" />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">Travaux universitaires</h3>
              <p className="text-gray-700 leading-relaxed">
                Mémoire, rapport, exposé, dossier projet ou travaux de recherche.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <img src="docu.svg" className="w-20 mx-auto mb-6" alt="Documents personnels" />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">Documents personnels</h3>
              <p className="text-gray-700 leading-relaxed">
                CV, lettre de motivation, discours, documents administratifs ou professionnels.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="corps" className="relative justify-center items-center bg-white" style={{ backgroundImage: "url('/librairie.jpg')" }}>
        <section
          className="py-20 bg-cover bg-center">
          <h2 className="text-center text-3xl font-bold text-gray-600 mb-16 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-600 after:mt-3 after:mx-auto">
            Les tarifs
          </h2>
          <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 mb-24" 
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#B76E79]">Correction approfondie</h2>
              <p className="leading-relaxed text-gray-600">
                Une correction complète avec vérification des informations, harmonisation et homogénéisation du style.  
              </p>

              <p className="mt-4 font-semibold text-gray-700">
                <span className="text-[#B76E79] font-bold">3 €</span> / 1000 signes
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#B76E79]">Correction simple</h2>
              <p className="leading-relaxed text-gray-600">
                Une dernière relecture pour un texte déjà corrigé, afin d’éliminer les 
                ultimes fautes et d’assurer une cohérence parfaite.  
              </p>

              <p className="mt-4 font-semibold text-gray-700">
                <span className="text-[#B76E79] font-bold">2 €</span> / 1000 signes
              </p>
            </div>
            </section>
          <div className="text-center mt-20">
              <a
                href="/contact"
                className="px-8 py-4 bg-[#B76E79] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#a4626c] transition"
              >
                Demander un devis gratuit
              </a>
            </div>
        </section>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/50 text-gray-700 text-[10px] italic px-1 py-0.5 rounded rotate-90 origin-left">
          Photo : Susan Q Yin / Unsplash
        </div>
      </section>
    </div>
  );
}
