interface Snippet {
  title: string,
  content: string | string[] | Snippet | Snippet[]
}

export const charSheet = [

  [ // Page 1
    { title: `name`, content: `Valdoria Skypincher` },
    { title: `class levels`, content: [
      { title: `bard`, content: `5` },
    ]},
    { title: `background`, content: `guild artisan` },
    { title: `race`, content: `high elf` },
    { title: `alignment`, content: `neutral good` },
    { title: `experience points`, content: `7000` },

    { title: `ability scores`, content: [
      { title: `strength`, content: `10` },
      { title: `dexterity`, content: `14` },
      { title: `constitution`, content: `12` },
      { title: `intelligence`, content: `13` },
      { title: `wisdom`, content: `10` },
      { title: `charisma`, content: `15` }
    ]},

    { title: `ability modifiers`, content: [
      { title: `strength`, content: `[(ability scores.strength - 10) / 2]` },
      { title: `dexterity`, content: `[(ability scores.dexterity - 10) / 2]` },
      { title: `constitution`, content: `[(ability scores.constitution - 10) / 2]` },
      { title: `intelligence`, content: `[(ability scores.intelligence - 10) / 2]` },
      { title: `wisdom`, content: `[(ability scores.wisdom - 10) / 2]` },
      { title: `charisma`, content: `[(ability scores.charisma - 10) / 2]` },
    ]},

    { title: `saving throws`, content: [
      { title: `strength`, content: `[ability modifiers.strength]` },
      { title: `dexterity`, content: `[ability modifiers.dexterity + proficiency bonus]` },
      { title: `constitution`, content: `[ability modifiers.constitution]` },
      { title: `intelligence`, content: `[ability modifiers.intelligence]` },
      { title: `wisdom`, content: `[ability modifiers.wisdom]` },
      { title: `charisma`, content: `[ability modifiers.charisma + proficiency bonus]` },
    ]},

    { title: `skills`, content: [
      { title: `persuasion`, content: `[ability modifiers.charisma + proficiency bonus * 2]` },
      { title: `deception`, content: `[ability modifiers.charisma + proficiency bonus]` },
      { title: `perception`, content: `[ability modifiers.wisdom + proficiency bonus]` },
      { title: `arcana`, content: `[ability modifiers.intelligence + proficiency bonus]` },
      { title: `history`, content: `[ability modifiers.intelligence + proficiency bonus * 2]`},
      { title: `acrobatics`, content: `[ability modifiers.dexterity + proficiency bonus]` },
      { title: `sleight of hand`, content: `[ability modifiers.dexterity + proficiency bonus]` },
      { title: `stealth`, content: `[ability modifiers.dexterity + proficiency bonus]` }
    ]},

    { title: `proficiency bonus`, content: `3` },
    { title: `inspiration`, content: `[x]` },
    { title: `speed`, content: `30` },

    { title: `maximum hit points`, content: `[8 + 4d8.roll + 5 * ability modifiers.constitution]` },
    { title: `current hit points`, content: `[maximum hit points]` },

    { title: `attacks`, content: [
      { title: `longsword`, content: `[1d8+2] slashing` },
      { title: `bow`, content: `[1d8] piercing, [1d6] fire` }
    ]},

    { title: `passive wisdom`, content: `[perception]` },

    { title: `money`, content: `[50] gold pieces`},
    { title: `equipment`, content: [`backpack`, `bedroll`, `rope`] },

    { title: `features & traits`, content: [
      `Bardic Inspiration [d8]`,
      `Jack of All Trades (+[class levels.bard / 2.floor] bonus)`,
      `Song of Rest [d6]`,
      `Expertise (persuasion, history)`,
      `Font of Inspiration`,
      `Cutting Words`
    ]},

  ],

  [ // Page 2
    { title: `spell save DC`, content: `[8 + proficiency bonus + ability modifiers.charisma]` },
    { title: `spell attack bonus`, content: `[ability modifiers.charisma + proficiency bonus]` },

    { title: `spells`, content: [
      { title: `cantrips`, content: [`true strike`, `dancing lights`, `mending`]},
      { title: `1st level`, content: [`cure wounds`, `tashas hideous laughter`, `feather fall`, `identify`] },
      { title: `2nd level`, content: [`hold person`, `invisibility`, `blindness/deafness`] },
      { title: `3rd level`, content: [`clairvoyance`] }
    ]},
  ]

];
