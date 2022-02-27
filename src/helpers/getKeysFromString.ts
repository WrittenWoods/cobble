
// Converts user input of the form "spellbook.spells.cantrips" into ["spellbook", "spells", "cantrips"]

export const getKeysFromString = function createArrayOfKeysFromString
  (str: string): string[] {

  let strArr = str.split(".")

  return strArr

}
