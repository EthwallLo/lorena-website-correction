
"use client";

export default function HomePage() {
  return (
    <div className="space-y-16">

      {/* Faire un bouton pour passer en mode sombre*/}
      {/* Bannière
      photo en fond ?*/}
      
      <section className="w-full bg-amber-400 flex flex-col justify-center items-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Lorena - Au mot juste 
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Correctrice-relectrice
        </p>
        <button
          onClick={() => {
            const section = document.getElementById("prestations");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-white text-amber-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Me découvrir
        </button>
      </section>

      <section id="prestations" className="py-20 px-4 bg-red-500">
        <h2 className="text-3xl font-bold text-center mb-12">Mes prestations</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Correction simple</h3>
            <p className="text-gray-700 mb-2">Orthographe, grammaire, conjugaison et typographie.</p>
            <p className="font-bold">3 € / 1000 signes</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Correction approfondie</h3>
            <p className="text-gray-700 mb-2">Correction simple, avec reformulations et vérifications de cohérence.</p>
            <p className="font-bold">5 € / 1000 signes</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Réécriture avec correction</h3>
            <p className="text-gray-700 mb-2">Correction approfondie, avec harmonisation stylistique et fluidité.</p>
            <p className="font-bold">10 € / 1000 signes</p>
          </div>
        </div>
      </section>

      {/* Section Accessibilité */}
      {/* <section className="py-20 bg-blue-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Accessibilité de contenu web</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-6">
          J’aide les créateurs de contenu à rendre leurs textes clairs, lisibles et accessibles à tous.  
          Vérification des titres, contrastes, balises alt, navigation clavier et lisibilité.
        </p>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Demander un audit
          </a>
        </div>
      </section> */}

      {/* Section À propos */}
      {/* <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">À propos de moi</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          Passionnée par la langue et la clarté des textes, je mets mon œil attentif au service de vos écrits.  
          Étudiante, auteurs et professionnels me font confiance pour rendre leurs contenus impeccables et lisibles.
        </p>
      </section> */}
    </div>
  );
}
