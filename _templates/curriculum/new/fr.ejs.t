---
to: data/curriculum/fr/<%= date.replace(/ /g, "") %>-<%= h.inflection.dasherize(title) %>.md
---

---
date: <%= date %>
title: <%= title %>
keywords: <% keywords.split(",").map(i => i.trim()).forEach(keyword => { %>
  - <%= keyword %><% }) %>
---

À toi de jouer mon coco ! 😎🤘