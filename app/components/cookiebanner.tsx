"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");

    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });

    window.gtag("config", "G-E0KQQHDG2G", {
      anonymize_ip: true,
    });

    setVisible(false);
  };

  const refuseCookies = () => {
    localStorage.setItem("cookie-consent", "refused");

    window.gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-gray-700">
          Ce site utilise uniquement des outils de mesure d’audience afin de
          mieux comprendre son utilisation et d’améliorer son contenu. Vous
          pouvez accepter ou refuser ces cookies. Pour en savoir plus, consultez
          la{" "}
          <a
            href="https://aumotjuste-correction.fr/confidentialite"
            className="text-[#B76E79] font-bold"
            rel="noopener noreferrer"
          >
            Politique de confidentialité.
          </a>
        </p>

        <div className="flex gap-3">
          <button
            onClick={refuseCookies}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md text-[#B76E79] hover:bg-gray-100"
          >
            Refuser
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-[#B76E79] text-white rounded-md"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
