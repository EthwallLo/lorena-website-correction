import Image from "next/image";

export default function TraductionPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section
        id="phototitre"
        aria-labelledby="traduction-titre"
        className="relative w-full h-[45vh] flex justify-center items-center"
        style={{
          backgroundImage: "url('/image-carnet-2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1
            id="traduction-titre"
            className="text-4xl md:text-5xl font-bold text-gray-800 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-800 after:mt-3 after:mx-auto"
          >
            La traduction
          </h1>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"
        ></div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/50 text-gray-700 text-[10px] italic px-1 py-0.5 rounded rotate-90 origin-left">
          Photo : Jess Bailey / Unsplash
        </div>
      </section>

      <section
        id="corps"
        aria-labelledby="types-traduction"
        className="relative justify-center items-center bg-white"
      >
        <section className="py-20 bg-cover bg-center">
          <h2
            id="types-traduction"
            className="text-center text-3xl font-bold text-[#B76E79] mb-16 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-[#B76E79] after:mt-3 after:mx-auto"
          >
            Quels types de documents ?
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 px-6">
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <Image
                src="/web.svg"
                className="w-20 mx-auto mb-6"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
              />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">
                Contenus web
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Articles, pages de site, newsletters ou fiches produits rédigés
                en anglais à traduire en français.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <Image
                src="/script.svg"
                className="w-20 mx-auto mb-6"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
              />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">
                Manuscrits
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Romans, nouvelles, récits courts, essais ou extraits littéraires
                à adapter de l&apos;anglais vers le français.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <Image
                src="/travaux.svg"
                className="w-20 mx-auto mb-6"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
              />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">
                Travaux universitaires
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Résumés, présentations, dossiers ou documents
                d&apos;accompagnement en anglais à rendre clairs en français.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
              <Image
                src="/docu.svg"
                className="w-20 mx-auto mb-6"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
              />
              <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">
                Documents personnels
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lettres, CV, biographies, documents administratifs ou supports
                professionnels à traduire vers un français naturel et soigné.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section
        id="tarifs"
        aria-labelledby="tarifs-titre"
        className="relative justify-center items-center bg-white"
        style={{ backgroundImage: "url('/librairie.webp')" }}
      >
        <section className="py-20 bg-cover bg-center">
          <h2
            id="tarifs-titre"
            className="text-center text-3xl font-bold text-gray-600 mb-16 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-600 after:mt-3 after:mx-auto"
          >
            Les tarifs
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 mb-24">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#B76E79]">
                Traduction anglais-français
              </h3>
              <p className="leading-relaxed text-gray-600">
                Traduction de vos textes de l&apos;anglais vers le français,
                avec une attention particulière portée au sens, au ton, à la
                fluidité et à la cohérence du texte final.
              </p>

              <p className="mt-4 font-semibold text-gray-700">
                <span className="text-[#B76E79] font-bold">0,10 €</span> / mot source
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#B76E79]">
                Relecture après traduction
              </h3>
              <p className="leading-relaxed text-gray-600">
                Relecture d&apos;une traduction anglais-français existante afin
                de corriger les maladresses, vérifier la fidélité au texte
                source et rendre le français plus naturel.
              </p>

              <p className="mt-4 font-semibold text-gray-700">
                <span className="text-[#B76E79] font-bold">0,04 €</span> / mot source
              </p>
            </div>
          </div>
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
