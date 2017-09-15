---
date: Avril 2017
title: Freelance - Actronika
keywords:
  - electron
  - react
  - redux
  - redux−observable
  - serial−port
  - typescript
  - jest
  - TDD
  - github
---

Développement du logiciel pour les kits de démonstration de la puce Tactronik.

Ce logiciel, réalisé avec Electron/React/Redux/Redux-observable/Jest, permet de paramétrer les différents effets haptiques prédéfinis et les envoyer à la carte de démonstration via le port série. 

Le challenge de ce projet était d'avoir une couche de communication série, et cela sans avoir à disposition la carte électronique pour tester avant la livraison. 

Grâce à Redux-observable et une batterie de tests unitaires, la connexion s'est fait sans accroc. Le projet est facilement maintenable et évolutif. Et ça, c'est cool !

[![web](web-badge.svg)](http://www.actronika.com)