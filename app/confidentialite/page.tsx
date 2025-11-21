export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">

      <section
        className="relative w-full h-[45vh] flex justify-center items-center"
        style={{ backgroundImage: "url('/image-carnet.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Politique de confidentialité</h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"></div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white [box-shadow:0_2px_14px_-3px_rgba(14,14,14,0.3)] rounded-2xl p-6 sm:p-10">
            
            <div className="text-gray-700 leading-relaxed space-y-6">

              <p>Votre vie privée est importante pour moi. Cette politique de confidentialité explique comment je collecte, utilise et protège vos informations lorsque vous utilisez mon site web.</p>

              <h2 className="text-2xl font-bold text-gray-800">1. Collecte des informations</h2>
              <p>Je peux collecter des informations personnelles lorsque vous me contactez via le formulaire, comme votre nom, votre e-mail, votre numéro de téléphone et le contenu de votre message. Ces informations sont utilisées uniquement pour répondre à vos demandes.</p>

              <h2 className="text-2xl font-bold text-gray-800">2. Utilisation des informations</h2>
              <p>Les informations que vous me fournissez ne seront utilisées que pour traiter vos demandes et améliorer votre expérience. Elles ne seront jamais partagées avec des tiers sans votre consentement.</p>

              <h2 className="text-2xl font-bold text-gray-800">3. Sécurité des données</h2>
              <p>Je mets en place des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.</p>

              <h2 className="text-2xl font-bold text-gray-800">4. Cookies et outils de suivi</h2>
              <p>Le site peut utiliser des cookies ou des outils de suivi pour améliorer la navigation et analyser l’utilisation du site. Vous pouvez désactiver les cookies via les paramètres de votre navigateur.</p>

              <h2 className="text-2xl font-bold text-gray-800">5. Vos droits</h2>
              <p>Vous avez le droit d’accéder, de corriger ou de supprimer vos données personnelles. Vous pouvez exercer ces droits en me contactant directement via la page Contact.</p>

              <h2 className="text-2xl font-bold text-gray-800">6. Modifications de la politique</h2>
              <p>Cette politique peut être mise à jour à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour.</p>

              <p className="text-sm text-gray-500">Dernière mise à jour : 21 novembre 2025</p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}