export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <section
        className="relative w-full h-[45vh] flex justify-center items-center"
        style={{
          backgroundImage: "url('/image-carnet.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-800 after:mt-3 after:mx-auto">
            Politique de confidentialité
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"></div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/50 text-gray-700 text-[10px] italic px-1 py-0.5 rounded rotate-90 origin-left">
          Photo : Jess Bailey / Unsplash
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white [box-shadow:0_2px_14px_-3px_rgba(14,14,14,0.3)] rounded-2xl p-6 sm:p-10">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                La protection de vos données personnelles est une priorité. La
                présente politique de confidentialité a pour objectif de vous
                informer de manière claire et transparente sur la manière dont
                vos données sont collectées, utilisées et protégées lorsque vous
                naviguez sur ce site.
              </p>

              <h2 className="text-2xl font-bold text-[#B76E79]">
                1. Responsable du traitement des données
              </h2>
              <p>
                La responsable du traitement des données personnelles collectées
                sur ce site est <strong>Lorena Guedouani</strong>.{" "}
              </p>
              <p>
                Pour toute question relative à la protection de vos données,
                vous pouvez me contacter via la page{" "}
                <a
                  href="https://aumotjuste-correction.fr/contact"
                  className="text-[#B76E79] font-bold"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>{" "}
                du site.
              </p>

              <h2 className="text-2xl font-bold text-[#B76E79]">
                2. Données collectées
              </h2>
              <p>
                Des données personnelles peuvent être collectées lorsque vous
                utilisez ce site, notamment lorsque vous me contactez via le
                formulaire de contact.
              </p>
              <p>Les données susceptibles d’être collectées sont :
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Nom et/ou prénom</strong>
                  </li>
                  <li>
                    <strong>Adresse e-mail</strong>
                  </li>
                  <li>
                    <strong>Numéro de téléphone</strong> (si renseigné)
                  </li>
                  <li>
                    <strong>Contenu du message</strong>
                  </li>
                </ul>
              </p>
              <p>
                Aucune donnée personnelle n’est collectée sans votre{" "}
                <strong>consentement explicite</strong>.
              </p>

              <h2 className="text-2xl font-bold text-[#B76E79]">
                3. Finalités de la collecte
              </h2>
              <p>Les données collectées sont utilisées uniquement pour :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Répondre à vos demandes de contact ou de renseignements</li>
                <li>
                  Échanger dans le cadre d’une demande de devis ou d’une
                  prestation
                </li>
                <li>Assurer le bon fonctionnement et l’amélioration du site</li>
              </ul>
              <p>
                Vos données ne sont <strong>en aucun cas</strong> utilisées à
                des fins commerciales non sollicitées.
              </p>

              <h2 className="text-2xl font-bold text-[#B76E79]">
                4. Partage des données
              </h2>
              <p>
                Les données personnelles collectées sur ce site sont{" "}
                <strong>strictement confidentielles</strong>.
              </p>
              <p>
                Elles ne sont{" "}
                <strong>ni vendues, ni échangées, ni cédées</strong> à des
                tiers.
              </p>
              <p>
                Elles peuvent uniquement être traitées par des outils techniques
                nécessaires au fonctionnement du site (hébergement, formulaire),
                dans le respect de la réglementation en vigueur.
              </p>

              <h2 className="text-2xl font-bold text-[#B76E79]">
                5. Durée de conservation
              </h2>
              <p>
                Les données sont conservées uniquement pendant la durée
                nécessaire au traitement de votre demande et aux obligations
                légales éventuelles, puis supprimées.
              </p>

              <h2 className="text-2xl font-bold text-[#B76E79]">
                6. Sécurité des données
              </h2>
              <p>
                Des mesures techniques et organisationnelles appropriées sont
                mises en place afin de protéger vos données personnelles contre
                toute perte, accès non autorisé, modification ou divulgation.
              </p>

              <h2 className="text-2xl font-bold text-[#B76E79]">
                7. Cookies et traceurs
              </h2>
              <p>
                Ce site <strong>n’utilise pas de cookies</strong> ni d’outils de
                suivi à des fins publicitaires ou statistiques.
              </p>
              <p>
                Aucun cookie n’est déposé sur votre appareil lors de la
                navigation sur ce site.
              </p>

              <h2 className="text-2xl font-bold text-[#B76E79]">
                8. Vos droits
              </h2>
              <p>
                Conformément au{" "}
                <strong>
                  Règlement général sur la protection des données (RGPD)
                </strong>
                , vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Droit d’accès à vos données personnelles</li>
                <li>Droit de rectification</li>
                <li>Droit à l’effacement</li>
                <li>Droit à la limitation du traitement</li>
              </ul>
              <p>
                Vous pouvez exercer ces droits en me contactant via la page{" "}
                <a
                  href="https://aumotjuste-correction.fr/contact"
                  className="text-[#B76E79] font-bold"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>{" "}
                du site.
              </p>

              <h2 className="text-2xl font-bold text-[#B76E79]">
                9. Modification de la politique de confidentialité
              </h2>
              <p>
                La présente politique de confidentialité peut être modifiée à
                tout moment afin de rester conforme aux évolutions légales ou
                techniques. La version en vigueur est celle publiée sur cette
                page.
              </p>

              <p className="text-sm text-gray-500">
                Dernière mise à jour : 10 janvier 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
