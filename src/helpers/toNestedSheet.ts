import { nestSnippet } from "./nestSnippet";

// Helper method for converting a one-dimensional object array sheet into a nested object sheet.

export const toNestedSheet = function convertOneDimensionalSheetIntoNestedSheet
  (arr: SearchSnippet[]) {

  let nestedSheet = []

  for (let i = 0; i < arr.length; i++) {
    nestSnippet(arr[i], nestedSheet)
  }

  return nestedSheet

}
