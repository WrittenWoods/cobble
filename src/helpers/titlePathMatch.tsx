export function titlePathMatch(sheetPath: string[], titlePath: string[]): boolean {
  let match = true
  for (let i = 0; i < titlePath.length; i++) {
    match = sheetPath.includes(titlePath[i])
  }
  return match
}
