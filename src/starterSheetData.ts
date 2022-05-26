import { NestedBlock } from "./helpers/interfaces";

// Character sheet in the form of an array of nested NestedBlocks.

export const starterSheetData: NestedBlock[] = [

  {title: 'main page', content: [ // Page 1
    { title: `name`, content: `Kvothe` },
    { title: `class levels`, content: [
      { title: `bard`, content: `5` },
    ]},

    { title: `ability scores`, content: [
      { title: `strength`, content: `10` },
      { title: `dexterity`, content: `14` },
      { title: `constitution`, content: `12` },
      { title: `intelligence`, content: `13` },
      { title: `wisdom`, content: `8` },
      { title: `charisma`, content: `15` }
    ]},

    { title: `ability modifiers`, content: [
      { title: `strength`, content: `[(mainPage.abilityScores.strength - 10) / 2]` },
      { title: `dexterity`, content: `[(mainPage.abilityScores.dexterity - 10) / 2]` },
      { title: `constitution`, content: `[(mainPage.abilityScores.constitution - 10) / 2]` },
      { title: `intelligence`, content: `[(mainPage.abilityScores.intelligence - 10) / 2]` },
      { title: `wisdom`, content: `[(mainPage.abilityScores.wisdom - 10) / 2]` },
      { title: `charisma`, content: `[(mainPage.abilityScores.charisma - 10) / 2]` },
    ]},

    { title: `saving throws`, content: [
      { title: `strength`, content: `[mainPage.abilityModifiers.strength]` },
      { title: `dexterity`, content: `[mainPage.abilityModifiers.dexterity + mainPage.proficiencyBonus]` },
      { title: `constitution`, content: `[mainPage.abilityModifiers.constitution]` },
      { title: `intelligence`, content: `[mainPage.abilityModifiers.intelligence]` },
      { title: `wisdom`, content: `[mainPage.abilityModifiers.wisdom]` },
      { title: `charisma`, content: `[mainPage.abilityModifiers.charisma + mainPage.proficiencyBonus]` },
    ]},

    { title: `proficiency bonus`, content: `3` },

    { title: `maximum hit points`, content: `[8 + 8 + 5 * mainPage.abilityModifiers.constitution]` },
    { title: `current hit points`, content: `[mainPage.maximumHitPoints + 2]` },

    { title: `attacks`, content: [
      { title: `longsword`, content: `[1d8 + mainPage.abilityModifiers.dexterity slashing]` },
      { title: `bow`, content: `[1d8 piercing], [1d6] fire` }
    ]},

  ]},

  { title: 'spellbook', content: [ // Page 2
    { title: `spell save DC`, content: `[8 + mainPage.proficiencyBonus + mainPage.abilityModifiers.charisma]` },
    { title: `spell attack bonus`, content: `[mainPage.abilityModifiers.charisma + mainPage.proficiencyBonus]` },

    { title: `spells`, content: [
      { title: `cantrips`, content: `true strike, dancing lights, mending`},
      { title: `1st level`, content: `cure wounds, tashas hideous laughter, feather fall, identify` },
      { title: `2nd level`, content: `hold person, invisibility, blindness/deafness` },
      { title: `3rd level`, content: `clairvoyance` }
    ]},
  ]}

];
