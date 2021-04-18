---
to: data/curriculum/en/<%= date.replace(/ /g, "") %>-<%= h.inflection.dasherize(title) %>.md
---

---
date: <%= date %>
title: <%= title %>
keywords: <% keywords.split(",").map(i => i.trim()).forEach(keyword => { %>
  - <%= keyword %><% }) %>
---

Start writing you story here! Good luck! 🤗