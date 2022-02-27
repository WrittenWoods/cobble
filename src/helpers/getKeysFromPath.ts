
// Converts user input of the form "spellbook.spells.cantrips" into ["spellbook", "spells", "cantrips"]

export const getKeysFromPath = function createArrayOfKeysFromPathString
  (str: string): string[] {

  let strArr = str.split(".")

  return strArr

}
