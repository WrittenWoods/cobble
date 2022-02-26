import { nestSnippet } from "./nestSnippet";

export const toNestedSheet = function convertOneDimensionalSheetIntoNestedSheet
  (arr: SearchSnippet[]) {

  let nestedSheet = []

  for (let i = 0; i < arr.length; i++) {
    nestSnippet(arr[i], nestedSheet)
  }

  return nestedSheet

}
