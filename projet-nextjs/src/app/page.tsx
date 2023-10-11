"use client";

import CustomTab from "./layouts/CustomTab";

/*
attendre avant de mettre les logos OU mettre les logos et ne pas faire sortir ça de notre cercle pour l'instant
Prendre la description du projet qu'on a eu sur moodle
Contient un lien vers notre projet
https://www.fxinnovation.com/fr/cloud-campus/
J'ai reçu le logo cloudcampus par courriel
Le site n'a pas besoin d'être parfait
Envoyer première version (lien http) à Francis
*/

export default function Home() {
  return (
    <>
      <h1>Accueil</h1>
      <p>
        <b>Organisme</b> : CloudCampus (propulsé par FX Innovation), AWS Canada
      </p>
      <hr />
      <p>
        <b>Titre du projet</b> : Développement d&apos;une application cloud
        permettant l&apos;analyse de l&apos;impact d&apos;incidents sur le
        réseau de mobilité de la Ville de Montréal
      </p>
      <hr />
      <p>
        <b>Description du PFE</b> :<br /> Dans le contexte des villes
        intelligentes, des systèmes de transport intelligents (ITS), et de la
        mobilité durable, le développement de solutions logicielles permettant
        de mieux comprendre l&apos;impact de divers facteurs (par exemple, les
        incidents routiers, la construction et la météo) sur la circulation
        devient un élément essentiel de la gestion du trafic routier.
        L&apos;émergence récente des données ouvertes, comme celles fournies par
        la Ville de Montréal et la STM, permet maintenant de développer divers
        types de solutions/applications logicielles qui contribuent à
        l&apos;amélioration de la qualité de vie dans les villes.
      </p>
      <p>
        L&apos;objectif de ce projet est de développer une application
        infonuagique qui permet d&apos;analyser l&apos;impact de divers
        incidents routiers sur l&apos;île de Montréal. Dans le cadre de ce
        projet, les étudiants devront développer une application basée sur une
        architecture micro-services qui permettra de faire de telles analyses.
        Cette application est composée de trois composants principaux :
      </p>
      <hr />
      <CustomTab
        tabs={[
          "Collecte de données",
          "Analyse des données",
          "Visualisation des données",
        ]}
        pannels={[
          <>
            Collecte (en temps réel) de données de sources hétérogènes.
            L&apos;objectif est de concevoir un micro-service qui vise à
            collecter les données de différentes sources utilisant différents
            formats hétérogènes (e.g., les données ouvertes de la ville de
            Montréal et les données statiques et dynamiques de la STM), de les
            traiter (formater, nettoyer, intégrer), de les enregistrer dans une
            base de données appropriée, et de les exposer via une API.
          </>,
          <>
            Analyse des données afin de mesurer l&apos;impact des incidents sur
            la circulation. L&apos;objectif est de concevoir une application
            micro-services qui analysera les données précédemment collectées
            afin de mesurer et de quantifier l&apos;impact des incidents
            routiers sur le flot des véhicules de transport en commun. Ces
            données, qui seront exposées via une API, serviront à offrir la
            visualisation des incidents.
          </>,
          <>
            Visualisation des incidents routiers et des impacts sur la
            circulation. L&apos;objectif de ce micro-service est d&apos;offrir
            une visualisation des incidents et de leurs impacts, sur un
            dashboard et sur une carte géographique. Le dashboard permettra de
            visualiser à un haut niveau l&apos;impact des incidents sur
            différents secteurs, tandis que la carte (e.g., OpenStreetMap,
            Google Maps) permettra à l&apos;utilisateur de visualiser
            l&apos;ensemble des incidents.
          </>,
        ]}
      />
    </>
  );
}
