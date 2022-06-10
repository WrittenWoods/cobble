import { addNestedBlock } from "./addNestedBlock";
import { NestedBlock, SearchBlock } from "./interfaces";

// Accepts: One dimensional character sheet
// Returns: Nested character sheet

export const toNestedSheet = function convertOneDimensionalSheetIntoNestedSheet
  (arr: SearchBlock[]) {

  let nestedSheet: NestedBlock[] = []

  for (let i = 0; i < arr.length; i++) {
    addNestedBlock(arr[i], nestedSheet)
  }

  return nestedSheet

}
