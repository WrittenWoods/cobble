interface Snippet {
  title: string,
  content: string | string[] | Snippet | Snippet[]
}

export const charSheet: Snippet[] = [
  { title: `name`, content: `Valdoria Skypincher` },
  { title: `race`, content: `high elf` },
  { title: `dexterity`, content: `16` },
  { title: `weapons`, content: [
    { title: `longsword`, content: `1d8+2 slashing damage` },
    { title: `bow`, content: `1d8 piercing damage` }
  ]},
  { title: `stealth`, content: `[dexterity + 1d20]` }
];
