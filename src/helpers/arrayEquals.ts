// Check for equality between two arrays containing strings

export const arrayEquals = function checkShallowEqualityBetweenStringArrays
(a: string[], b: string[]): boolean {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}
