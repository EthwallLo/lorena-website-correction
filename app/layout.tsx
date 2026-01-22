import "./globals.css";
import Script from "next/script";
import Header from "./components/header";
import CookieBanner from "./components/cookiebanner";
import Footer from "./components/footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Au mot juste - Correction, relecture et réécriture professionnelle",
  description: "Correction, relecture et réécriture professionnelle",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E0KQQHDG2G"
          strategy="afterInteractive"
        />

        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });

            gtag('js', new Date());
          `}
        </Script>
      </head>

      <body
        suppressHydrationWarning
        className={`${montserrat.className} bg-white text-gray-900`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
