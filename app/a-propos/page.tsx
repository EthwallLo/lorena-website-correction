"use client";

export default function AProposPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section
        className="relative w-full h-[45vh] flex justify-center items-center"
        style={{ backgroundImage: "url('/image-pc.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Qui suis-je ?</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"></div>
      </section>

      <section className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-block border border-pink-300 text-pink-400 px-4 py-1 rounded mb-6">Certification</span>
              <div className="border-l-2 border-gray-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-700">Certification Le Robert</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">2025</p>
                <p className="text-gray-700">La Certification en langue française Le Robert mesure le niveau de maîtrise de la langue française en contexte professionnel : 
                  respect des règles de la langue, précision de l’expression orale et écrite.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/livre.svg" alt="Illustration" className="w-[260px] opacity-90"/>
            </div>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center md:order-1 order-2">
              <img src="/livre.svg" alt="Illustration" className="w-[260px] opacity-90"/>
            </div>
            <div className="md:order-2 order-1">
              <span className="inline-block border border-blue-300 text-blue-400 px-4 py-1 rounded mb-6">Formation</span>
              <p className="text-gray-700 leading-relaxed mb-6">Mon intérêt....</p>

              <div className="border-l-2 border-gray-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-700">École Française de Lecteur-Correcteur</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">2025</p>
                <p className="text-gray-700">Le contenu de la formation est centré sur la correction d’écrits en contexte professionnel, en respectant les règles de la langue française.</p>
              </div>
            </div>
          </div> */}

          <div className="grid md:grid-cols-2 gap-16 items-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-600 relative after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-600 after:mt-3">Scolarité</h2>
            <div className="flex justify-center md:order-1 order-2">
              <img src="/livre.svg" alt="Illustration" className="w-[260px] opacity-90"/>
            </div>
            <div className="md:order-2 order-1">
              <div className="border-l-2 border-gray-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-700">École Française de Lecteur-Correcteur</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">2025</p>
                <p className="text-gray-700">Formation initiale</p>
                <h3 className="text-xl font-semibold text-gray-700">Université Sorbonne Nouvelle</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">2022-2026</p>
                <p className="text-gray-700">BAC+3 - Licence Sciences du Langage, mineure Anglais.</p>
                <h3 className="text-xl font-semibold text-gray-700">Grenoble École de Management</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">2021-2023</p>
                <p className="text-gray-700">BAC+5 - RNCP Manager du numérique et du système d'information</p>
                <h3 className="text-xl font-semibold text-gray-700">CESI</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">2020-2021</p>
                <p className="text-gray-700">BAC+3 - Bachelor Responsable en Ingénierie des Logiciels</p>
                <h3 className="text-xl font-semibold text-gray-700">Lycée du Grésivaudan</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">2018-2020</p>
                <p className="text-gray-700">BAC+2 - BTS Systèmes Numériques option Informatique et Réseaux</p>
                <h3 className="text-xl font-semibold text-gray-700">Lycée Louis Armand</h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">2014-2017</p>
                <p className="text-gray-700">Baccalauréat Scientifique</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
