
// Converts user input of the form ["spellbook", "spells", "cantrips"] into "spellbook.spells.cantrips"

export const getKeysFromPath = function createArrayOfKeysFromPathString
  (keys: string[]): string {

  let path = keys.join(".")

  return path

}
