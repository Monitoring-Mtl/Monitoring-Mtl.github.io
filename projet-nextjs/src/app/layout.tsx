"use client"; //Cette page sera générée par le client. Par défaut, les pages sont générées par le serveur.

import "./globals.css";
import CustomNav, { INavigation } from "./layouts/CustomNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation: INavigation = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projets" },
    { name: "Équipes", href: "/equipes" },
    { name: "Partenaires", href: "/partenaires" },
  ];
  return (
    <html lang="fr">
      <body>
        <CustomNav navigation={navigation} />
        <main>
          <div className="shadow-md shadow-primary-400 p-4 rounded-lg">
            {children}
          </div>
        </main>
        <footer className="text-center">
          <i>
            Projet réalisé dans le cadre du projet de fin d&apos;études LOG/TI
            de l&apos;ÉTS durant la session d&apos;automne 2023.
          </i>
        </footer>
      </body>
    </html>
  );
}
