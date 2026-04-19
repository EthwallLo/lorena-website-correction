export default function TranscriptionPage() {
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
            Transcription & sous-titrage
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"></div>

        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/50 text-gray-700 text-[10px] italic px-1 py-0.5 rounded rotate-90 origin-left">
          Photo : Jess Bailey / Unsplash
        </div>
      </section>

      {/* TYPES DE CONTENUS */}
      <section className="bg-white">
        <div className="py-20">

          <h2 className="text-center text-3xl font-bold text-[#B76E79] mb-16 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-[#B76E79] after:mt-3 after:mx-auto">
            Quels types de contenus ?
          </h2>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

  <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
    <img src="/video.svg" className="w-14 mx-auto mb-4" alt="Vidéos" />
    <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">
      Vidéos
    </h3>
    <p className="text-gray-600">
      YouTube, formations en ligne, contenus marketing ou réseaux sociaux.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
    <img src="/podcast.svg" className="w-14 mx-auto mb-4" alt="Podcasts" />
    <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">
      Podcasts
    </h3>
    <p className="text-gray-600">
      Épisodes audio, interviews ou contenus narratifs à retranscrire.
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
    <img src="/interview.svg" className="w-14 mx-auto mb-4" alt="Entretiens" />
    <h3 className="text-xl font-semibold mb-3 text-[#B76E79]">
      Entretiens
    </h3>
    <p className="text-gray-600">
      Transcription fidèle de conversations, réunions ou échanges professionnels.
    </p>
  </div>

</div>
        </div>
      </section>

      {/* TARIFS */}
<section
  className="relative bg-white"
  style={{ backgroundImage: "url('/librairie.webp')" }}
>
  <div className="py-20 bg-cover bg-center">

    <h2 className="text-center text-3xl font-bold text-gray-600 mb-6 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-600 after:mt-3 after:mx-auto">
      Tarifs
    </h2>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 px-6">
      Les tarifs varient selon la qualité audio, la durée et la complexité du contenu.
    </p>

    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

      <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition">

        <h3 className="text-2xl font-bold mb-4 text-[#B76E79]">
          Transcription simple
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          Retranscription fidèle de contenus audio clairs, sans sous-titrage synchronisé.
        </p>

        <p className="text-lg font-semibold text-gray-700">
          <span className="text-[#B76E79] text-2xl font-bold">5 €</span> / minute audio
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition">

        <h3 className="text-2xl font-bold mb-4 text-[#B76E79]">
          Sous-titrage + transcription
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          Transcription complète avec synchronisation des sous-titres pour vidéos.
        </p>

        <p className="text-lg font-semibold text-gray-700">
          <span className="text-[#B76E79] text-2xl font-bold">7 €</span> / minute audio
        </p>

      </div>

    </div>

    <div className="text-center mt-20">
      <a
        href="/contact"
        className="px-8 py-4 bg-[#B76E79] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#a4626c] transition"
      >
        Demander un devis
      </a>
    </div>

  </div>

  <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/50 text-gray-700 text-[10px] italic px-1 py-0.5 rounded rotate-90 origin-left">
    Photo : Susan Q Yin / Unsplash
  </div>
</section>

    </div>
  );
}