// Identifies a match between a user input title path like "mainpage.abilityScores.dexterity"
// and a title path in a block like ["main-page", "Ability Scores", "DEXTERITY"]
// Ignores whitespace and hyphens in titles

export const matchTitlePath = function matchStringInputWithCorrespondingTitlePath
(str: string, arr: string[]): boolean {

  let newStr = arr.map(x => x.toLowerCase().replace(/[\s]+|\-/, "")).join('.')
  return newStr === str.toLowerCase()

}
