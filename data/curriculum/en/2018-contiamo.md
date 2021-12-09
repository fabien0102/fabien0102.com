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
  - openapi
  - k8s
  - TDD
---

An amazing team and an ambitious product, I've been working with **Contiamo** since 2018 and was part of the product-shaping since the beginning of a strategic change of the company.

We started by providing a solution helping datascientist to manage their jupyter notebooks: collaboration & easy deployment of function as service.

This solution was combined with a query engine, capable of querying any kind of databases with only one flavor of SQL.

Now, after a bit of refinement, our product is focused on cataloging, giving access and querying large data landscapes.

With this in mind, as a Frontend engineer, I had a LOT of fun challenges:

- Building an entire SQL editor (based on Monaco editor)
- Parsing/manipulating SQL to provide some nice helpers ([rhombic](https://github.com/contiamo/rhombic))
- Streamlining the backend/frontend communication by generating Typescript components from OpenAPI specifications ([restful-react](https://github.com/contiamo/restful-react))
- Building some client projects on top of our product with graphql as datalayer
- Crafting a nice solution to manage our runtime configuration ([react-runtime-config](https://github.com/contiamo/react-runtime-config))
- Going deeper on accessibility
- Playing with k8s to have local/hosted pull-request previews

This was only possible thanks to my amazing teammates, always there to challenge the smallest edge case! Our favorite game is to slow the network, click everywhere, kill the network sometime, and see if everything still looks good! 😅 No better way to improve the robustness of your application!

Fun fact, this stack is almost fully REST, and the tooling of OpenAPI was really poor, but not anymore! A bit frustrated with the tooling available, I took this opportunity to create something very cool. Now, we have full autocompletion of our backend endpoints in VSCode, and can even use the frontend codebase as regression test for the backend 😁.

[![web](/web-badge.svg)](https://www.contiamo.com/)
