"use client";

export default function HomePage() {
  return (
    <div>

      {/* Ajouter packs + section accessibilité + infos à comprendre tarifs*/}

      <section className="w-full relative h-screen flex justify-center items-center" style={{ backgroundImage: "url('/image-carnet.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/10"></div> {/* voile noir réduit */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Au mot juste</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-2 text-gray-600 font-medium">Lorena Guedouani - Correction et relecture professionnelle</p>
          <p className="text-md md:text-lg max-w-2xl mx-auto text-gray-600">Je vous accompagne dans la correction de vos écrits.</p>
          <a
            href="#a-propos"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("a-propos");
              if (section) {
                const yOffset = -70;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="relative inline-block text-lg group cursor-pointer mt-6"
          >
          <button
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("a-propos");
              if (section) {
                const yOffset = -70;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gray-100 px-6 font-medium text-gray-800 transition hover:scale-105 mt-6 cursor-pointer"
          >
            <span>Me découvrir ↓</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-gray-300/50"></div>
            </div>
          </button>
          </a>
        </div>
      </section>

      <section id="a-propos" className="bg-gray-100" style={{ backgroundImage: "url('/image-bureau.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "90vh", paddingTop: "11rem"}}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-600">À propos de moi</h2>
            <p className="text-gray-700 mb-6">Je m'appelle Lorena et je suis passionnée de linguistique. </p>
            <p className="text-gray-700 mb-6">Je souhaite aujourd'hui accompagner les particuliers et professionnels dans la correction et la relecture  de leurs documents pour leur permettre de communiquer de manière claire, précise et élégante. </p>
            <p className="text-gray-700 mb-6">Mon objectif est de faire ressortir le meilleur de vos textes tout en respectant votre style et votre voix.</p>
            <button 
              onClick={() => window.location.href = '/a-propos'} 
              className="bg-white text-gray-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Découvrir mon parcours
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img src="/cadre-lorena.png" alt="Lorena" className="w-[500px]"/>
          </div>
        </div>
      </section>

      <section id="prestations" className="justify-center items-center" style={{ backgroundImage: "url('/image-carnet-2.jpg')", backgroundPosition: "center", 
        backgroundSize: "cover", minHeight: "80vh", paddingTop: "8rem",  paddingBottom: "5rem"}}>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">Mes prestations</h2>

        <p className="text-lg md:text-xl text-center mb-12 text-gray-600 font-medium">Correction</p>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <img src="/plume.svg" alt="Icône plume" className="w-[50px] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Correction</h3>
            <h4 className="text-gray-700 font-medium mb-4">Pour les textes jamais corrigés</h4>
            <p className="text-gray-700 mb-4">La correction consiste à vérifier l’orthographe, la grammaire, la ponctuation et la typographie, tout en proposant des ajustements mineurs pour clarifier le texte.</p>
            <p className="text-gray-700 mb-4">Idéal pour les textes originaux qui n’ont encore jamais été relus par un correcteur.</p>
            <p className="text-gray-700 font-bold text-lg">3 € / 1000 signes</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <img src="/livre.svg" alt="Icône plume" className="w-[50px] mx-auto mb-4"/>
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Relecture</h3>
            <h4 className="text-gray-700 font-medium mb-4">Pour les textes déjà travaillés</h4>
            <p className="text-gray-700 mb-4">La relecture permet de vérifier une deuxième fois l’orthographe, la ponctuation, la cohérence et la fluidité.</p>
            <p className="text-gray-700 mb-4">C’est idéal pour un texte qui a déjà été corrigé et nécessite une dernière vérification avant publication.</p>
            <p className="text-gray-700 font-bold text-lg">2 € / 1000 signes</p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a href="/contact" className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">Me contacter</a>
        </div>
      </section>
    </div>
  );
}
