import { NestedBlock, SearchBlock } from "./interfaces";

// Function that determines if a snippet is the deepest nested object in a sheet.
// Should return true for strings and string arrays, false for an array with a snippet in it.

export const endOfTitlePath = function checkContentForStringOrStringsArray
  (snippet: NestedBlock | SearchBlock): boolean {

  if (Array.isArray(snippet.content)) {
    for (let i = 0; i < snippet.content.length; i++) {
      if (typeof snippet.content[i] !== 'string') { return false }
    }
  }

  return true

}
