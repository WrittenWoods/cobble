import { NestedBlock, SearchBlock } from "./interfaces";

// Function that determines if a block is the deepest nested object in a sheet.
// Should return true for strings and string arrays, false for an array with a block in it.

export const endOfCrumbTrail = function checkContentForStringOrStringsArray
  (block: NestedBlock): boolean {

  if (Array.isArray(block.content)) {
    for (let i = 0; i < block.content.length; i++) {
      if (typeof block.content[i] !== 'string') { return false }
    }
  }

  return true

}
