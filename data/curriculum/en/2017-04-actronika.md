---
date: April 2017
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

# TODO translate this
Développement du logiciel Tactronik pour les kits de démonstration de la puce.

Ce logiciel, réalisé avec Electron/React/Redux/Redux-observable/Jest, permet paramétrer les différents effets haptiques prédéfinis et les envoyer à la carte de démonstration via le port série. 

Le challenge de ce projet était d'avoir une couche de communication série, et cela sans avoir à disposition la carte électronique pour tester avant la livraison. 

Grâce à redux-observable et une batterie de tests unitaires, la connection c'est fait sans accroc, le projet est facilement maintenable et évolutif.