import Fuse from 'fuse.js';
import { SearchBlock } from "./interfaces";

// Uses Fuse module to search one-dimensional sheet array

export const searchSheet = function useTitlePathToSearchOneDSheet
(searchQuery: string, sheet: SearchBlock[]): string[] {

  const options = {
    keys: ['titlePath']
  }

  const fuse = new Fuse(sheet, options)
  const foundNestedBlocks = fuse.search(searchQuery)

  const result: string[] = []
  const resultsCount = foundNestedBlocks.length > 5 ? 5 : foundNestedBlocks.length

  for (let i = 0; i < resultsCount; i++) {
    result.push(foundNestedBlocks[i].item.titlePath.join("."))
  }

  return result

}
