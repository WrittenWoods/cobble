import { NestedBlock } from "./helpers/interfaces";

// Character sheet in the form of an array of nested NestedBlocks.

export const starterSheetData: NestedBlock[] = [

  {title: 'main page', display: "window", content: [ // Page 1
    { title: `name`, display: "inline", content: `Kvothe` },
    { title: `class levels`, display: "window", content: [
      { title: `bard`, display: "inline", content: `5` },
    ]},

    { title: `ability scores`, display: "window", content: [
      { title: `strength`, display: "inline", content: `10` },
      { title: `dexterity`, display: "inline", content: `14` },
      { title: `constitution`, display: "inline", content: `12` },
      { title: `intelligence`, display: "inline", content: `13` },
      { title: `wisdom`, display: "inline", content: `8` },
      { title: `charisma`, display: "inline", content: `15` }
    ]},

    { title: `ability modifiers`, display: "window", content: [
      { title: `strength`, display: "inline", content: `[(mainPage.abilityScores.strength - 10) / 2]` },
      { title: `dexterity`, display: "inline", content: `[(mainPage.abilityScores.dexterity - 10) / 2]` },
      { title: `constitution`, display: "inline", content: `[(mainPage.abilityScores.constitution - 10) / 2]` },
      { title: `intelligence`, display: "inline", content: `[(mainPage.abilityScores.intelligence - 10) / 2]` },
      { title: `wisdom`, display: "inline", content: `[(mainPage.abilityScores.wisdom - 10) / 2]` },
      { title: `charisma`, display: "inline", content: `[(mainPage.abilityScores.charisma - 10) / 2]` },
    ]},

    { title: `saving throws`, display: "window", content: [
      { title: `strength`, display: "inline", content: `[mainPage.abilityModifiers.strength]` },
      { title: `dexterity`, display: "inline", content: `[mainPage.abilityModifiers.dexterity + mainPage.proficiencyBonus]` },
      { title: `constitution`, display: "inline", content: `[mainPage.abilityModifiers.constitution]` },
      { title: `intelligence`, display: "inline", content: `[mainPage.abilityModifiers.intelligence]` },
      { title: `wisdom`, display: "inline", content: `[mainPage.abilityModifiers.wisdom]` },
      { title: `charisma`, display: "inline", content: `[mainPage.abilityModifiers.charisma + mainPage.proficiencyBonus]` },
    ]},

    { title: `proficiency bonus`, display: "inline", content: `3` },

    { title: `maximum hit points`, display: "inline", content: `[8 + 8 + 5 * mainPage.abilityModifiers.constitution]` },
    { title: `current hit points`, display: "inline", content: `[mainPage.maximumHitPoints + 2]` },

    { title: `attacks`, display: "window", content: [
      { title: `longsword`, display: "inline", content: `[1d8 + mainPage.abilityModifiers.dexterity slashing]` },
      { title: `bow`, display: "inline", content: `[1d8 piercing], [1d6] fire` }
    ]},

  ]},

  { title: 'spellbook', display: "window", content: [ // Page 2
    { title: `spell save DC`, display: "inline", content: `[8 + mainPage.proficiencyBonus + mainPage.abilityModifiers.charisma]` },
    { title: `spell attack bonus`, display: "inline", content: `[mainPage.abilityModifiers.charisma + mainPage.proficiencyBonus]` },

    { title: `spells`, display: "window", content: [
      { title: `cantrips`, display: "window", content: `true strike, dancing lights, mending`},
      { title: `1st level`, display: "window", content: `cure wounds, tashas hideous laughter, feather fall, identify` },
      { title: `2nd level`, display: "window", content: `hold person, invisibility, blindness/deafness` },
      { title: `3rd level`, display: "window", content: `clairvoyance` }
    ]},
  ]}

];
