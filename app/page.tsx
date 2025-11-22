"use client";
import Typewriter from "./typewriter";

export default function HomePage() {
  return (
    <div>

      {/* Ajouter packs + section accessibilité + infos à comprendre tarifs + correction après traduction*/}

      <section className="w-full relative h-screen flex justify-center items-center" style={{ backgroundImage: "url('/image-carnet.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/10"></div> 
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <Typewriter/><p className="font-cutive "></p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-2 text-gray-600 font-medium">Lorena Guedouani - Correction et relecture professionnelle</p>
          <p className="text-md md:text-lg max-w-2xl mx-auto text-gray-600">Je vous accompagne dans la correction de vos écrits.</p>
          <a
            href="#decouvrir"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("decouvrir");
              if (section) {
                const yOffset = -70;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="relative inline-block text-lg group cursor-pointer mt-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("decouvrir");
              if (section) {
                const yOffset = -70;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gray-200 px-6 font-medium text-gray-800 transition hover:scale-105 mt-6 cursor-pointer">
            <span>Découvrir ↓</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-gray-300/50"></div>
            </div>
          </button>
          </a>
        </div>
      </section>

      <section id="decouvrir" className="relative justify-center items-center bg-white"
        style={{ minHeight: "40vh", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <h2 className="text-3xl font-bold mb-10 text-[#B76E79] relative text-center
          after:content-[''] after:block after:w-[130px] after:h-1 after:bg-[#B76E79] after:mt-3 after:mx-auto">
          Pourquoi faire appel à une correctrice-relectrice ? </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 text-center md:text-left">
          <div>
            <p className="text-center text-gray-700 mb-6 leading-relaxed">
              Même lorsqu’on maîtrise parfaitement la langue, il est extrêmement difficile de repérer ses propres erreurs : notre cerveau anticipe ce que l’on 
              veut dire et ne voit plus les fautes, les maladresses ou les incohérences qui peuvent s’y glisser.
            </p>

            <p className="text-center text-gray-700 leading-relaxed">
              Que vous soyez étudiant, professionnel ou auteur, la qualité de vos écrits influence fortement la façon dont on perçoit votre sérieux 
              et vos compétences. Un document avec quelques erreurs suffit parfois à décrédibiliser un travail pourtant solide.
            </p>
          </div>

          <div>
            <p className="text-center text-gray-700 mb-6 leading-relaxed">
              La correction ne se limite pas à enlever les fautes. C’est un véritable travail de précision : harmonisation de la typographie, amélioration de la 
              fluidité des phrases, reformulations douces pour rendre le texte plus clair, suppression des répétitions et vérification de la cohérence d’ensemble. 
            </p>

            <p className="text-center text-gray-700 leading-relaxed">
              Faire appel à une correctrice-relectrice, c’est donc investir dans une communication plus claire, plus percutante et plus professionnelle. C’est 
              l’assurance d’un texte qui reflète réellement votre intention, vos compétences et votre exigence.
            </p>
          </div>
        </div>
      </section>

      <section id="a-propos" className="relative bg-gray-100" style={{ backgroundImage: "url('/image-bureau.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "90vh", paddingTop: "11rem"}}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-600 relative after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-600 after:mt-3">À propos de moi</h2>
            <p className="text-gray-700 mb-6">Je m'appelle Lorena et je suis passionnée de linguistique. </p>
            <p className="text-gray-700 mb-6">Je souhaite aujourd'hui accompagner les particuliers et professionnels dans la correction et la relecture  de leurs documents pour leur permettre de communiquer de manière claire, précise et élégante. </p>
            <p className="text-gray-700 mb-6">Mon objectif est de faire ressortir le meilleur de vos textes tout en respectant votre style et votre voix.</p>
            <button
              onClick={() => window.location.href = '/a-propos'}
              className="relative h-12 overflow-hidden rounded bg-gray-100 px-5 py-2.5 text-gray-800 font-medium transition-all 
              duration-300 hover:bg-gray-150 hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 cursor-pointer">
              <span className="relative">Découvrir mon parcours</span>
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img src="/cadre-lorena.png" alt="Lorena" className="w-[500px]"/>
          </div>
        </div>
      </section>

      <section id="public"
        className="relative justify-center items-center bg-white"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }} >
        <h2 className="text-3xl font-bold mb-10 text-[#B76E79] relative text-center
          after:content-[''] after:block after:w-[130px] after:h-1 after:bg-[#B76E79] after:mt-3 after:mx-auto">
          À qui s’adressent mes services ?</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 text-center">
          <div className="flex flex-col items-center">
            <img
                src="/auteur.svg"
                alt="Icône auteur"
                className="w-20 mx-auto mb-6 opacity-90"
              />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Auteurs</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Correction professionnelle complète : orthographe, ponctuation, syntaxe, cohérence et style pour votre roman,
              recueil, récit ou manuscrit en cours d’écriture.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
                src="/personne.svg"
                alt="Icône particuliers"
                className="w-20 mx-auto mb-6 opacity-90"
              />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Particuliers</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Relecture, correction, mise en page et reformulation de vos courriers, CV, lettres, dossiers VAE,
              documents administratifs ou personnels.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
                src="/pro.svg"
                alt="Icône professionnels"
                className="w-20 mx-auto mb-6 opacity-90"
              />

            <h3 className="text-xl font-semibold mb-3 text-gray-800">Professionnels</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Correction, harmonisation, rewriting et perfectionnement de vos supports écrits : brochures, sites web, 
              newsletters, rapports, communication interne ou commerciale.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
                src="/maison.svg"
                alt="Icône maisons d'édition"
                className="w-20 mx-auto mb-6 opacity-90"
              />

            <h3 className="text-xl font-semibold mb-3 text-gray-800">Maisons d’édition</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Préparation de copie, correction typographique, orthographique et grammaticale, ainsi que réécriture
              pour vos ouvrages à paraître ou vos collections.
            </p>
          </div>

        </div>
      </section>

      <section id="prestations" className="relative justify-center items-center" style={{ backgroundImage: "url('/image-carnet-2.jpg')", backgroundPosition: "center", 
        backgroundSize: "cover", minHeight: "70vh", paddingTop: "8rem",  paddingBottom: "5rem"}}>
          <h2 className="text-3xl font-bold mb-12 text-gray-600 relative after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-600 after:mt-3 text-center after:mx-auto">
            Mes prestations
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
            <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/plume.svg"
                alt="Correction"
                className="w-20 mx-auto mb-6 opacity-90"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Correction et réécriture
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Une correction complète incluant orthographe, grammaire, syntaxe,
                ponctuation, mais aussi reformulation lorsque cela est nécessaire afin
                d’assurer un texte fluide, clair et professionnel.
              </p>
              <button className="mt-4 px-6 py-3 bg-[#B76E79] text-white rounded-md hover:bg-[#a4626c] transition-colors duration-300">
                En savoir plus
              </button>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/redaction.svg"
                alt="Correction"
                className="w-20 mx-auto mb-6 opacity-90"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Rédaction
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Une correction complète incluant orthographe, grammaire, syntaxe,
                ponctuation, mais aussi reformulation lorsque cela est nécessaire afin
                d’assurer un texte fluide, clair et professionnel.
              </p>
              <button className="mt-4 px-6 py-3 bg-[#B76E79] text-white rounded-md hover:bg-[#a4626c] transition-colors duration-300">
                En savoir plus
              </button>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/plume.svg"
                alt="Correction"
                className="w-20 mx-auto mb-6 opacity-90"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Correction et réécriture
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Une correction complète incluant orthographe, grammaire, syntaxe,
                ponctuation, mais aussi reformulation lorsque cela est nécessaire afin
                d’assurer un texte fluide, clair et professionnel.
              </p>
              <button className="mt-4 px-6 py-3 bg-[#B76E79] text-white rounded-md hover:bg-[#a4626c] transition-colors duration-300">
                En savoir plus
              </button>
            </div>

          </div>
      </section>
    </div>
  );
}
