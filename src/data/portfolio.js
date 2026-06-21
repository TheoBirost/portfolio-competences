/* =======================================================================
   CONTENU DU PORTFOLIO — modifie uniquement ce fichier
   - media.type : "images" | "links" | "docs"
   - images : [{ src, alt }]  → mets tes images dans public/img/ et réfère /img/xxx.png
              (plusieurs images = galerie avec miniatures)
   - links  : [{ label, url, primary }]  → primary = bouton plein
   - docs   : [{ label, url }]  → mets tes PDF dans public/docs/ et réfère /docs/xxx.pdf
              (laisse url:"" pour un emplacement à remplir plus tard)
   ======================================================================= */
export default {
  hero: {
    nom: "Théo Birost",
    intro: "Développeur front-end junior. Ce portfolio présente deux compétences de 3e année — Développer et Entreprendre — à travers des traces issues de projets réels."
  },
  contexte: {
    sub: "Ce portfolio valide <b>deux compétences de 3e année</b> du BUT MMI (parcours Développement web &amp; dispositifs interactifs) : <b>Développer</b> et <b>Entreprendre</b>. Il est organisé par compétences — chaque compétence regroupe des <b>traces</b>, des preuves concrètes avec leur légende et un commentaire.",
    projets: [
      { role: "Projet universitaire · Application full-stack", nom: "Cineaste",
        description: "Une application de cinéma développée de A à Z : back-end (les données) et toute l'interface en Vue.js. Support principal de la compétence Développer.",
        tags: ["Vue.js", "Back-end", "Full-stack"] },
      { role: "Projet client réel · Stage", nom: "Forum H2",
        description: "Le site du Forum Hydrogen Business For Climate, événement B2B organisé par le Pôle Véhicule du Futur. Support des compétences Développer et Entreprendre.",
        tags: ["WordPress", "Client réel", "Stage"] }
    ]
  },
  competences: [
    {
      id: "developper",
      titre: "Développer",
      sousTitre: "<b>Développer pour le web et les médias numériques</b> (niveau 3). Une application complète, et plusieurs réalisations concrètes sur un site professionnel.",
      acList: ["Framework côté client", "Framework côté serveur", "Dispositifs interactifs sophistiqués", "Composants, plugins ou extensions", "Hébergement & déploiement"],
      traces: [
        {
          titre: "Cineaste — application complète (front + back)",
          competence: "Développer", niveau: "N3", ac: "Framework côté serveur", tags: ["Vue.js"],
          media: { type: "links", links: [
            { label: "Voir le site", url: "https://cineaste.theo-birost.fr/", primary: true },
            { label: "Code — front", url: "https://github.com/theobirost" },
            { label: "Code — back", url: "https://github.com/theobirost" }
          ]},
          legende: "Liens vers l'application en ligne et les deux dépôts (front et back).",
          commentaire: "Une appli ciné faite de A à Z : un back-end qui sert les données et toute l'interface en Vue.js. Mon projet le plus abouti en développement, déployé sur mon propre domaine."
        },
        {
          titre: "Cineaste — l'interface en Vue",
          competence: "Développer", niveau: "N3", ac: "Framework côté client", tags: ["Vue Router"],
          media: { type: "images", images: [ { src: "", alt: "Liste de films" }, { src: "", alt: "Fiche détaillée" } ] },
          legende: "L'interface : liste de films, fiche détaillée, navigation.",
          commentaire: "J'ai construit toute l'interface avec Vue : navigation entre les pages, affichage des films, et un rendu adapté au mobile."
        },
        {
          titre: "Forum H2 — composants sur-mesure",
          competence: "Développer", niveau: "N3", ac: "Composants & extensions", tags: ["PHP"],
          media: { type: "images", images: [ { src: "", alt: "Grille d'intervenants" }, { src: "", alt: "Carrousel d'orateurs" } ] },
          legende: "Des composants réutilisables : grilles, carrousels, bannières.",
          commentaire: "Plutôt que de tout refaire à la main, j'ai codé des composants réutilisables (grilles, carrousels…) directement dans WordPress, en PHP. Réutilisables partout sur le site."
        },
        {
          titre: "Forum H2 — bannière d'accueil animée",
          competence: "Développer", niveau: "N3", ac: "Dispositifs interactifs", tags: ["JavaScript"],
          media: { type: "images", images: [ { src: "", alt: "Section d'accueil du site" } ] },
          legende: "La bannière d'accueil du site, animée.",
          commentaire: "J'ai réalisé la section d'accueil animée : images qui défilent et mots-clés qui changent. La première chose que voit le visiteur."
        },
        {
          titre: "Forum H2 — site bilingue FR / EN",
          competence: "Développer", niveau: "N3", ac: "Dispositifs interactifs", tags: ["TranslatePress"],
          media: { type: "images", images: [ { src: "", alt: "Version française" }, { src: "", alt: "Version anglaise" } ] },
          legende: "Le site en français et en anglais, avec le sélecteur de langue.",
          commentaire: "J'ai rendu tout le site bilingue : les textes mais aussi les éléments animés. Le visiteur change de langue d'un clic."
        },
        {
          titre: "Forum H2 — affichage mobile & ordinateur",
          competence: "Développer", niveau: "N3", ac: "Framework côté client", tags: ["CSS"],
          media: { type: "images", images: [ { src: "", alt: "Affichage mobile" }, { src: "", alt: "Affichage ordinateur" } ] },
          legende: "Le site affiché sur mobile et sur ordinateur.",
          commentaire: "Le site s'adapte à toutes les tailles d'écran. J'ai vérifié et ajusté l'affichage sur mobile comme sur grand écran."
        },
        {
          titre: "Forum H2 — petits outils en Python",
          competence: "Développer", niveau: "N3", ac: "Composants logiciels", tags: ["Python"],
          media: { type: "images", images: [ { src: "", alt: "Script Python" }, { src: "", alt: "Visuel généré" } ] },
          legende: "Un script Python et un visuel généré automatiquement.",
          commentaire: "Quand un outil me manquait, je l'ai codé en Python : pour créer des visuels et récupérer les vidéos YouTube du forum. Un vrai gain de temps."
        }
      ]
    },
    {
      id: "entreprendre",
      titre: "Entreprendre",
      sousTitre: "<b>Entreprendre dans le secteur du numérique</b> (niveau 3) : mener un projet client jusqu'au bout. Cinq traces autour du site du Forum H2, un événement professionnel réel.",
      acList: ["Gérer un projet pour un client", "Conduire un projet en amélioration continue", "Collaborer avec les parties prenantes", "Veille technologique & innovation"],
      traces: [
        {
          titre: "Forum H2 — réunions avec le client",
          competence: "Entreprendre", niveau: "N3", ac: "Collaboration parties prenantes", tags: [],
          media: { type: "docs", docs: [ { label: "Compte-rendu de réunion (ou tes notes)", url: "" }, { label: "Notes de cadrage / brief client", url: "" } ] },
          legende: "Comptes-rendus des réunions avec l'organisateur.",
          commentaire: "Le forum est un vrai client (Pôle Véhicule du Futur). Réunions régulières pour comprendre ses besoins et valider chaque étape."
        },
        {
          titre: "Forum H2 — planning & deadline",
          competence: "Entreprendre", niveau: "N3", ac: "Conduite de projet", tags: [],
          media: { type: "docs", docs: [ { label: "Planning / rétroplanning", url: "" }, { label: "Suivi d'avancement / priorités", url: "" } ] },
          legende: "Le planning du projet.",
          commentaire: "La date de l'événement est fixe : il fallait livrer à temps. J'ai organisé le travail par étapes et priorisé les pages importantes."
        },
        {
          titre: "Forum H2 — création des pages",
          competence: "Entreprendre", niveau: "N3", ac: "Gestion de projet client", tags: [],
          media: { type: "images", images: [ { src: "", alt: "Page programme" }, { src: "", alt: "Page intervenants" }, { src: "", alt: "Page exposants" } ] },
          legende: "Les pages du site : programme, intervenants, exposants…",
          commentaire: "J'ai créé et rempli toutes les pages en gardant une mise en page cohérente. Organiser un site complet pour un public pro fait partie du projet."
        },
        {
          titre: "Forum H2 — mise en ligne",
          competence: "Entreprendre", niveau: "N3", ac: "Gestion de projet client", tags: [],
          media: { type: "images", images: [ { src: "", alt: "Page d'accueil en ligne" } ] },
          legende: "Le site une fois mis en ligne.",
          commentaire: "J'ai participé à la mise en ligne et vérifié que tout fonctionnait en conditions réelles. Livrer, c'est aussi s'assurer que le site tourne vraiment."
        },
        {
          titre: "Forum H2 — formulaire de contact",
          competence: "Entreprendre", niveau: "N3", ac: "Gestion de projet client", tags: [],
          media: { type: "images", images: [ { src: "", alt: "Formulaire de contact" } ] },
          legende: "Le formulaire de contact du site.",
          commentaire: "J'ai mis en place le formulaire de contact et corrigé les soucis pour que les messages arrivent bien. Simple, mais essentiel pour un site pro."
        }
      ]
    }
  ]
}
