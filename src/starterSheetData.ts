import { NestedBlock } from "./helpers/interfaces";

// Character sheet in the form of an array of nested NestedBlocks.

export const starterSheetData: NestedBlock[] = [

  {title: 'main page', displayInfo: { displayed: true, displayType: "new panel" } , content: [ // Page 1
    { title: `name`, displayInfo: { displayed: false, displayType: "inline" } , content: `Kvothe` },
    { title: `class levels`, displayInfo: { displayed: false, displayType: "new panel" } , content: [
      { title: `bard`, displayInfo: { displayed: false, displayType: "inline" } , content: `5` },
    ]},

    { title: `ability scores`, displayInfo: { displayed: false, displayType: "new panel" } , content: [
      { title: `strength`, displayInfo: { displayed: false, displayType: "inline" } , content: `10` },
      { title: `dexterity`, displayInfo: { displayed: false, displayType: "inline" } , content: `14` },
      { title: `constitution`, displayInfo: { displayed: false, displayType: "inline" } , content: `12` },
      { title: `intelligence`, displayInfo: { displayed: false, displayType: "inline" } , content: `13` },
      { title: `wisdom`, displayInfo: { displayed: false, displayType: "inline" } , content: `8` },
      { title: `charisma`, displayInfo: { displayed: false, displayType: "inline" } , content: `15` }
    ]},

    { title: `ability modifiers`, displayInfo: { displayed: false, displayType: "new panel" } , content: [
      { title: `strength`, displayInfo: { displayed: false, displayType: "inline" } , content: `[(mainPage.abilityScores.strength - 10) / 2]` },
      { title: `dexterity`, displayInfo: { displayed: false, displayType: "inline" } , content: `[(mainPage.abilityScores.dexterity - 10) / 2]` },
      { title: `constitution`, displayInfo: { displayed: false, displayType: "inline" } , content: `[(mainPage.abilityScores.constitution - 10) / 2]` },
      { title: `intelligence`, displayInfo: { displayed: false, displayType: "inline" } , content: `[(mainPage.abilityScores.intelligence - 10) / 2]` },
      { title: `wisdom`, displayInfo: { displayed: false, displayType: "inline" } , content: `[(mainPage.abilityScores.wisdom - 10) / 2]` },
      { title: `charisma`, displayInfo: { displayed: false, displayType: "inline" } , content: `[(mainPage.abilityScores.charisma - 10) / 2]` },
    ]},

    { title: `saving throws`, displayInfo: { displayed: false, displayType: "new panel" } , content: [
      { title: `strength`, displayInfo: { displayed: false, displayType: "inline" } , content: `[mainPage.abilityModifiers.strength]` },
      { title: `dexterity`, displayInfo: { displayed: false, displayType: "inline" } , content: `[mainPage.abilityModifiers.dexterity + mainPage.proficiencyBonus]` },
      { title: `constitution`, displayInfo: { displayed: false, displayType: "inline" } , content: `[mainPage.abilityModifiers.constitution]` },
      { title: `intelligence`, displayInfo: { displayed: false, displayType: "inline" } , content: `[mainPage.abilityModifiers.intelligence]` },
      { title: `wisdom`, displayInfo: { displayed: false, displayType: "inline" } , content: `[mainPage.abilityModifiers.wisdom]` },
      { title: `charisma`, displayInfo: { displayed: false, displayType: "inline" } , content: `[mainPage.abilityModifiers.charisma + mainPage.proficiencyBonus]` },
    ]},

    { title: `proficiency bonus`, displayInfo: { displayed: false, displayType: "inline" } , content: `3` },

    { title: `maximum hit points`, displayInfo: { displayed: false, displayType: "inline" } , content: `[8 + 8 + 5 * mainPage.abilityModifiers.constitution]` },
    { title: `current hit points`, displayInfo: { displayed: false, displayType: "inline" } , content: `[mainPage.maximumHitPoints + 2]` },

    { title: `attacks`, displayInfo: { displayed: false, displayType: "new panel" } , content: [
      { title: `longsword`, displayInfo: { displayed: false, displayType: "inline" } , content: `[1d8 + mainPage.abilityModifiers.dexterity slashing]` },
      { title: `bow`, displayInfo: { displayed: false, displayType: "inline" } , content: `[1d8 piercing], [1d6] fire` }
    ]},

  ]},

  { title: 'spellbook', displayInfo: { displayed: true, displayType: "new panel" } , content: [ // Page 2
    { title: `spell save DC`, displayInfo: { displayed: false, displayType: "inline" } , content: `[8 + mainPage.proficiencyBonus + mainPage.abilityModifiers.charisma]` },
    { title: `spell attack bonus`, displayInfo: { displayed: false, displayType: "inline" } , content: `[mainPage.abilityModifiers.charisma + mainPage.proficiencyBonus]` },

    { title: `spells`, displayInfo: { displayed: false, displayType: "new panel" } , content: [
      { title: `cantrips`, displayInfo: { displayed: false, displayType: "new panel" } , content: `true strike, dancing lights, mending`},
      { title: `1st level`, displayInfo: { displayed: false, displayType: "new panel" } , content: `cure wounds, tashas hideous laughter, feather fall, identify` },
      { title: `2nd level`, displayInfo: { displayed: false, displayType: "new panel" } , content: `hold person, invisibility, blindness/deafness` },
      { title: `3rd level`, displayInfo: { displayed: false, displayType: "new panel" } , content: `clairvoyance` }
    ]},
  ]}

];
