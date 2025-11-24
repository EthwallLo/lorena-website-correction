"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function QuiSuisJePage() {
  const [activeTab, setActiveTab] = useState<"formations" | "experiences" | "diplomes">("formations");
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section id="phototitre"
        className="relative w-full h-[45vh] flex justify-center items-center"
        style={{ backgroundImage: "url('/image-pc.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-800 after:mt-3 after:mx-auto">Qui suis-je ?</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"></div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/50 text-gray-700 text-[10px] italic px-1 py-0.5 rounded rotate-90 origin-left">
          Photo : Minh Pham / Unsplash
        </div>
      </section>

      <section id="a-propos" className="relative bg-white min-h-screen" style={{ minHeight: "50vh", paddingTop: "10rem"}}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-10 text-[#B76E79] relative
          after:content-[''] after:block after:w-[130px] after:h-1 after:bg-[#B76E79] after:mt-3">
          Moi, c'est Lorena</h2>
            <p className="text-gray-700 mb-6">D'abord diplômée d'un master en informatique et en management, je travaille depuis huit ans en tant que développeuse. Je maîtrise les outils numériques et c'est mon atout principal. </p>
            <p className="text-gray-700 mb-6">Amoureuse des langues et de la lecture, je cherche toujours à en apprendre plus. J'apprends le japonais et le coréen. Je me lance en 2026 en tant que correctrice-relectrice en freelance.</p>
            <p className="text-gray-700 mb-6">Scientifique de formation, je m'adapte à tous les sujets, de la sociologie à la physique quantique.</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/lorena-moi.png" alt="Lorena" className="w-[500px]"/>
          </div>
        </div>
      </section>

      <section id="boutons" className="relative bg-white" style={{ paddingTop: "2rem"}}>
        <div className="flex gap-6 justify-center mb-12">
          <button
            onClick={() => setActiveTab("formations")}
            className={`px-8 py-3 rounded-full border transition 
              ${activeTab === "formations" ? "bg-[#B76E79] text-white" : "border-[#B76E79] text-[#B76E79] hover:bg-[#B76E79]/10"}`}
          >
            Formations
          </button>

          <button
            onClick={() => setActiveTab("experiences")}
            className={`px-8 py-3 rounded-full border transition 
              ${activeTab === "experiences" ? "bg-[#B76E79] text-white" : "border-[#B76E79] text-[#B76E79] hover:bg-[#B76E79]/10"}`}
          >
            Expériences
          </button>

          <button
            onClick={() => setActiveTab("diplomes")}
            className={`px-8 py-3 rounded-full border transition 
              ${activeTab === "diplomes" ? "bg-[#B76E79] text-white" : "border-[#B76E79] text-[#B76E79] hover:bg-[#B76E79]/10"}`}
          >
            Diplômes et certifications
          </button>
        </div>
      </section>

      <section id="contenuboutons"
        className="relative bg-white"
        style={{ minHeight: "20vh", paddingTop: "1rem", paddingBottom: "3rem" }}
      >
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-3xl">
            {activeTab === "formations" && (
              <div className="space-y-16">
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/ecole-rose.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2026 (en cours)
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Licence Sciences du langage mineure Anglais (Bac+3)
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Université Sorbonne Nouvelle
                    </p>
                    <p className="text-gray-700">
                      Formation universitaire centrée sur l’étude du langage, de la linguistique et des mécanismes de communication.
                Elle couvre la phonétique, la syntaxe, la sociolinguistique, l’analyse de discours, avec une consolidation du niveau d’anglais.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/plume-rose.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2025
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Certification en langue française niveau expert
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      École Française de Lecteur-Correcteur
                    </p>
                    <p className="text-gray-700">
                      Certification professionnelle attestant une maîtrise avancée du français écrit.
                      Elle évalue les compétences en orthographe, grammaire, typographie et style, reconnue pour les métiers de l’édition, de la rédaction et de la correction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/ecole-rose.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2023
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Master Management des Systèmes d'Information et du Numérique (Bac+5)
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Grenoble École de Management
                    </p>
                    <p className="text-gray-700">
                      Formation axée sur la gestion des projets numériques, la stratégie IT et l’organisation des systèmes d’information.
                      Elle associe compétences managériales, technologiques et méthodologiques pour piloter des projets dans des environnements complexes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/ecole-rose.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2021
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Bachelor Responsable en Ingénierie des logiciels (Bac+3)
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      CESI
                    </p>
                    <p className="text-gray-700">
                      Diplôme professionnalisant centré sur le développement logiciel, l’architecture informatique et la gestion de projet.
                      Il forme aux technologies de programmation, aux bonnes pratiques de qualité logicielle et aux fondamentaux de l’ingénierie informatique.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experiences" && (
              <div className="space-y-16">
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/xml.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2024 - Aujourd'hui
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Ingénieure développement logiciel
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Eviden
                    </p>
                    <p className="text-gray-700">
                      Domaine nucléaire. Poste dédié au développement d’applications et d’interfaces logicielles en environnement industriel.
                      Il implique l’analyse des besoins client, la rédaction de spécifications, le prototypage UI et le développement en C#, .NET et WPF, ainsi que la création de tests automatisés pour garantir la qualité logicielle.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/benevolat.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2023 - Aujourd'hui
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">      
                      Responsable, rédactrice et correctrice
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Workyt
                    </p>
                    <p className="text-gray-700">
                      Participation à la création de contenus pédagogiques et rédactionnels pour une plateforme éducative.
                      Le rôle comprend la rédaction d’articles, la préparation de cours ainsi que la relecture et la correction avant publication.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/caddie.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2023 - 2025
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">      
                      Équipière polyvalente
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      LIDL
                    </p>
                    <p className="text-gray-700">
                      Poste en magasin associant relation client, gestion de caisse et mise en rayon.
                      Il comprend également la rotation des produits, la tenue du magasin et le respect des procédures d’hygiène et de qualité.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/benevolat.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2024
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">      
                      Rédactrice
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Sciences for Girls
                    </p>
                    <p className="text-gray-700">
                      Rédaction de portraits vulgarisés mettant en lumière des femmes ayant marqué l’histoire scientifique et technologique.
                      Le rôle implique la recherche documentaire, la synthèse d’informations et la rédaction d’articles accessibles à un public large.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/xml.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2023
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Data Analyst
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      ESRF - The European Synchrotron
                    </p>
                    <p className="text-gray-700">
                      Domaine de la physique. Mission axée sur le développement Python, la mise en place de pipelines CI/CD et la création d’outils d’analyse interne.
                      Le poste inclut la conception d’interfaces applicatives, la gestion du multithreading et le support technique auprès des équipes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/xml.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2021 - 2023
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Cheffe de projet & développeuse back-end
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Schneider Electric
                    </p>
                    <p className="text-gray-700">
                      Domaine de l'informatique industriel. Rôle combinant pilotage de projets informatiques et développement back-end en environnement industriel.
                      Il couvre l’intégration continue, l’automatisation de tests, la création d’interfaces techniques et l’amélioration de l’accessibilité des outils internes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/benevolat.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2021 - Aujourd'hui
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">      
                      Traductrice et relectrice
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Solinum
                    </p>
                    <p className="text-gray-700">
                      Participation à la traduction et à la vérification de contenus pour une plateforme d’aide sociale.
                      Le poste consiste à traduire, relire et corriger des textes en anglais, français et espagnol pour assurer une information fiable et accessible.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/xml.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2018 - 2021
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Développeuse fullstack
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Itris Automation Square
                    </p>
                    <p className="text-gray-700">
                      Poste en alternance mêlant administration systèmes, développement logiciel et automatisation.
                      Il inclut la mise en place de machines virtuelles, le développement en Ada, la gestion de scripts PXE et la conception d’outils internes pour l’ingénierie industrielle.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "diplomes" && (
              <div className="space-y-16">
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/langue.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2026 (en cours)
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Japanese Language Proficiency Test (JLPT) N4
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Fondation du Japon
                    </p>
                    <p className="text-gray-700">
                      Certification officielle de langue japonaise attestant la maîtrise des bases intermédiaires.
                      Le niveau N4 correspond à un niveau A2/B1- du CECRL : compréhension de phrases courantes, de textes simples et capacité à échanger sur des sujets familiers.                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/certificat.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2025
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Certification Le Robert
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Le Robert
                    </p>
                    <p className="text-gray-700">
                      Certification professionnelle évaluant la maîtrise du français écrit.
                      Elle atteste un niveau expert en orthographe, grammaire, conjugaison, vocabulaire et expression, reconnu dans les milieux où la qualité rédactionnelle est essentielle.                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/langue.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2023
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">           
                      Test of English for International Communication (TOEIC) 960/990
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      ELTS - English Language Training Services
                    </p>
                    <p className="text-gray-700">
                      Évaluation internationale mesurant les compétences en anglais dans un contexte professionnel.
                      Le test certifie la compréhension orale et écrite dans des situations de travail, et correspond ici à un équivalent C1+.                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/certificat.svg"
                    className="w-16 mt-6"
                  />
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">                           
                      Introduction à l'accessibilité et au design inclusif
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Université de l'Illinois
                    </p>
                    <p className="text-gray-700">
                      Formation d’introduction portant sur les principes du design accessible et inclusif.
                      Elle couvre les bonnes pratiques pour rendre les contenus, interfaces et documents compréhensibles et utilisables par tous les publics, y compris en situation de handicap.                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/langue.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2021
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">           
                      Test of Proficiency in Korean (TOPIK) level 1
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      National Institute for International Education (NIIED)
                    </p>
                    <p className="text-gray-700">
                      Certification officielle de langue coréenne évaluant la compréhension de base.
                      Le niveau 1 correspond à un niveau A1 : reconnaissance de phrases simples, vocabulaire élémentaire et compréhension de situations quotidiennes.                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start relative">
                  <img
                    src="/langue.svg"
                    className="w-16 mt-6"
                  />
                  <span className="absolute left-20 -top-8 text-lg font-medium text-gray-600">
                    2016
                  </span>
                  <div className="border-l-4 border-[#B76E79] pl-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Japanese Language Proficiency Test (JLPT) N5
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Fondation du Japon
                    </p>
                    <p className="text-gray-700">
                      Premier niveau du JLPT, attestant la maîtrise des fondamentaux du japonais.
                      Équivalent du niveau A1, il valide la compréhension de structures simples, d’un vocabulaire essentiel et des premiers caractères hiragana/katakana.                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}