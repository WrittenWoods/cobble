import Fuse from 'fuse.js';
import { SearchSnippet } from "./interfaces";

export const searchSheet = function useTitlePathToSearchOneDSheet
(searchQuery: string, sheet: SearchSnippet[]): string[] {

  const options = {
    keys: ['titlePath']
  }

  const fuse = new Fuse(sheet, options)
  const foundSnippets = fuse.search(searchQuery)

  const result: string[] = []
  const resultsCount = foundSnippets.length > 5 ? 5 : foundSnippets.length

  for (let i = 0; i < resultsCount; i++) {
    result.push(foundSnippets[i].item.titlePath.join("."))
  }

  return result

}
