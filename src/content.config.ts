import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const curriculum = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "data/curriculum" }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    keywords: z.array(z.string()),
    links: z
      .object({
        web: z.string().url(),
        github: z.string().url(),
      })
      .partial()
      .optional(),
  }),
});

export const collections = { curriculum };
