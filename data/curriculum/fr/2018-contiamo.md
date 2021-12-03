---
date: 2018 - 2021
title: Senior TypeScript Engineer / Techlead Frontend - Contiamo
keywords:
  - typescript
  - react
  - monaco editor
  - sql
  - ast
  - redux
  - rxjs
  - graphql
  - open-api
  - k8s
---

Un produit ambitieux et une équipe formidable ! Je travaille chez **Contiamo** depuis 2018, arrivé juste au début de la conception d’un nouveau produit.

Notre première itération du produit était pour supporter le travail des data analystes: Jupyter notebooks en 1 clic, collaboration et déploiement de functions as a service.

Le tout était combiné à un moteur SQL, capable de requếter plusieurs BDD à la fois, agnostique de la technologie de la BDD.

Maintenant, après quelques itérations, Contiamo se focalise plus sur la partie "cataloging" des données, avec gestion de permissions et toujours la possibilité de requêter facilement les données disponibles.

Voilà pour la rapide histoire, qui nous amène au différents challenges que j’ai pu rencontrer :

- Construire en éditeur SQL (basé sur Monaco editor)
- Parser et manipuler des requêtes SQL pour assister nos utilisateurs ([rhombic](https://github.com/contiamo/rhombic))
- Générer pas mal de code depuis OpenAPI pour avoir une DX aux p’tits oignons ([restful-react](https://github.com/contiamo/restful-react))
- Création de projets clients avec notre produit en guise de backend (graphql)
- Création d’un composant React pour gérer nos configurations ([react-runtime-config](https://github.com/contiamo/react-runtime-config))
- Améliorer l’accéssibilité de notre produit
- Jouer un peu avec k8s & docker pour avoir des pull-request previews locales et distantes.

Évidement, tout cela n’a été possible que grâce à une équipe exceptionnelle, toujours là pour challenger le moindre edge case ! Notre jeu favori étant de mettre le navigateur avec une connection internet très lente, cliquer un peu partout, couper internet de tant en tant, et voir le résultat ! Un excellent exercice pour se forcer à gérer TOUS les cas ! 😁

Fun fact, Contiamo est quasiment entièrement en REST, et le tooling autour d’OpenAPI était franchement pas foufou… Bref, un peu frustrer par rapport à mon expérience avec GraphQL, j’ai passé pas mal à améliorer cette partie. Je suis plutôt fier de ce qu’on est arrivé à faire à ce niveau : toutes mes API sont statiquement typées à partir d’OpenAPI, et je peux même utiliser le Frontend comme test de régression !

[![web](/web-badge.svg)](https://www.contiamo.com/)
