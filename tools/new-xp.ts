import { text, isCancel, outro } from "@clack/prompts";
import { writeFile } from "node:fs/promises";
import transform from "case";

const date = await ask("Period of the XP (example: '2024 - 2025')");
const title = await ask("Title of the XP?");
const keywords = await ask("Keywords? (separated by commas)");

const to = `data/curriculum/${date.split(" ")[0]}-${transform.kebab(title)}.md`;

await writeFile(
  to,
  `---
date: ${date}
title: ${title}
keywords:
${keywords
  .split(",")
  .map((i) => `  - ${i.trim()}`)
  .join("\n")}
---

Start writing your story here! Good luck! ❤️`
);

outro(`Et voilà! ${to} is ready to be crafted!`);

async function ask(message: string) {
  const value = await text({ message });
  if (isCancel(value)) {
    outro("Changed your mind? See you later!");
    process.exit(0);
  }
  return value;
}
