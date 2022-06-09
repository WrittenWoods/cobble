// Accepts: Two arrays containing strings
// Returns: A boolean representing whether those arrays are identical

export const arrayEquals = function checkShallowEqualityBetweenStringArrays
(a: string[], b: string[]): boolean {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}
