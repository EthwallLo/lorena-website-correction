"use client";

import { useState } from "react";

export default function QuiSuisJePage() {
  const [activeTab, setActiveTab] = useState<"formations" | "experiences" | "diplomes">("formations");
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section id="phototitre"
        className="relative w-full h-[45vh] flex justify-center items-center"
        style={{ backgroundImage: "url('/image-pc.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Qui suis-je ?</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"></div>
      </section>

      <section id="a-propos" className="relative bg-white min-h-screen" style={{ minHeight: "50vh", paddingTop: "10rem"}}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-10 text-[#B76E79] relative
          after:content-[''] after:block after:w-[130px] after:h-1 after:bg-[#B76E79] after:mt-3">
          Moi, c'est Lorena. </h2>
            <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae risus nec ipsum accumsan dapibus sed et est. Quisque egestas, risus vel blandit mollis, urna metus imperdiet purus, eu efficitur lacus augue vitae nisi. </p>
            <p className="text-gray-700 mb-6">Donec eu bibendum sapien. Cras bibendum, odio nec auctor pulvinar, odio nisi varius lectus, non feugiat turpis arcu non ex. Aliquam maximus dictum lacus, et consequat odio finibus vel. </p>
            <p className="text-gray-700 mb-6">Sed aliquam vestibulum mauris, eget porta ante aliquam eget. Suspendisse tristique, nulla quis tristique commodo, quam mauris maximus orci, ac sollicitudin nunc ligula eget ligula. Fusce condimentum ipsum massa.</p>
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
        style={{ minHeight: "20vh", paddingTop: "1rem", paddingBottom: "2rem" }}
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
                      Licence Sciences du langage mineure Anglais
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Université Sorbonne Nouvelle
                    </p>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
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
                      Master Management des Systèmes d'Information et du Numérique
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Grenoble École de Management
                    </p>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
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
                      Bachelor Responsable en Ingénierie des logiciels
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      CESI
                    </p>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experiences" && (
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
                      Licence Sciences du langage mineure Anglais
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Université Sorbonne Nouvelle
                    </p>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
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
                      Master Management des Systèmes d'Information et du Numérique
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Grenoble École de Management
                    </p>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
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
                      Bachelor Responsable en Ingénierie des logiciels
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      CESI
                    </p>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
                    </p>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
                    </p>
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
                      Test of English for International Communication (TOEIC)
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      ELTS - English Language Training Services
                    </p>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
                    </p>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
                    </p>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
                    </p>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      vitae risus nec ipsum accumsan dapibus sed et est.
                    </p>
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
