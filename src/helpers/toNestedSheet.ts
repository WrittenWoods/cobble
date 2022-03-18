import { addNestedBlock } from "./addNestedBlock";
import { NestedBlock, SearchBlock } from "./interfaces";

// Helper method for converting a one-dimensional object array sheet into a nested object sheet.

export const toNestedSheet = function convertOneDimensionalSheetIntoNestedSheet
  (arr: SearchBlock[]) {

  let nestedSheet: NestedBlock[] = []

  for (let i = 0; i < arr.length; i++) {
    addNestedBlock(arr[i], nestedSheet)
  }

  return nestedSheet

}
