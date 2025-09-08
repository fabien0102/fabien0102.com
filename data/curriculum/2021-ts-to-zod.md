---
date: 2021 (still active)
title: Open-source - ts-to-zod
keywords:
  - typescript
  - open-source
  - codegen
---

We had an interesting problem at work, some generated types where lying and caused some sneaky problems later in production.

Indeed, we were generating a SDK from open-api specs (thanks to [openapi-codegen](https://github.com/fabien0102/openapi-codegen), another project of mine), but the underline specs were written by hand. To solve this, I’ve decided to start my most popular github project: ts-to-zod.

The goal is quite straight-forward, take the generated types and convert them to zod schema (runtime validation library). Later on, I will use those schemas to validate any response from the API to make sure they are 100% correct.

Interesting challenge, since we had a lot of types, I didn’t want any false-positive. This is with this in mind that I came with a "runtime validation" of the generated zod schema during the generation process. The idea is quite simple, every `z.infer<originalType>` should be strictly equal to the original type. This worked perfectly, we found and fixed all the specs mistakes and had 0 false-positive!
