export default function PrestationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Mes prestations</h1>
      <p>Contenu bientôt ajouté.</p>
      <section id="prestations" className="relative justify-center items-center" style={{ backgroundImage: "url('/image-carnet-2.jpg')", backgroundPosition: "center", 
        backgroundSize: "cover", minHeight: "80vh", paddingTop: "8rem",  paddingBottom: "5rem"}}>
        <div className="absolute top-0 left-0 right-0 h-10 bg-linear-to-t from-transparent to-white pointer-events-none"></div>
        <h2 className="text-3xl font-bold mb-6 text-gray-600 relative after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-600 after:mt-3 text-center after:mx-auto">Mes prestations</h2>
        <p className="text-lg md:text-xl text-center mb-12 text-gray-600 font-medium">Correction</p>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-100 shadow-md rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <img src="/plume.svg" alt="Icône plume" className="w-[50px] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Correction</h3>
            <h4 className="text-gray-700 font-medium mb-4">Pour les textes jamais corrigés</h4>
            <p className="text-gray-700 mb-4">La correction consiste à vérifier l’orthographe, la grammaire, la ponctuation et la typographie, tout en proposant des ajustements mineurs pour clarifier le texte.</p>
            <p className="text-gray-700 mb-4">Idéal pour les textes originaux qui n’ont encore jamais été relus par un correcteur.</p>
            <p className="text-gray-700 font-bold text-lg">3 € / 1000 signes</p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <img src="/livre.svg" alt="Icône plume" className="w-[50px] mx-auto mb-4"/>
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Relecture</h3>
            <h4 className="text-gray-700 font-medium mb-4">Pour les textes déjà travaillés</h4>
            <p className="text-gray-700 mb-4">La relecture permet de vérifier une deuxième fois l’orthographe, la ponctuation, la cohérence et la fluidité.</p>
            <p className="text-gray-700 mb-4">C’est idéal pour un texte qui a déjà été corrigé et nécessite une dernière vérification avant publication.</p>
            <p className="text-gray-700 font-bold text-lg">2 € / 1000 signes</p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gray-100 px-6 font-medium text-gray-800 duration-500 cursor-pointer">
            <div className="translate-x-0 opacity-100 transition-all group-hover:-translate-x-[150%] group-hover:opacity-0">
              Me contacter
            </div>

            <div className="absolute translate-x-[150%] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800">
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/50 text-gray-700 text-[10px] italic px-1 py-0.5 rounded rotate-90 origin-left">
          Photo : Jess Bailey / Unsplash
        </div>
      </section>
    </div>
  );
}
