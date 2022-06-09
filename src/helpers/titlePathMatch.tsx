// Checks for a match between an array of strings and the titlePath property of a character sheet
// Returns true as long as all the strings in the titlePath

export function titlePathMatch(sheetPath: string[], titlePath: string[]): boolean {
  for (let i = 0; i < titlePath.length; i++) {
    if (sheetPath[i] !== titlePath[i]) { return false }
  }
  return true
}
