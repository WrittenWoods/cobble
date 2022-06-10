// Accepts: 1) Two breadcrumb trails through a nested character sheet
// Returns: true as long as all breadcrumbs in the second are present in the first, false otherwise

export function titlePathMatch(sheetPath: string[], titlePath: string[]): boolean {
  for (let i = 0; i < titlePath.length; i++) {
    if (sheetPath[i] !== titlePath[i]) { return false }
  }
  return true
}
