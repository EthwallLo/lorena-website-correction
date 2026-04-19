export default function BetaLecturePage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      
      {/* HERO */}
      <section
        id="phototitre"
        className="relative w-full h-[45vh] flex justify-center items-center"
        style={{
          backgroundImage: "url('/image-carnet-2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-800 after:mt-3 after:mx-auto">
            La bêta-lecture
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"></div>

        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/50 text-gray-700 text-[10px] italic px-1 py-0.5 rounded rotate-90 origin-left">
          Photo : Jess Bailey / Unsplash
        </div>
      </section>

      {/* TYPES DE TEXTES */}
      <section className="relative justify-center items-center bg-white">
        <section className="py-20 bg-cover bg-center">
          
          <h2 className="text-center text-3xl font-bold text-[#B76E79] mb-16 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-[#B76E79] after:mt-3 after:mx-auto">
            Sur quels types de textes ?
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 px-6">

            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <img src="fiction.svg" className="w-20 mx-auto mb-6" alt="Fiction" />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">Romans & nouvelles</h3>
              <p className="text-gray-700 leading-relaxed">
                Analyse du rythme, des personnages, de la structure narrative et de la cohérence globale du récit.
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <img src="creative.svg" className="w-20 mx-auto mb-6" alt="Écriture créative" />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">Projets d’écriture</h3>
              <p className="text-gray-700 leading-relaxed">
                Accompagnement sur des manuscrits en cours, chapitres ou premières versions de textes.
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <img src="essay.svg" className="w-20 mx-auto mb-6" alt="Essais" />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">Essais & récits</h3>
              <p className="text-gray-700 leading-relaxed">
                Retour critique sur la structure des idées, la clarté du propos et la fluidité du texte.
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <img src="student.svg" className="w-20 mx-auto mb-6" alt="Étudiants" />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">Projets personnels</h3>
              <p className="text-gray-700 leading-relaxed">
                Textes personnels, récits autobiographiques ou projets d’écriture non académiques.
              </p>
            </div>

          </div>
        </section>
      </section>

{/* TARIFS */}
<section className="relative justify-center items-center bg-white" style={{ backgroundImage: "url('/librairie.webp')" }}>
  <section className="py-20 bg-cover bg-center">

    <h2 className="text-center text-3xl font-bold text-gray-600 mb-16 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-600 after:mt-3 after:mx-auto">
      Les tarifs
    </h2>

<section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 mb-24">

  {/* ALPHA */}
  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition text-center flex flex-col">
    <h2 className="text-2xl font-bold mb-4 text-[#B76E79]">Alpha-lecture</h2>

    <p className="leading-relaxed text-gray-600 mb-4">
      Idéale pour les premiers jets, l’alpha-lecture permet de travailler en profondeur
      la structure du récit, la cohérence et le développement des idées.
    </p>

    <p className="mt-4 font-semibold text-gray-700">
      <span className="text-[#B76E79] font-bold">0,004 €</span> / mot
    </p>

    <p className="text-xs text-gray-400 mt-2">
      (ex : roman de 80 000 mots ≈ 320 €)
    </p>
  </div>

  {/* BETA */}
  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition text-center flex flex-col">
    <h2 className="text-2xl font-bold mb-4 text-[#B76E79]">Bêta-lecture</h2>

    <p className="leading-relaxed text-gray-600 mb-4">
      Destinée aux textes aboutis, la bêta-lecture apporte un regard critique sur
      la lisibilité, le rythme et l’impact global auprès du lecteur.
    </p>

    <p className="mt-4 font-semibold text-gray-700">
      <span className="text-[#B76E79] font-bold">0,005 €</span> / mot
    </p>

    <p className="text-xs text-gray-400 mt-2">
      (ex : roman de 80 000 mots ≈ 400 €)
    </p>
  </div>

</section>

    <div className="text-center mt-20">
      <a
        href="/contact"
        className="px-8 py-4 bg-[#B76E79] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#a4626c] transition"
      >
        Demander un devis
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