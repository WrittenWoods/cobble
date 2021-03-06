import Fuse from 'fuse.js';
import { SearchBlock } from "./interfaces";

// Accepts: 1) A search query and 2) the data of a one-dimensional character sheet.
// Returns: An array of strings representing search results.

export const searchSheet = function useCrumbTrailToSearchOneDSheet
(searchQuery: string, sheet: SearchBlock[]): string[] {

  const options = {
    keys: ['crumbTrail']
  }

  const fuse = new Fuse(sheet, options)
  const foundNestedBlocks = fuse.search(searchQuery)

  const result: string[] = []
  const resultsCount = foundNestedBlocks.length > 5 ? 5 : foundNestedBlocks.length

  for (let i = 0; i < resultsCount; i++) {
    result.push(foundNestedBlocks[i].item.crumbTrail.join("."))
  }

  return result

}
