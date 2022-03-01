import { Snippet } from "./helpers/interfaces";

// Character sheet in the form of an array of nested Snippets.

export const starterSheet: Snippet[] = [

  {title: 'main page', content: [ // Page 1
    { title: `name`, content: `Bardly Bardson` },
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
      { title: `strength`, content: `[(abilityScores.strength - 10) / 2]` },
      { title: `dexterity`, content: `[(abilityScores.dexterity - 10) / 2]` },
      { title: `constitution`, content: `[(abilityScores.constitution - 10) / 2]` },
      { title: `intelligence`, content: `[(abilityScores.intelligence - 10) / 2]` },
      { title: `wisdom`, content: `[(abilityScores.wisdom - 10) / 2]` },
      { title: `charisma`, content: `[(abilityScores.charisma - 10) / 2]` },
    ]},

    { title: `saving throws`, content: [
      { title: `strength`, content: `[abilityModifiers.strength]` },
      { title: `dexterity`, content: `[abilityModifiers.dexterity + proficiencyBonus]` },
      { title: `constitution`, content: `[abilityModifiers.constitution]` },
      { title: `intelligence`, content: `[abilityModifiers.intelligence]` },
      { title: `wisdom`, content: `[abilityModifiers.wisdom]` },
      { title: `charisma`, content: `[abilityModifiers.charisma + proficiencyBonus]` },
    ]},

    { title: `skills`, content: [
      { title: `persuasion`, content: `[abilityModifiers.charisma + proficiencyBonus * 2]` },
      { title: `deception`, content: `[abilityModifiers.charisma + proficiencyBonus]` },
      { title: `perception`, content: `[abilityModifiers.wisdom + proficiencyBonus]` },
      { title: `arcana`, content: `[abilityModifiers.intelligence + proficiencyBonus]` },
      { title: `history`, content: `[abilityModifiers.intelligence + proficiencyBonus * 2]`},
      { title: `acrobatics`, content: `[abilityModifiers.dexterity + proficiencyBonus]` },
      { title: `sleight of hand`, content: `[abilityModifiers.dexterity + proficiencyBonus]` },
      { title: `stealth`, content: `[abilityModifiers.dexterity + proficiencyBonus]` }
    ]},

    { title: `proficiency bonus`, content: `3` },
    { title: `inspiration`, content: `[x]` },
    { title: `speed`, content: `30` },

    { title: `maximum hit points`, content: `[8 + 4d8.roll + 5 * abilityModifiers.constitution]` },
    { title: `current hit points`, content: `[maximumHitPoints]` },

    { title: `attacks`, content: [
      { title: `longsword`, content: `[1d8+2] slashing` },
      { title: `bow`, content: `[1d8] piercing, [1d6] fire` }
    ]},

    { title: `passive wisdom`, content: `[perception]` },

    { title: `money`, content: `[50] gold pieces`},
    { title: `equipment`, content: [`backpack`, `bedroll`, `rope`] },

    { title: `features & traits`, content: [
      `Bardic Inspiration [d8]`,
      `Jack of All Trades (+[classLevels.bard / 2.floor] bonus)`,
      `Song of Rest [d6]`,
      `Expertise (persuasion, history)`,
      `Font of Inspiration`,
      `Cutting Words`
    ]},

  ]},

  { title: 'spellbook', content: [ // Page 2
    { title: `spell save DC`, content: `[8 + proficiencyBonus + abilityModifiers.charisma]` },
    { title: `spell attack bonus`, content: `[abilityModifiers.charisma + proficiencyBonus]` },

    { title: `spells`, content: [
      { title: `cantrips`, content: [`true strike`, `dancing lights`, `mending`]},
      { title: `1st level`, content: [`cure wounds`, `tashas hideous laughter`, `feather fall`, `identify`] },
      { title: `2nd level`, content: [`hold person`, `invisibility`, `blindness/deafness`] },
      { title: `3rd level`, content: [`clairvoyance`] }
    ]},
  ]}

];
