import { nestSnippet } from "./nestSnippet";
import { Snippet, SearchSnippet } from "./interfaces";

// Helper method for converting a one-dimensional object array sheet into a nested object sheet.

export const toNestedSheet = function convertOneDimensionalSheetIntoNestedSheet
  (arr: SearchSnippet[]) {

  let nestedSheet: Snippet[] = []

  for (let i = 0; i < arr.length; i++) {
    nestSnippet(arr[i], nestedSheet)
  }

  return nestedSheet

}
