// Accepts: 1) Two breadcrumb trails through a nested character sheet
// Returns: true as long as all breadcrumbs in the second are present in the first, false otherwise

export function crumbTrailMatch(sheetPath: string[], crumbTrail: string[]): boolean {
  for (let i = 0; i < crumbTrail.length; i++) {
    if (sheetPath[i] !== crumbTrail[i]) { return false }
  }
  return true
}
